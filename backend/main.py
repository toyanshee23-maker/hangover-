from fastapi import FastAPI, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, Customer as DBCustomer

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Schema
class CustomerSchema(BaseModel):
    name: str
    phone: str
    allergy: str
    age: str

# ROOT
@app.get("/")
def home():
    return {"message": "RestaurantBrain backend is running"}

# ADD CUSTOMER (ONLY ONE VERSION)
@app.post("/add-customer")
def add_customer(customer: CustomerSchema, db: Session = Depends(get_db)):

    new_customer = DBCustomer(
        name=customer.name,
        phone=customer.phone,
        allergy=customer.allergy,
        age=customer.age
    )

    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)

    return {
        "message": "Saved to database",
        "customer": {
            "id": new_customer.id,
            "name": new_customer.name,
            "phone": new_customer.phone,
            "allergy": new_customer.allergy,
            "age": new_customer.age
        }
    }

# GET CUSTOMERS
@app.get("/customers")
def get_customers(db: Session = Depends(get_db)):

    customers = db.query(DBCustomer).all()

    return [
        {
            "id": c.id,
            "name": c.name,
            "phone": c.phone,
            "allergy": c.allergy,
            "age": c.age,
        }
        for c in customers
    ]