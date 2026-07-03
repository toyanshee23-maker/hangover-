import { FaUserCircle } from "react-icons/fa";

function UserProfile() {
  return (
    <div className="relative group">

      <button className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow">

        <FaUserCircle size={26} />

        <div className="text-left">

          <p className="font-semibold">
            Chhavi
          </p>

          <p className="text-xs text-gray-500">
            Restaurant Admin
          </p>

        </div>

      </button>

      <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

        <button className="w-full text-left p-3 hover:bg-gray-100">
          My Profile
        </button>

        <button className="w-full text-left p-3 hover:bg-gray-100">
          Settings
        </button>

        <button className="w-full text-left p-3 hover:bg-gray-100 text-red-500">
          Logout
        </button>

      </div>

    </div>
  );
}

export default UserProfile;