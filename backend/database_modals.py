from pydantic import BaseModel
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column,String,Integer


Base=declarative_base()

class UserCreate(BaseModel):
    username: str
    password: str

class Users(Base):

    __tablename__ = "Users"

    id =  Column(Integer,primary_key=True,index=True,unique=True,nullable=False)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
