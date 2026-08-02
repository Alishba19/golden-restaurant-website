"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import { GrLocation } from "react-icons/gr";
import { PiPhoneDuotone } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";

export default function ContactPage() {
  const router = useRouter();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/Success");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-serif text-amber-400 mb-4 tracking-wide">
          Get in Touch
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          We would love to hear from you. Reserve a table, inquire about private events, or simply share your dining experience with us.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Contact Details & Info */}
        <div className="space-y-8 bg-neutral-900/50 p-8 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
          <div>
            <h2 className="text-2xl font-serif text-amber-300 mb-6">
              Golden Restaurant
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-8">
              Experience world-class fine dining. For immediate reservations or party bookings, feel free to call us directly.
            </p>
          </div>

          <div className="space-y-6 text-neutral-300">
            <div className="flex items-start gap-4">
              <span className="text-2xl"><GrLocation /></span>
              <div>
                <h3 className="font-semibold text-amber-100">Location</h3>
                <p className="text-neutral-400">123 Luxury Avenue, Gourmet District, City</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl"><PiPhoneDuotone /></span>
              <div>
                <h3 className="font-semibold text-amber-100">Phone & Reservations</h3>
                <p className="text-neutral-400">+1 (555) 019-2834</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl"><HiOutlineMail /></span>
              <div>
                <h3 className="font-semibold text-amber-100">Email</h3>
                <p className="text-neutral-400">info@goldenrestaurant.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl"><MdOutlineWatchLater /></span>
              <div>
                <h3 className="font-semibold text-amber-100">Opening Hours</h3>
                <p className="text-neutral-400">Mon – Sun: 12:00 PM – 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Book a Table */}
        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
          <h2 className="text-2xl font-serif text-amber-300 mb-2">
           Book a Table
          </h2>

          <p className="text-neutral-400 mb-6">
            Reserve your table in advance and enjoy an unforgettable dining experience.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Full Name */}
         <div>
           <label
             htmlFor="name"
             className="block text-sm font-medium text-amber-100/80 mb-2"
             >
             Full Name
           </label>
           <input
             type="text"
             id="name"
             required
             placeholder="Enter your full name"
             className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
            />
         </div>

          {/* Email */}
         <div>
           <label
             htmlFor="email"
             className="block text-sm font-medium text-amber-100/80 mb-2"
             >
             Email Address
           </label>
           <input
             type="email"
             id="email"
             required
             placeholder="example@gmail.com"
             className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
           />
         </div>

          {/* Phone + Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
             <label
               htmlFor="phone"
               className="block text-sm font-medium text-amber-100/80 mb-2"
               >
               Phone Number
             </label>
             <input
               type="tel"
               id="phone"
               required
               placeholder="+92 300 1234567"
               className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
              />
           </div>

           <div>
             <label
               htmlFor="guests"
               className="block text-sm font-medium text-amber-100/80 mb-2"
               >
               Guests
             </label>
             <select
               id="guests"
               required
               className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
               >
               <option value="" disabled>Select Guests</option>
               <option>1 Person</option>
               <option>2 Persons</option>
               <option>3 Persons</option>
               <option>4 Persons</option>
               <option>5 Persons</option>
               <option>6+ Persons</option>
             </select>
           </div>
          </div>

          {/* Date + Time */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
             <label
                htmlFor="date"
                className="block text-sm font-medium text-amber-100/80 mb-2"
                >
                Reservation Date
             </label>
             <input
               type="date"
               id="date"
               required
               className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
             />
           </div>
           <div>
             <label
               htmlFor="time"
               className="block text-sm font-medium text-amber-100/80 mb-2"
               >
               Reservation Time
             </label>
             <input
               type="time"
               id="time"
               required
               className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
             />
           </div>

          </div>

          {/* Special Request */}
          <div>
           <label
             htmlFor="request"
             className="block text-sm font-medium text-amber-100/80 mb-2"
             >
             Special Request
           </label>
           <textarea
             id="request"
             rows={4}
             placeholder="Birthday celebration, window seat, anniversary, etc."
             className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors resize-none"
           ></textarea>
         </div>

         {/* Button */}
         <button
           type="submit"
           className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-amber-500/10"
           >
           Book a Table
           
         </button>

        </form>
      </div>
     </div>
    </div>
  );
}
