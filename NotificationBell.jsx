import { FaBell } from "react-icons/fa";

function NotificationBell() {
  const notifications = [
    "Paneer stock is running low.",
    "12 new orders received.",
    "AI detected high demand for Pizza.",
  ];

  return (
    <div className="relative group">

      <button className="relative p-3 rounded-xl bg-white shadow hover:bg-gray-100 transition">

        <FaBell size={18} />

        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          3
        </span>

      </button>

      {/* Dropdown */}

      <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

        <div className="p-4 border-b font-semibold">
          Notifications
        </div>

        {notifications.map((item, index) => (
          <div
            key={index}
            className="p-4 hover:bg-gray-50 border-b"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default NotificationBell;