import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;