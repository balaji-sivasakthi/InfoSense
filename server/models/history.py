from sqlalchemy import Column, Integer, String, ARRAY, DateTime
from config.database import Base, engine
from sqlalchemy.sql import func
from uuid import uuid4



class History(Base):
    __tablename__ = "histories"

    id = Column(String, primary_key = True, default=lambda: uuid4().int >> (128 - 32), index = True)
    title = Column(String)
    short_description = Column(String)
    content = Column(String)
    category = Column(String)
    tags = Column(ARRAY(String))
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now())

    def __init__(self, title, short_description, content, category, tags):
        self.title = title
        self.short_description = short_description
        self.content = content
        self.category = category
        self.tags = tags 

Base.metadata.create_all(bind=engine)