
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  const closeMenu = () => {
    setOpen(false);
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    setUser(null);
    closeMenu();
    navigate("/");
  };

  const handleLoginClick = () => {
    closeMenu();
    setShowUserLogin(true);
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "font-semibold text-green-600"
        : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <nav className="relative flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 md:px-16 lg:px-24 xl:px-32">
      {/* Logo */}
      <NavLink to="/" onClick={closeMenu}>
        <img src={assets.logo} alt="Logo" className="w-32" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 sm:flex">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>

        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>

        {user && (
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
        )}

        {/* Search */}
        <div className="hidden items-center gap-2 rounded-full border border-gray-300 px-3 text-sm lg:flex">
          <input
            type="text"
            placeholder="Search products"
            aria-label="Search products"
            className="w-full bg-transparent py-1.5 outline-none placeholder-gray-500"
          />

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Cart */}
        <NavLink
          to="/cart"
          aria-label="Shopping cart"
          className="relative"
        >
          <img
            src={assets.nav_cart_icon}
            alt="Cart"
            className="h-5 w-5"
          />

          <span className="absolute -right-3 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-300 text-xs font-medium text-slate-900">
            3
          </span>
        </NavLink>

        {/* Login / Profile */}
        {!user ? (
          <button
            type="button"
            onClick={handleLoginClick}
            className="cursor-pointer rounded-full bg-green-300 px-8 py-2 text-slate-900 transition hover:bg-green-400"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowUserMenu((prev) => !prev)}
              aria-label="Open profile menu"
              aria-expanded={showUserMenu}
              className="flex items-center"
            >
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="h-9 w-9 cursor-pointer"
              />
            </button>

            {showUserMenu && (
              <ul className="absolute right-0 top-full z-50 mt-2 w-40 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                <li>
                  <NavLink
                    to="/my-orders"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    My Orders
                  </NavLink>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="rounded-md p-1 sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#16A34A" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#16A34A" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#16A34A" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 top-full z-50 w-full flex-col items-start gap-4 border-t border-gray-100 bg-white px-6 py-5 text-sm shadow-md sm:hidden`}
      >
        <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
          Contact
        </NavLink>

        {user && (
          <NavLink
            to="/products"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Products
          </NavLink>
        )}

        <NavLink to="/cart" onClick={closeMenu} className={navLinkClass}>
          Cart (3)
        </NavLink>

        {user && (
          <NavLink
            to="/my-orders"
            onClick={closeMenu}
            className={navLinkClass}
          >
            My Orders
          </NavLink>
        )}

        {!user ? (
          <button
            type="button"
            onClick={handleLoginClick}
            className="mt-1 w-full rounded-full bg-green-300 px-6 py-2 text-slate-900 transition hover:bg-green-400"
          >
            Login
          </button>
        ) : (
          <button
            type="button"
            onClick={handleLogout}
            className="mt-1 w-full rounded-full bg-green-300 px-6 py-2 text-slate-900 transition hover:bg-green-400"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
