import Link from "next/link";
import { IoIosRestaurant } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  return (
    <header className="bg-[#0F172B] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-2">
            <IoIosRestaurant className="text-4xl"/> 
            <span>Golden Restaurant</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-lg font-medium">
            <li>
              <a href="/" className="hover:text-yellow-400 transition duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="About" className="hover:text-yellow-400 transition duration-300">
                About
              </a>
            </li>

            <li>
              <a href="Menu" className="hover:text-yellow-400 transition duration-300">
                Menu
              </a>
            </li>

            <li>
              <a href="/Contact" className="hover:text-yellow-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="text-2xl hover:scale-110 transition">
            <CiSearch />
          </button>

          <button className="text-2xl hover:scale-110 transition">
            <TiShoppingCart />
          </button>

          <Link href="/signin">
            <button className="border border-yellow-400 px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Sign In
            </button>
         </Link>
         
          <Link href="/Contact">
           <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition">
             Book a Table
           </button>
          </Link>

        </div>

      </div>
    </header>
  );
}