from ai.embeddings import create_embedding
from ai.qdrant_db import add_memory

text = "Priya likes Paneer Tikka and has a peanut allergy."

vector = create_embedding(text)

add_memory(vector, text)

print("Memory stored successfully!")