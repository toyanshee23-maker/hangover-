import MobileSidebar from "./MobileSidebar";
import SearchBar from "./SearchBar";
import NotificationBell from "./NotificationBell";
import DarkModeToggle from "./DarkModeToggle";
import UserProfile from "./UserProfile";

function Header() {
  return (

    <header className="sticky top-0 z-40 bg-slate-100 pb-6">

      <div className="bg-white rounded-2xl shadow-md px-6 py-4">

        <div className="flex items-center justify-between gap-5">

          {/* Left Side */}

          <div className="flex items-center gap-5">

            <MobileSidebar />

            <div>

              <h1 className="text-2xl font-bold text-gray-800">
                RestaurantBrain AI
              </h1>

              <p className="text-sm text-gray-500">
                Smart Restaurant Management Dashboard
              </p>

            </div>

          </div>

          {/* Center */}

          <div className="hidden lg:block flex-1 max-w-xl">

            <SearchBar />

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <NotificationBell />

            <DarkModeToggle />

            <UserProfile />

          </div>

        </div>

      </div>

    </header>

  );
}

export default Header;