"use client";

import axios from "axios";
// src/app/register/page.jsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", user);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      console.log("Registration Failed.");
    }
  };
  return (
    <main className="min-h-screen px-4 py-10 flex items-center justify-center">
      <section className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#241b33] text-white shadow-[0_30px_80px_rgba(5,5,25,0.85)] md:flex-row">
        {/* Left visual panel */}
        <div
          className="relative flex w-full flex-col justify-between 
            p-6 md:w-1/2"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/33647016/pexels-photo-33647016.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-white/90">SportsHub</div>
            <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur transition hover:bg-white/20">
              <Link href="/">Back to website</Link>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* Right form panel */}
        <div className="w-full md:w-1/2 px-8 py-10 md:px-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-300 hover:text-indigo-200"
            >
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Name fields */}
            <div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Full name
                </label>
                <input
                  type="text"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Fletcher Doe"
                  className="h-11 w-full rounded-lg border 
                  border-white/10 bg-white/5 px-3 text-sm 
                  text-white placeholder-gray-400 outline-none 
                  transition focus:border-purple-400 focus:ring-2
                  focus:ring-purple-500/40"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
                className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Enter your password"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 pr-10 text-sm text-white placeholder-gray-400 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-300">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-500 bg-transparent text-purple-500 focus:ring-purple-500/60"
                required
              />
              <label htmlFor="terms" className="select-none">
                I agree to the{" "}
                <button
                  type="button"
                  className="font-medium text-indigo-300 underline-offset-2 hover:underline"
                >
                  Terms &amp; Conditions
                </button>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#7b5cff] text-sm font-semibold text-white shadow-[0_12px_35px_rgba(123,92,255,0.55)] transition hover:bg-[#6a4ce0]"
            >
              Create account
            </button>
          </form>

          {/* Or with */}
          <div className="mt-6 text-center text-xs text-gray-400">
            Or register with
          </div>

          <div className="mt-3 flex justify-center gap-3">
            <button className="flex w-full h-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs font-medium text-gray-100 hover:bg-white/10">
              {/* Google */}
              <FcGoogle size={25} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
