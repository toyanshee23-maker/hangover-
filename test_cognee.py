import asyncio
import os
from dotenv import load_dotenv
import cognee

load_dotenv()

async def main():
    print("Starting Cognee...")

    await cognee.remember(
        "Priya likes Paneer Tikka and has a peanut allergy."
    )

    print("Memory stored!")

    result = await cognee.recall(
        "Does Priya have allergies?"
    )

    print("\nResult:")
    print(result)

if __name__ == "__main__":
    asyncio.run(main())