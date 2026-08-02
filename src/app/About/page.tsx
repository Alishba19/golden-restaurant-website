import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-amber-50 py-16 px-6">

      {/* Heading */}

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-serif text-amber-400 mb-4">
          About Us
        </h1>

        <p className="text-neutral-400 text-lg">
          Welcome to Golden Restaurant, where delicious food and warm
          hospitality come together to create a memorable dining experience.
        </p>
      </div>

      {/* First Section */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">

       <div className="relative w-full h-[350px]">  
         <Image
           src="/images/about/restaurant.jpg"
           alt="Restaurant"
           fill
           priority
           sizes="(max-width: 768px) 100vw, 50vw"
           className="object-cover rounded-xl"
          />
        </div>

       <div>
          <h2 className="text-3xl text-amber-300 font-serif mb-4">
           Our Story
          </h2>

          <p className="text-neutral-300 leading-8">
           Golden Restaurant was established with one simple goal: to serve
           fresh, delicious, and high-quality food in a comfortable
           environment. Every meal is prepared using carefully selected
           ingredients to ensure the best taste and quality for our guests.
          </p>

          <p className="text-neutral-300 leading-8 mt-5">
           Whether you are enjoying dinner with your family, celebrating a
           special occasion, or meeting friends, we are committed to making
           every visit enjoyable.
          </p>
       </div>

      </div>

      {/* Why Choose Us */}

      <div className="max-w-6xl mx-auto mb-20">

        <h2 className="text-3xl text-center text-amber-300 mb-10 font-serif">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-neutral-900 p-8 rounded-xl border border-amber-500/20 text-center">
            <h3 className="text-xl text-amber-300 mb-3">
              Fresh Ingredients
            </h3>

            <p className="text-neutral-400">
              We prepare every dish using fresh and carefully selected
              ingredients.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl border border-amber-500/20 text-center">
            <h3 className="text-xl text-amber-300 mb-3">
              Expert Chefs
            </h3>

            <p className="text-neutral-400">
              Our experienced chefs prepare every meal with passion and care.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl border border-amber-500/20 text-center">
            <h3 className="text-xl text-amber-300 mb-3">
              Best Service
            </h3>

            <p className="text-neutral-400">
              Friendly staff and excellent customer service make every visit
              special.
            </p>
          </div>

        </div>

      </div>

      {/* Chef Section */}

      <div className="max-w-6xl mx-auto">

       <div className="text-center mb-10">
         <h2 className="text-3xl text-amber-300 font-serif mb-4">
           Meet Our Chefs
         </h2>

         <p className="text-neutral-300 max-w-2xl mx-auto leading-8">
           Our talented chefs bring years of experience and passion to every dish.
           Using fresh ingredients and authentic recipes, they create unforgettable flavors.
         </p>
       </div>

        <div className="grid md:grid-cols-3 gap-8">

         {/* Chef 1 */}
         <div className="bg-neutral-900 rounded-xl overflow-hidden border border-amber-500/20 text-center">
           <div className="relative w-full h-80">
              <Image
               src="/images/about/chef1.jpg"
               alt="Chef 1"
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover"
              />
           </div>

           <div className="p-5">
             <h3 className="text-xl text-amber-300 font-semibold">
               David Carter
             </h3>

              <p className="text-neutral-400">
                Executive Chef
              </p>
           </div>
         </div>

         {/* Chef 2 */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-amber-500/20 text-center">
            <div className="relative w-full h-80">
             <Image
               src="/images/about/chef2.jpg"
               alt="Chef 2"
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover"
              />
            </div>

           <div className="p-5">
             <h3 className="text-xl text-amber-300 font-semibold">
               Michael Lee
             </h3>

             <p className="text-neutral-400">
               Pastry Chef
             </p>
           </div>
         </div>

         {/* Chef 3 */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-amber-500/20 text-center">
            <div className="relative w-full h-80">
             <Image
               src="/images/about/chef3.jpg"
               alt="Chef 3"
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover"
              />
           </div>

           <div className="p-5">
             <h3 className="text-xl text-amber-300 font-semibold">
               Sophia Brown
             </h3>

             <p className="text-neutral-400">
               Sous Chef
             </p>
           </div>
         </div>

        </div>

      </div>

    </div>
  );
}