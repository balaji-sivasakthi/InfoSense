from fastapi import FastAPI
from pydantic import BaseModel
from newspaper import Article
from services.predict import findCategory

app = FastAPI()
@app.get('/')
async def root():
    return {'message': 'Hello World!'}

class ArticleRequest(BaseModel):
    url:str

@app.post('/article/info')
async def getInfo(req:ArticleRequest):

    article = Article(req.url, language="en")
    article.download()
    article.parse()
    article.nlp()
    category = findCategory(article.summary)
    
    return {
        "data":{
            "title":article.title,
            "summary":article.summary,
            "content":article.text,
            "tags":article.keywords,
            "category":category
        }
    }


