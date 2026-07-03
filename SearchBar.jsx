import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-xl shadow px-4 py-3 w-full max-w-md">

      <FaSearch className="text-gray-400 mr-3" />

      <input
        type="text"
        placeholder="Search customers, orders, menu..."
        className="w-full outline-none"
      />

    </div>
  );
}

export default SearchBar;