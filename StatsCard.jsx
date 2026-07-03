function StatsCard({ title, value, change }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <p className="text-gray-500 text-sm font-medium">
        {title}
      </p>

      <div className="flex items-end justify-between mt-4">

        <h2 className="text-4xl font-bold text-gray-800">
          {value}
        </h2>

        {change && (
          <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
            {change}
          </span>
        )}

      </div>

    </div>
  );
}

export default StatsCard;