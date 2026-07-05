from ai.embeddings import create_embedding
from ai.vector_store import VectorStore

store = VectorStore()

# sample data (your "restaurant brain")
data = [
    "Best pizza in Delhi is Domino's style thin crust",
    "Burger King has spicy chicken burgers",
    "Indian food includes butter chicken and naan",
    "South Indian dosa is crispy and light"
]

# STEP 1: store embeddings
for text in data:
    emb = create_embedding(text)
    store.add(emb, text)

# STEP 2: query
query = "I want crispy Indian food"
query_emb = create_embedding(query)

results = store.search(query_emb, k=2)

print("\nTOP RESULTS:")
for r in results:
    print("-", r)