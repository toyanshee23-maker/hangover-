import { useState } from "react";
import menu from "../data/menu";

function CustomerForm({ onAnalyze }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    age: "",
    food: "",
    allergy: "",
    notes: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(customer);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-800">
          👤 Customer Details
        </h2>

        <p className="text-gray-500 mt-2">
          Enter customer information to perform AI-based allergy detection and food analysis.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block font-medium mb-2">
            Customer Name
          </label>

          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Rahul Sharma"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Age
          </label>

          <input
            type="number"
            name="age"
            value={customer.age}
            onChange={handleChange}
            placeholder="25"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Food Ordered
          </label>

          <select
            name="food"
            value={customer.food}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Food</option>

            {menu.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}

          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Allergy
          </label>

          <input
            type="text"
            name="allergy"
            value={customer.allergy}
            onChange={handleChange}
            placeholder="Peanuts / Dairy / None"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Special Notes
          </label>

          <textarea
            rows="4"
            name="notes"
            value={customer.notes}
            onChange={handleChange}
            placeholder="Extra cheese, less spicy..."
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition"
        >
          🤖 Analyze with AI
        </button>

      </form>
    </div>
  );
}

export default CustomerForm;