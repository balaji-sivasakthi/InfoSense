from fastapi import FastAPI
from pydantic import BaseModel
from newspaper import Article
from services.predict import findCategory
from fastapi.middleware.cors import CORSMiddleware
from config.database import session
from models.history import History
from sqlalchemy import desc
import json
app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://info-sense.vercel.app"
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
    db_session = session()
    try:
        return db_session.query(History).order_by(desc(History.time_created)).all()
    except Exception as ex:
        db_session.rollback()
        raise ex

@app.get('/history/{id}')
async def getHistoryById(id):
    db_session = session()
    try:
        return db_session.query(History).get(id)
    except Exception as ex:
        db_session.rollback()
        raise ex

@app.post('/article/info')
async def getInfo(req:ArticleRequest):
    print(req.news_url)
    article = Article(req.news_url, language="en")
    article.download()
    article.parse()
    article.nlp()
    category = findCategory(article.text)
    history = History(title=article.title, news_url=req.news_url, content=article.text, short_description=article.summary, category=category, tags=article.tags)
    db_session = session()
    try:
        db_session.add(history)
        db_session.commit()
    except Exception as ex:
        db_session.rollback()
        raise ex
    return {history}
