from ai.embeddings import create_embedding
from ai.qdrant_db import add_memory, search_memory

text = "Priya likes Paneer Tikka and has a peanut allergy."

embedding = create_embedding(text)

add_memory(embedding, text)

query = create_embedding("Who has a peanut allergy?")

results = search_memory(query)

print(results)