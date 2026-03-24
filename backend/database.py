from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
import urllib.parse

password = urllib.parse.quote_plus("joel@2005")
db_url=f"postgresql://postgres:{password}@localhost:5432/todo_db"
engine=create_engine(db_url)
SessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)