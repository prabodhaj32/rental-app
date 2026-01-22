import { Play } from "lucide-react";
import heroPorsche from "../assets/images/hero-porsche.jpg";
import ferrariLogo from "../assets/logo/ferrari.svg";
import mercedesLogo from "../assets/logo/mercedes.svg";
import bmwLogo from "../assets/logo/bmw.svg";
import bentleyLogo from "../assets/logo/bentley.svg";
import jaguarLogo from "../assets/logo/jaguar.svg";
import chevroletLogo from "../assets/logo/chevrolet.svg";

import FleetSection from "../components/vehicle/FleetSection";
import BookingForm from "../components/booking/BookingForm";
import CarDealsSection from "../components/vehicle/CarDealsSection";
import HowItWorksSection from "../components/booking/HowItWorksSection";
import ServicesSection from "../components/booking/ServicesSection";
import TestimonialsSection from "../components/booking/TestimonialsSection";

const brandLogos = [
  { name: "Ferrari", logo: ferrariLogo },
  { name: "Mercedes", logo: mercedesLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Bentley", logo: bentleyLogo },
  { name: "Jaguar", logo: jaguarLogo },
  { name: "Chevrolet", logo: chevroletLogo },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Premium <br />
                Car Rental <br />
                in New York
              </h1>

              <p className="mt-6 text-gray-700 max-w-md mx-auto lg:mx-0">
                Don't deny yourself the pleasure of driving the best premium cars
                from around the world here and now.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                  Book Now
                </button>

                <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-black hover:bg-gray-100 transition">
                  <Play className="w-4 h-4" />
                  Watch Video
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl p-6">
                <img
                  src={heroPorsche}
                  alt="Premium Porsche Convertible"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </div>
          </div>

          {/* BRAND LOGOS */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
  {brandLogos.map((brand) => (
    <div
      key={brand.name}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
      title={brand.name}
    >
      <img 
        src={brand.logo} 
        alt={brand.name}
        className="w-8 h-8 object-contain"
      />
    </div>
  ))}

  <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition">
    →
  </button>
</div>

        </div>
      </section>

      {/* SECTIONS */}
      <BookingForm />
      <FleetSection />
      <CarDealsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServicesSection />
    </>
  );
}
