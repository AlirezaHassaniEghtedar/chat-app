import { Link } from "react-router";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

export default function Navbar() {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 w-full top-0 z-0 backdrop-blur-lg">
      <div className="mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">ChatApp</h1>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="btn btn-soft gap-2 transition-colors pl-3"
            >
              <Settings className="size-5" />
              <span className="hidden sm:inline capitalize">settings</span>
            </Link>
            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="btn btn-soft gap-2 transition-colors pl-3"
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline capitalize">profile</span>
                </Link>
                <button
                  type="button"
                  className="flex items-center gap-2 cursor-pointer btn btn-soft btn-error"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline capitalize">logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
