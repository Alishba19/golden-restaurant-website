import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="bg-neutral-900 border border-amber-500/20 rounded-2xl p-10 max-w-lg w-full text-center">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-4xl font-serif text-amber-400 mb-4">
          Order Successful!
        </h1>

        <p className="text-neutral-300 mb-8 leading-7">
          Thank you for your order. Our team has received your request and will
          start preparing your meal shortly.
        </p>

        <Link
          href="/"
          className="inline-block bg-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}