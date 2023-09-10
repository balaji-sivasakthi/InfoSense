import pandas as pd
import joblib,os
import seaborn as sns
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import precision_recall_fscore_support as score, mean_squared_error
from sklearn.metrics import confusion_matrix,accuracy_score
from nltk.tokenize import word_tokenize
from gensim.models.doc2vec import TaggedDocument
import nltk 
from nltk.corpus import stopwords
from sklearn import preprocessing 
from sklearn.feature_extraction.text import TfidfVectorizer
import matplotlib.pyplot as plt
import re
import warnings
import pickle
from wordcloud import WordCloud

# Vectorizer
news_vectorizer = open("models\\Vectorizer", "rb")
news_cv = joblib.load(news_vectorizer)

#Loading Model
def load_prediction_model(model):
    loaded_model = joblib.load(open(os.path.join(model), "rb"))
    return loaded_model

# Get Category from Numeric Value
def get_category(val, dict):
    for key, value in dict.items():
        if val == value:
            return key

def add_parameter_ui(clf_name):
    params={}

    if clf_name == "Logistic Regression":
        R = 0.1
        MI = 50
        params["R"] = R
        params["MI"] = MI

    elif clf_name == "KNN":
        K = 1
        params["K"] = K

    elif clf_name == "SVM":
        C = 0.01
        kernel = 'linear'
        params["C"] = C
        params["kernel"] = kernel

    elif clf_name == "Decision Tree":
        M = 2
        C = 'gini'
        SS = 1
        params["M"] = M
        params["C"] = C
        params["SS"] = SS

    return params


def get_classifier(clf_name,params):
    global clf
    if clf_name == "Logistic Regression":
        clf = LogisticRegression(C=params["R"],max_iter=params["MI"])

    elif clf_name == "KNN":
        clf = KNeighborsClassifier(n_neighbors=params["K"])

    elif clf_name == "SVM":
        clf = SVC(kernel=params["kernel"],C=params["C"])

    elif clf_name == "Decision Tree":
        clf = DecisionTreeClassifier(max_depth=params["M"],criterion=params["C"])

    elif clf_name == "Naive Bayes":
        clf = MultinomialNB()

    return clf

def process_text(text):
    text = text.lower().replace('\n',' ').replace('\r','').strip()
    text = re.sub(' +', ' ', text)
    text = re.sub(r'[^\w\s]','',text)
    
    
    stop_words = set(stopwords.words('english')) 
    word_tokens = word_tokenize(text) 
    filtered_sentence = [w for w in word_tokens if not w in stop_words] 
    filtered_sentence = [] 
    for w in word_tokens: 
        if w not in stop_words: 
            filtered_sentence.append(w) 
    
    text = " ".join(filtered_sentence)
    return text

def get_dataset():
    data = pd.read_csv("data\BBC News Train.csv")
    data['News_length'] = data['Text'].str.len()
    data['Text_parsed'] = data['Text'].apply(process_text)
    label_encoder = preprocessing.LabelEncoder() 
    data['Category_target']= label_encoder.fit_transform(data['Category']) 
    return data



#Build Model
def model(clf):
    X_train,X_test,Y_train,Y_test=train_test_split(data['Text_parsed'], 
                                                    data['Category_target'],test_size=0.2,random_state=65)
    ngram_range = (1,2)
    min_df = 10
    max_df = 1.
    max_features = 300
    tfidf = TfidfVectorizer(encoding='utf-8',
                        ngram_range=ngram_range,
                        stop_words=None,
                        lowercase=False,
                        max_df=max_df,
                        min_df=min_df,
                        max_features=max_features,
                        norm='l2',
                        sublinear_tf=True)
                        
    features_train = tfidf.fit_transform(X_train).toarray()
    labels_train = Y_train
    

    features_test = tfidf.transform(X_test).toarray()
    labels_test = Y_test
    

    clf.fit(features_train, labels_train)
    Y_pred = clf.predict(features_test)
    acc=accuracy_score(labels_test,Y_pred)
    return clf, Y_test, Y_pred

#tokenize for nlp
def tokenize_text(text):
    tokens = []
    for sent in nltk.sent_tokenize(text):
        for word in nltk.word_tokenize(sent):
            if len(word) < 2:
                continue
            tokens.append(word.lower())
    return tokens

def vec_for_learning(model_dbow, tagged_docs):
    sents = tagged_docs.values
    targets, regressors = zip(*[(doc.tags[0], model_dbow.infer_vector(doc.words, steps=20)) for doc in sents])
    return targets, regressors

data = get_dataset()
X = data['Text_parsed']
Y = data['Category_target']


all_ml_models = ["Logistic Regression", "Naive Bayes", "Decision Tree", "SVM", "KNN"]
prediction_labels = {'business':0, 'tech':1, 'politics':2, 'sport':3, 'entertainment':4}
model_choice = all_ml_models[0]
params = add_parameter_ui(model_choice)

def findCategory(news_text):
    news_text = process_text(news_text)
    vect_text = news_cv.transform([news_text]).toarray()
    clf = get_classifier(model_choice,params)
    predictor, Y_pred,Y_test = model(clf)
    prediction = predictor.predict(vect_text)
    result = get_category(prediction, prediction_labels)
    return result