"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter();

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

     router.push("/");
    };
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-amber-500/20 rounded-2xl p-8 shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-amber-400">
          Sign In
        </h1>

        <p className="text-center text-neutral-400 mt-2 mb-8">
          Welcome back! Please sign in to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-amber-100 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-amber-100 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-neutral-300">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              href="/forgot-password"
              className="text-amber-400 hover:text-amber-300"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-neutral-400 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-amber-400 font-semibold hover:text-amber-300"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}