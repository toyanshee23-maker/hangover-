from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = "postgresql://postgres:Chetna112007@localhost:5432/restaurant_db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)



Base = declarative_base()

class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    phone = Column(String)
    food_ordered = Column(String)
    allergy=Column(String)
    age=Column(String)
    special_notes=Column(String)

# Create the table
Base.metadata.create_all(bind=engine)

print("✅ Customers table created")