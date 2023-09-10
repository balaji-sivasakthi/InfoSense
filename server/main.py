from fastapi import FastAPI
from pydantic import BaseModel
from newspaper import Article
from services.predict import findCategory
from fastapi.middleware.cors import CORSMiddleware
from config.database import session
from models.history import History
import json
app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
async def root():
    return {'message': 'Hello World!'}

class ArticleRequest(BaseModel):
    news_url:str

@app.get('/history/getAll')
async def getAllHistory():
    return session.query(History).all()


@app.post('/article/info')
async def getInfo(req:ArticleRequest):

    article = Article(req.news_url, language="en")
    article.download()
    article.parse()
    article.nlp()
    category = findCategory(article.summary)
    human = History(title=article.title, content=article.text, short_description=article.summary, category=category, tags=article.tags)
    session.add(human)
    session.commit()
    return {"title":article.title,
            "category":category,
            "content":article.text,
            "tags":article.tags, 
            "short_description":article.summary}
