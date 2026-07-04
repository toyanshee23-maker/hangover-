import menu from "./menu";

function AIAnalysis({ customer }) {
  // If no customer has been analyzed yet
  if (!customer) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🤖 AI Analysis
        </h2>

        <p className="text-gray-500">
          Enter customer details and click{" "}
          <span className="font-semibold text-blue-600">
            Analyze with AI
          </span>{" "}
          to generate the report.
        </p>
      </div>
    );
  }

  // Find selected food from menu
  const selectedFood = menu.find(
    (item) => item.name === customer.food
  );

  // Food not found
  if (!selectedFood) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold">
          🤖 AI Analysis
        </h2>

        <p className="text-red-500 mt-4">
          Food item not found in menu.
        </p>
      </div>
    );
  }

  // Allergy Detection
  const risk =
    customer.allergy !== "None" &&
    customer.allergy !== "" &&
    selectedFood.allergens.includes(customer.allergy);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        🤖 AI Analysis Report
      </h2>

      {/* Customer Details */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>

          <h3 className="text-xl font-semibold mb-4">
            👤 Customer Details
          </h3>

          <p><strong>Name:</strong> {customer.name}</p>

          <p><strong>Phone:</strong> {customer.phone}</p>

          <p><strong>Age:</strong> {customer.age}</p>

          <p><strong>Food Ordered:</strong> {customer.food}</p>

          <p><strong>Known Allergy:</strong> {customer.allergy}</p>

          <p><strong>Special Notes:</strong> {customer.notes || "None"}</p>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            🍽 Food Information
          </h3>

          <p>
            <strong>Calories:</strong>{" "}
            {selectedFood.calories} kcal
          </p>

          <p>
            <strong>Cooking Time:</strong>{" "}
            {selectedFood.cookingTime}
          </p>

          <p className="mt-3 font-semibold">
            Ingredients
          </p>

          <ul className="list-disc ml-6 mt-2">
            {selectedFood.ingredients.map((ingredient) => (
              <li key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>

        </div>

      </div>

      {/* Allergy Detection */}
      <div className="mt-10 p-6 rounded-xl border">

        <h3 className="text-xl font-bold mb-4">
          ⚠ Allergy Detection
        </h3>

        {risk ? (
          <div>

            <p className="text-red-600 text-2xl font-bold">
              🚨 HIGH RISK
            </p>

            <p className="mt-3">
              The selected dish contains
              <strong> {customer.allergy}</strong>.
            </p>

            <p className="mt-3">
              <strong>Suggested Alternative:</strong>{" "}
              {selectedFood.alternative}
            </p>

            <p className="mt-2 text-gray-600">
              Recommendation:
              Do NOT serve this dish.
            </p>

          </div>
        ) : (
          <div>

            <p className="text-green-600 text-2xl font-bold">
              ✅ SAFE TO SERVE
            </p>

            <p className="mt-3">
              No matching allergens were found.
            </p>

            <p className="mt-2 text-gray-600">
              Recommendation:
              Safe for preparation.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIAnalysis;