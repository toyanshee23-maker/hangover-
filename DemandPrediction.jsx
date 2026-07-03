import { demandPrediction } from "../data/dashboardData";

function DemandPrediction() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        🧠 AI Demand Prediction

      </h2>

      {demandPrediction.map((dish) => (

        <div
          key={dish.dish}
          className="flex justify-between items-center border-b py-4"
        >

          <span className="font-medium">

            {dish.dish}

          </span>

          <span
            className={`font-bold ${
              dish.value.includes("+")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >

            {dish.value}

          </span>

        </div>

      ))}

      <div className="mt-6 bg-blue-50 rounded-xl p-4">

        <p className="font-semibold">

          🤖 AI Recommendation

        </p>

        <p className="mt-2 text-gray-600">

          Promote Pizza Combo tomorrow.

        </p>

      </div>

    </div>
  );
}

export default DemandPrediction;