"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // temporary for UI

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        {/* LEFT - LOGO */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-primary">
            SportsHub
          </Link>
        </div>

        {/* MIDDLE - DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* RIGHT - LOGIN / USER */}
        <div className="flex-none">

          {isLoggedIn ? (
            // DROPDOWN WHEN LOGGED IN
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <FaUserCircle size={24} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-medium px-3 py-2">
                  Logged in as: John Doe
                </li>
                <li><Link href="/add-product">Add Product</Link></li>
                <li><Link href="/manage-products">Manage Products</Link></li>
                <li><button>Logout</button></li>
              </ul>
            </div>
          ) : (
            // LOGIN / REGISTER WHEN LOGGED OUT
            <div className="hidden md:block">
              <Link href="/login" className="btn btn-primary btn-sm">
                Login / Register
              </Link>
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden ml-2">
            <MobileMenu isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* MOBILE MENU COMPONENT */
function MobileMenu({ isLoggedIn }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48"
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>

        <li className="mt-2 border-t pt-2">
          {isLoggedIn ? (
            <>
              <Link href="/add-product">Add Product</Link>
              <Link href="/manage-products">Manage Products</Link>
              <button>Logout</button>
            </>
          ) : (
            <Link href="/login">Login / Register</Link>
          )}
        </li>
      </ul>
    </div>
  );
}