import { inventory } from "../data/dashboardData";

function InventoryStatus() {

  const getColor = (stock) => {

    if (stock >= 70) return "bg-green-500";

    if (stock >= 40) return "bg-yellow-500";

    return "bg-red-500";

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        📦 Smart Inventory

      </h2>

      {inventory.map((item) => (

        <div
          key={item.id}
          className="mb-5"
        >

          <div className="flex justify-between mb-2">

            <span>{item.item}</span>

            <span>{item.stock}%</span>

          </div>

          <div className="bg-gray-200 rounded-full h-3">

            <div

              className={`h-3 rounded-full ${getColor(item.stock)}`}

              style={{
                width: `${item.stock}%`
              }}

            ></div>

          </div>

        </div>

      ))}

      <div className="mt-6 p-4 bg-red-50 rounded-xl">

        <p className="font-semibold text-red-600">

          ⚠ AI Recommendation

        </p>

        <p className="text-sm mt-2">

          Paneer stock is critically low.

        </p>

        <p className="text-sm">

          Place an order within 12 hours.

        </p>

      </div>

    </div>

  );

}

export default InventoryStatus;