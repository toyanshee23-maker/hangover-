import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    day: "Mon",
    revenue: 12000,
  },
  {
    day: "Tue",
    revenue: 15000,
  },
  {
    day: "Wed",
    revenue: 18200,
  },
  {
    day: "Thu",
    revenue: 16400,
  },
  {
    day: "Fri",
    revenue: 21000,
  },
  {
    day: "Sat",
    revenue: 26500,
  },
  {
    day: "Sun",
    revenue: 24000,
  },
];

function SalesChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          📈 Weekly Revenue
        </h2>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          +18%
        </span>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={salesData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SalesChart;