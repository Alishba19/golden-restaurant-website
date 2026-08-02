import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const specialDishes = [
    {
      id: 1,
      title: 'Signature Steak',
      description: 'Perfectly grilled premium beef steak served with roasted vegetables, crispy potatoes, and rich garlic butter sauce.',
      price: '$28.99',
      image: '/images/home/dish-1.jpg',
    },
    {
      id: 2,
      title: 'Chicken Biryani',
      description: 'Aromatic basmati rice cooked with authentic spices and rich saffron.',
      price: '$22.50',
      image: '/images/home/dish-2.jpg',
    },
    {
      id: 3,
      title: 'Pasta',
      description: 'Freshly cooked penne pasta in a flavorful tomato sauce, topped with parmesan cheese and aromatic Italian here.',
      price: '$19.99',
      image: '/images/home/dish-3.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-amber-50">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-4">
        <Image
          src="/images/home/hero-bg.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-40 opacity-80"
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Welcome to Golden Restaurant
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 leading-tight">
            Taste The Luxury & Perfection
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl font-light">
            Experience world-class culinary art in an elegant and golden atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/Menu"
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              Explore Menu
            </Link>
            <Link
              href="/Contact"
              className="border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:bg-amber-400/10 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Book A Table
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT BRIEF SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-95 md:h-112.5 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
          <Image
           src="/images/home/about-chef.jpg"
           alt="Our Master Chef"
           fill
            sizes="(max-width: 768px) 100vw, 50vw"
           className="object-cover"
         />
        </div>
        <div className="space-y-6">
          <span className="text-amber-400 font-medium tracking-wide uppercase text-sm">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-200">
            Crafting Unforgettable Flavors Since 2026
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Golden Restaurant me har dish aik khas tariqay se banayi jaati hai. Hamari team fresh ingredients aur authentic spices ka istemal karti hai taake aap ko har bite me royal taste mil sake.
          </p>
          <div className="pt-2">
            <Link
              href="/About"
              className="inline-block text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-8 transition-colors"
            >
              Read More About Us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SPECIAL DISHES SECTION */}
      <section className="py-20 bg-neutral-950 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4 mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">
            Chef Specials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-100">
            Featured Delicacies
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Try our most loved dishes curated specially for food lovers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-neutral-900 border border-amber-500/10 rounded-2xl overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                 src={dish.image}
                 alt={dish.title}
                 fill
                 sizes="(max-width: 768px) 100vw, 33vw"
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-serif font-semibold text-amber-200">
                    {dish.title}
                  </h3>
                  <span className="text-amber-400 font-bold">{dish.price}</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}