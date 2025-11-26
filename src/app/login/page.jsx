// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        email: user.email,
        password: user.password,
      });

      if (result.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      console.log("Login Failed.");
    }
  };
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050608] text-white">
      {/* Decorative circuit corners */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left top */}
        <div className="absolute left-6 top-10 hidden h-72 w-72 opacity-60 md:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl border border-slate-800/60" />
            <div className="absolute -right-18 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="h-px w-7 bg-slate-700" />
              <div className="flex h-9 w-16 items-center justify-center rounded-xl border border-slate-800 bg-[#0b0d10] shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-100 shadow-[0_0_10px_rgba(248,250,252,0.9)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Left bottom */}
        <div className="absolute bottom-10 left-6 hidden h-72 w-72 opacity-60 md:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl border border-slate-800/60" />
            <div className="absolute -right-18 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="h-px w-7 bg-slate-700" />
              <div className="flex h-9 w-16 items-center justify-center rounded-xl border border-slate-800 bg-[#0b0d10] shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-100 shadow-[0_0_10px_rgba(248,250,252,0.9)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right top */}
        <div className="absolute right-6 top-10 hidden h-72 w-72 opacity-60 md:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl border border-slate-800/60" />
            <div className="absolute -left-18 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="flex h-9 w-16 items-center justify-center rounded-xl border border-slate-800 bg-[#0b0d10] shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-100 shadow-[0_0_10px_rgba(248,250,252,0.9)]" />
              </div>
              <div className="h-px w-7 bg-slate-700" />
            </div>
          </div>
        </div>

        {/* Right bottom */}
        <div className="absolute bottom-10 right-6 hidden h-72 w-72 opacity-60 md:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl border border-slate-800/60" />
            <div className="absolute -left-18 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="flex h-9 w-16 items-center justify-center rounded-xl border border-slate-800 bg-[#0b0d10] shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-100 shadow-[0_0_10px_rgba(248,250,252,0.9)]" />
              </div>
              <div className="h-px w-7 bg-slate-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Login card */}
      <section className="relative z-10 w-full max-w-md rounded-3xl border border-white/5 bg-[#111317] px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.95)]">
        {/* Logo / avatar */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-tr from-blue-500 via-blue-400 to-cyan-400 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/70">
            <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
          </div>
        </div>

        <h1 className="text-center text-xl font-semibold tracking-tight">
          Welcome Back To <br />
          SportsHub
        </h1>
        <p className="mt-3 text-center text-sm text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link href="/register">
            <button className="font-medium text-gray-100 underline-offset-2 hover:text-white hover:underline">
              Sign up
            </button>
          </Link>
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500"
            >
              Email address
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                {/* simple mail icon */}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <input
                id="email"
                type="email"
                placeholder="email address"
                className="h-11 w-full rounded-xl border border-white/5 bg-[#060709] px-10 text-sm text-gray-100 placeholder-gray-500 outline-none transition ring-0 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/60"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500"
            >
              Password
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                {/* simple lock icon */}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </span>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="h-11 w-full rounded-xl border border-white/5 bg-[#060709] px-10 text-sm text-gray-100 placeholder-gray-500 outline-none transition ring-0 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/60"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#2563eb] text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition hover:bg-[#1d4ed8]"
          >
            Login
          </button>
        </form>

        {/* OR separator */}
        <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-transparent" />
          <span>or</span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        {/* Social buttons */}
        <div className="mt-4 flex justify-center gap-3 text-sm">
          {/* <button className="flex h-10 items-center justify-center rounded-xl border border-white/10 bg-[#14171c] text-xs font-medium text-gray-100 hover:bg-[#1b1f26]">
            
          </button> */}
          <button className="flex w-full h-10 items-center justify-center rounded-xl border border-white/10 bg-[#14171c] text-xs font-medium text-gray-100 hover:bg-[#1b1f26]">
            <FcGoogle size={25} />
          </button>
          {/* <button className="flex h-10 items-center justify-center rounded-xl border border-white/10 bg-[#14171c] text-xs font-medium text-gray-100 hover:bg-[#1b1f26]">
            X
          </button> */}
        </div>
      </section>
    </main>
  );
}
