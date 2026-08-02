import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto bg-neutral-900 border border-amber-500/20 rounded-2xl p-8 shadow-lg">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-serif text-amber-400 mb-4">
            Place Your Order
          </h1>

          <p className="text-neutral-400 text-lg">
            Fill in your details below and we'll prepare your delicious meal.
          </p>
        </div>

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="03XX-XXXXXXX"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Delivery Address
            </label>

            <textarea
              rows={3}
              placeholder="Enter your full delivery address"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            ></textarea>
          </div>

          {/* Dish */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Select Dish
            </label>

            <select
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            >
              <option>Grilled Steak</option>
              <option>Chicken Biryani</option>
              <option>Cheese Burger</option>
              <option>BBQ Pizza</option>
              <option>Chicken Tikka Pasta</option>
              <option>Club Sandwich</option>
              <option>Fried Chicken</option>
              <option>Chicken Karahi</option>
              <option>Chocolate Cake</option>
              <option>Ice Cream</option>
              <option>Fresh Juice</option>
              <option>Coffee</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Quantity
            </label>

            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-2 text-amber-300 font-medium">
              Special Instructions
            </label>

            <textarea
              rows={4}
              placeholder="Write any special instructions..."
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            ></textarea>
          </div>

          {/* Button */}
          <Link
             href="/Success"
             className="block w-full text-center bg-amber-500 text-black py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition"
             >
               Place Order
          </Link>

        </form>

      </div>
    </div>
  );
}