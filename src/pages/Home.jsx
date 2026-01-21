import { useState } from "react";
import { Play } from "lucide-react";
import heroPorsche from "../assets/images/hero-porsche.jpg";
import FleetSection from "../components/vehicle/FleetSection";
import BookingForm from "../components/booking/BookingForm";
import CarDealsSection from "../components/vehicle/CarDealsSection";

const brandLogos = [
  { name: "Ferrari", icon: "🏎️" },
  { name: "Alfa Romeo", icon: "⚙️" },
  { name: "Tesla", icon: "⚡" },
  { name: "MINI", icon: "🚗" },
  { name: "Porsche", icon: "🛞" },
  { name: "Mercedes", icon: "⭐" },
  { name: "Lexus", icon: "🔷" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen pt-16 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="py-12 lg:py-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Premium<br />
              Car Rental<br />
              in New York
            </h1>
            <p className="mt-6 text-black text-lg max-w-md leading-relaxed">
              Don't deny yourself the pleasure of driving the best premium cars from around the world here and now.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                Book Now
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-black hover:bg-gray-100 transition">
                <Play className="w-4 h-4" />
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end bg-gradient-to-b from-gray-200 to-gray-300 rounded-l-3xl">
          <img
  src={heroPorsche}
  alt="Premium Porsche Convertible"
  className="w-full max-w-lg object-contain"
/>

          </div>
        </div>

        {/* Brand Logos */}
        <div className="pb-12 mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              title={brand.name}
            >
              <span className="text-xl text-gray-500">{brand.icon}</span>
            </div>
          ))}
          <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors">
            <span className="text-gray-500">→</span>
          </button>
        </div>
      </div>
    </section>
    
    {/* Booking Form */}
    <BookingForm />
    
    {/* Car Deals Section */}
    <CarDealsSection />
    
    {/* Fleet Section */}
    <FleetSection />
    </>
  );
}
