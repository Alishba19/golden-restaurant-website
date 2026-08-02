import Image from "next/image";
import Link from "next/link"; 

const menuItems = [
  {
    id: 1,
    name: "Grilled Steak",
    image: "/images/menu/grilled-steak.jpg",
    price: "$28",
    rating: "⭐ 4.9",
    description: "Juicy grilled beef steak served with vegetables and special sauce.",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    image: "/images/menu/biryani.jpg",
    price: "$15",
    rating: "⭐ 4.8",
    description: "Traditional aromatic biryani with tender chicken and fragrant rice.",
  },
  {
    id: 3,
    name: "Cheese Burger",
    image: "/images/menu/burger.jpg",
    price: "$12",
    rating: "⭐ 4.7",
    description: "Double beef patty with cheddar cheese, lettuce and fresh tomato.",
  },
  {
    id: 4,
    name: "BBQ Pizza",
    image: "/images/menu/pizza.jpg",
    price: "$18",
    rating: "⭐ 4.9",
    description: "Loaded with BBQ chicken, mozzarella cheese and fresh vegetables.",
  },
  {
    id: 5,
    name: "Chicken Tikka Pasta",
    image: "/images/menu/pasta.jpg",
    price: "$16",
    rating: "⭐ 4.8",
    description: "Spicy tandoori chicken chunks tossed in savory tikka pasta.",
  },
  {
    id: 6,
    name: "Club Sandwich",
    image: "/images/menu/sandwich.jpg",
    price: "$11",
    rating: "⭐ 4.6",
    description: "Triple layered sandwich with chicken, cheese and vegetables.",
  },
  {
    id: 7,
    name: "Fried Chicken",
    image: "/images/menu/fried-chicken.jpg",
    price: "$17",
    rating: "⭐ 4.9",
    description: "Golden crispy fried chicken served with fries.",
  },
  {
    id: 8,
    name: "Chicken Karahi",
    image: "/images/menu/karahi.jpg",
    price: "$20",
    rating: "⭐ 5.0",
    description: "Traditional chicken karahi cooked with fresh tomatoes and spices.",
  },
  {
    id: 9,
    name: "Chocolate Cake",
    image: "/images/menu/cake.jpg",
    price: "$8",
    rating: "⭐ 4.9",
    description: "Soft chocolate sponge layered with rich chocolate cream.",
  },
  {
    id: 10,
    name: "Ice Cream",
    image: "/images/menu/icecream.jpg",
    price: "$6",
    rating: "⭐ 4.7",
    description: "Creamy vanilla ice cream topped with chocolate syrup.",
  },
  {
    id: 11,
    name: "Fresh Juice",
    image: "/images/menu/juice.jpg",
    price: "$5",
    rating: "⭐ 4.8",
    description: "Fresh seasonal fruit juice made daily.",
  },
  {
    id: 12,
    name: "Coffee",
    image: "/images/menu/coffee.jpg",
    price: "$4",
    rating: "⭐ 4.8",
    description: "Premium roasted coffee served hot with rich aroma.",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-amber-400 mb-4">
            Our Menu
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Discover our delicious selection of freshly prepared dishes,
            crafted with premium ingredients and served with exceptional care.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <div className= "relative h-56">
                <div className="relative w-full h-56">
                 <Image
                   src={item.image}
                   alt={item.name}
                   fill
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   className="object-cover"
                  />
               </div>
              </div>

              <div className="p-5">

                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-amber-300">
                    {item.name}
                  </h2>

                  <span className="font-bold text-amber-400">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-neutral-400 mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">

                  <span className="text-yellow-400">
                    {item.rating}
                  </span>

                  <Link href="/Order">
                    <button className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition">
                     Order Now
                   </button>
                 </Link>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}