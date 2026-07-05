from fastapi import FastAPI
from pydantic import BaseModel

from ai.embeddings import create_embedding
from ai.vector_store import VectorStore

app = FastAPI()

store = VectorStore()

# sample data (replace later with DB/file)
data = [
    "Best pizza in Delhi is Domino's style thin crust",
    "Burger King has spicy chicken burgers",
    "Indian food includes butter chicken and naan",
    "South Indian dosa is crispy and light"
]

# preload data into vector DB
for text in data:
    emb = create_embedding(text)
    store.add(emb, text)


class Query(BaseModel):
    text: str


@app.get("/")
def home():
    return {"status": "RestaurantBrainAI running"}


@app.post("/search")
def search(query: Query):
    query_emb = create_embedding(query.text)
    results = store.search(query_emb, k=3)

    return {
        "query": query.text,
        "results": results
    }
