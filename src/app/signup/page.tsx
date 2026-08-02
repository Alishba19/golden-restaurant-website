"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router = useRouter();
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      router.push("/signin");
    };
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-amber-500/20 rounded-2xl p-8 shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-amber-400">
          Sign Up
        </h1>

        <p className="text-center text-neutral-400 mt-2 mb-8">
          Create your account to enjoy a better dining experience.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
            
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-amber-100 mb-2"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              required
              placeholder="Enter your full name"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-amber-100 mb-2"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              required
              placeholder="Confirm your password"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition"
          >
            Sign Up
          </button>

        </form>

        {/* Sign In Link */}
        <p className="text-center text-neutral-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-amber-400 font-semibold hover:text-amber-300"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}