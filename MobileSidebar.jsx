import { FaBars } from "react-icons/fa";

function MobileSidebar() {
  return (
    <button className="lg:hidden p-3 bg-white rounded-xl shadow">
      <FaBars />
    </button>
  );
}

export default MobileSidebar;