"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* LEFT - LOGO */}
        <Link href="/" className="text-2xl font-bold text-primary">
          SportsHub
        </Link>

        {/* MIDDLE – DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {isLoggedIn && (
            <>
              <Link href="/add-product">Add Product</Link>

              <Link href="/manage-products">Manage Products</Link>
            </>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* If logged in show avatar dropdown */}
          {isLoggedIn && (
            <div className="dropdown dropdown-end">
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-999 p-4 shadow bg-base-100 rounded-box space-y-1"
              >
                <li className="text-sm text-gray-600 mb-1 pointer-events-none">
                  Logged in as:
                  <span className="font-semibold block">
                    {session?.user?.email}
                  </span>
                </li>

                <li>
                  <button
                    onClick={() => signOut()}
                    className="btn btn-primary btn-sm mt-2 px-6 py-1 border rounded"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* If logged out – desktop only */}
          {!isLoggedIn && (
            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="/login"
                className="btn btn-primary btn-sm border px-5 py-1 rounded hover:bg-white/50 hover:text-black transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn btn-primary btn-sm border px-5 py-1 rounded hover:bg-white/50 hover:text-black transition-colors"
              >
                Register
              </Link>
            </div>
          )}

          {/* MOBILE MENU */}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-outline btn-sm">
              Menu:
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content 
              mt-3 shadow bg-base-100 
              rounded-box w-56 space-y-2 *:flex *:flex-col"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>

              <li className="border-t pt-2">
                {isLoggedIn ? (
                  <>
                    <Link href="/add-product">Add Product</Link>
                    <Link href="/manage-products">Manage Products</Link>

                    <button
                      onClick={() => signOut()}
                      className="btn btn-primary btn-sm mt-2 px-6 py-1 border rounded"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="btn btn-primary btn-sm mt-2">
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="btn btn-primary btn-sm mt-2"
                    >
                      Register
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
