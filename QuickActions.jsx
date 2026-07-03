function QuickActions() {
  const actions = [
    { icon: "👤", title: "Add Customer" },
    { icon: "🍽️", title: "Add Order" },
    { icon: "📦", title: "Inventory" },
    { icon: "📋", title: "Upload Menu" },
    { icon: "🤖", title: "Chat with AI" },
    { icon: "⚠️", title: "Allergy Checker" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-3xl">{action.icon}</div>

            <p className="mt-3 font-semibold">
              {action.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;