import orders from "./orders";

function RecentOrders() {

  const getStatusColor = (status) => {

    switch (status) {

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cooking":
        return "bg-yellow-100 text-yellow-700";

      case "Preparing":
        return "bg-blue-100 text-blue-700";

      case "Ready":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-gray-100 text-gray-700";
    }

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          📋 Recent Orders
        </h2>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">

          View All

        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-4">Customer</th>

            <th className="text-left">Food</th>

            <th className="text-left">Amount</th>

            <th className="text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="py-5 font-medium">

                {order.customer}

              </td>

              <td>

                {order.food}

              </td>

              <td>

                ₹{order.amount}

              </td>

              <td>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >

                  {order.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default RecentOrders;