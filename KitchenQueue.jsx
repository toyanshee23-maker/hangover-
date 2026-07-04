import { kitchenQueue } from "./dashboardData";

function KitchenQueue() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        👨‍🍳 Kitchen Queue

      </h2>

      {/* Preparing */}

      <div className="mb-8">

        <h3 className="font-semibold text-blue-600 mb-3">
          Preparing
        </h3>

        {kitchenQueue.preparing.map((item) => (

          <div
            key={item}
            className="bg-blue-50 rounded-lg p-3 mb-2"
          >

            {item}

          </div>

        ))}

      </div>

      {/* Cooking */}

      <div className="mb-8">

        <h3 className="font-semibold text-yellow-600 mb-3">

          Cooking

        </h3>

        {kitchenQueue.cooking.map((item) => (

          <div
            key={item}
            className="bg-yellow-50 rounded-lg p-3 mb-2"
          >

            {item}

          </div>

        ))}

      </div>

      {/* Ready */}

      <div>

        <h3 className="font-semibold text-green-600 mb-3">

          Ready

        </h3>

        {kitchenQueue.ready.map((item) => (

          <div
            key={item}
            className="bg-green-50 rounded-lg p-3 mb-2"
          >

            {item}

          </div>

        ))}

      </div>

    </div>
  );
}

export default KitchenQueue;