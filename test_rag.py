from ai.rag import ask_restaurant_ai

print("Starting test...")

question = "Does Priya have any allergies?"

answer = ask_restaurant_ai(question)

print("\nFINAL ANSWER:")
print(answer)