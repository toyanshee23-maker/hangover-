import { insights } from "../data/dashboardData";

function AIInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🤖 AI Insights
        </h2>

        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          Live AI
        </span>

      </div>

      <div className="space-y-4">

        {insights.map((insight, index) => (

          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
          >

            <div className="text-green-500 text-lg">
              ✓
            </div>

            <p className="text-gray-700">
              {insight}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsights;