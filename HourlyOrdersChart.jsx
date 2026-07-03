import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { hourlyOrders } from "../data/chartData";

function HourlyOrdersChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold">
            ⏰ Peak Hour Analysis
          </h2>

          <p className="text-gray-500">
            Restaurant traffic throughout the day
          </p>

        </div>

        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
          Today
        </span>

      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={hourlyOrders}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="hour" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="orders"
              stroke="#f97316"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-5 bg-orange-50 rounded-xl p-4">

        <p className="font-semibold">

          🤖 AI Insight

        </p>

        <p className="text-gray-600 mt-2">

          Peak demand occurs between 7 PM and 9 PM.
          Schedule two extra chefs and one waiter for evening service.

        </p>

      </div>

    </div>
  );
}

export default HourlyOrdersChart;