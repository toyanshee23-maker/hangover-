import { useState } from "react";

import customerHistory from "../data/customerHistory";

function CustomerHistory() {

  const [phone, setPhone] = useState("");

  const [customer, setCustomer] = useState(null);

  const searchCustomer = () => {

    const result = customerHistory.find(

      (item) => item.phone === phone

    );

    setCustomer(result || false);

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        👤 Customer History

      </h2>

      <input

        type="text"

        placeholder="Enter Phone Number"

        value={phone}

        onChange={(e) => setPhone(e.target.value)}

        className="w-full border rounded-xl p-3 mb-4"

      />

      <button

        onClick={searchCustomer}

        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"

      >

        Search Customer

      </button>

      {customer && (

        <div className="mt-8">

          <div className="bg-blue-50 rounded-xl p-5">

            <h3 className="text-xl font-bold">

              {customer.name}

            </h3>

            <p>

              ⭐ {customer.loyalty} Customer

            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">

            <div className="bg-gray-50 p-4 rounded-xl">

              <p className="text-gray-500">

                Visits

              </p>

              <h2 className="text-2xl font-bold">

                {customer.visits}

              </h2>

            </div>

            <div className="bg-gray-50 p-4 rounded-xl">

              <p className="text-gray-500">

                Favourite

              </p>

              <h2 className="font-bold">

                {customer.favourite}

              </h2>

            </div>

          </div>

          <div className="mt-6">

            <p>

              <strong>Last Visit:</strong>

              {" "}

              {customer.lastVisit}

            </p>

            <p>

              <strong>Allergy:</strong>

              {" "}

              {customer.allergy}

            </p>

          </div>

          <div className="mt-6">

            <h4 className="font-bold mb-3">

              Previous Orders

            </h4>

            <ul className="list-disc ml-5">

              {customer.orders.map((item) => (

                <li key={item}>

                  {item}

                </li>

              ))}

            </ul>

          </div>

          <div className="mt-6 bg-green-50 rounded-xl p-4">

            <h4 className="font-bold">

              🤖 AI Recommendation

            </h4>

            <p className="mt-2">

              Recommend

              {" "}

              {customer.favourite}

              {" "}

              Combo.

            </p>

            <p>

              Avoid

              {" "}

              {customer.allergy}

              {" "}

              ingredients.

            </p>

          </div>

        </div>

      )}

      {customer === false && (

        <div className="mt-6 bg-red-50 rounded-xl p-4">

          Customer Not Found

        </div>

      )}

    </div>

  );

}

export default CustomerHistory;