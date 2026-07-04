from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import Depends
from sqlalchemy.orm import Session
from database import SessionLocal, Customer as DBCustomer


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



app=FastAPI()

class CustomerSchema(BaseModel):
    name: str
    phone: str
    food_ordered: str
    allergy: str
    age: str
    special_notes: str




@app.get("/")
def home():
    return {"message": "RestaurantBrain backend is running"}

@app.post("/add-customer")
def add_customer(customer: CustomerSchema, db: Session = Depends(get_db)):

    new_customer = DBCustomer(
        name=customer.name,
        phone=customer.phone,
        food_ordered=customer.food_ordered,
        allergy=customer.allergy,
        age=customer.age,
        special_notes=customer.special_notes

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
            "food_ordered": new_customer.food_ordered,
            "allergy": new_customer.allergy,
            "age": new_customer.age,
            "special_notes": new_customer.special_notes
        }
    }


@app.get("/customers")
def get_customers(db: Session = Depends(get_db)):
    customers = db.query(DBCustomer).all()

    return [
        {
            "id": c.id,
            "name": c.name,
            "phone": c.phone,
            "food_ordered": c.food_ordered,
            "allergy": c.allergy,
            "age": c.age,
            "special_notes": c.special_notes

        }
        for c in customers
    ]