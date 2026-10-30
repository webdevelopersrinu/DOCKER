import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "./Button";
import { useAuthStore } from "../store/authStore";

const NAV_LINK_CLASS = "flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-ink-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { token, user, logout } = useAuthStore();
  const isAuthenticated = !!token;

  function handleLogout() {
    logout();
    setMenuOpen(false);
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo/logo.png" alt="Travel platform" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link to="/search" className={NAV_LINK_CLASS}>
            Search
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/bookings" className={NAV_LINK_CLASS}>
                My Bookings
              </Link>
              <Link to="/profile" className={NAV_LINK_CLASS}>
                Profile
              </Link>
            </>
          )}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          {isAuthenticated ? (
            <>
              <span className="px-2 text-sm text-ink-soft">{user?.name}</span>
              <Button variant="ghost" aria-label="Log out" onClick={handleLogout}>
                <LogOut className="h-4 w-4" aria-hidden="true" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="primary" onClick={() => navigate("/register")}>
                Register
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-ink sm:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 sm:hidden">
          <Link to="/search" className={NAV_LINK_CLASS} onClick={() => setMenuOpen(false)}>
            Search
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/bookings" className={NAV_LINK_CLASS} onClick={() => setMenuOpen(false)}>
                My Bookings
              </Link>
              <Link to="/profile" className={NAV_LINK_CLASS} onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <button type="button" onClick={handleLogout} className={`${NAV_LINK_CLASS} text-left`}>
                Log out ({user?.name})
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={NAV_LINK_CLASS} onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className={NAV_LINK_CLASS} onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
