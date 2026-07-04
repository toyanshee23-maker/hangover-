import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { topSelling } from "./chartData";

function TopSellingChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold">
            🍕 Top Selling Dishes
          </h2>

          <p className="text-gray-500">
            Best performing menu items today
          </p>

        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Live
        </span>

      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={topSelling}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="dish" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="orders"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-5 bg-blue-50 rounded-xl p-4">

        <p className="font-semibold">

          🤖 AI Insight

        </p>

        <p className="text-gray-600 mt-2">

          Paneer Pizza is today's best seller.
          Increase cheese and paneer inventory tomorrow.

        </p>

      </div>

    </div>
  );
}

export default TopSellingChart;