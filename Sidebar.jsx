function Sidebar() {
  const menuItems = [
    "🏠 Dashboard",
    "👤 Customers",
    "🍽 Orders",
    "📦 Inventory",
    "🤖 AI Assistant",
    "📈 Analytics",
    "⭐ Reviews",
    "⚙ Settings",
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        🍽 RestaurantBrain AI
      </h1>

      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item}
            className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;