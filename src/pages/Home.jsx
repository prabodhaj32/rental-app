import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, ChevronRight } from 'lucide-react';
import heroPorsche from '../assets/images/hero-porsche.jpg';
import ferrariLogo from '../assets/logo/ferrari.svg';
import mercedesLogo from '../assets/logo/mercedes.svg';
import bmwLogo from '../assets/logo/bmw.svg';
import bentleyLogo from '../assets/logo/bentley.svg';
import jaguarLogo from '../assets/logo/jaguar.svg';
import chevroletLogo from '../assets/logo/chevrolet.svg';
import FleetSection from '../components/vehicle/FleetSection';
import BookingForm from '../components/booking/BookingForm';
import CarDealsSection from '../components/vehicle/CarDealsSection';
import HowItWorksSection from '../components/booking/HowItWorksSection';
import ServicesSection from '../components/booking/ServicesSection';
import TestimonialsSection from '../components/booking/TestimonialsSection';

const brandLogos = [
  { name: 'Ferrari', logo: ferrariLogo },
  { name: 'Mercedes', logo: mercedesLogo },
  { name: 'BMW', logo: bmwLogo },
  { name: 'Bentley', logo: bentleyLogo },
  { name: 'Jaguar', logo: jaguarLogo },
  { name: 'Chevrolet', logo: chevroletLogo },
];

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash === '#features') {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <section id="hero" className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-widest text-emerald-600 font-medium mb-4">
                Premium car rental
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Premium <br />
                Car Rental <br />
                <span className="text-emerald-600">in Sri Lanka</span>
              </h1>
              <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Don't deny yourself the pleasure of driving the best premium cars from around the world—here and now.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
                >
                  Book Now
                </Link>
                <a
                  href="#fleet"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  <Play className="w-4 h-4" />
                  View Fleet
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl p-6 shadow-xl">
                  <img
                    src={heroPorsche}
                    alt="Premium Porsche Convertible"
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-20  flex flex-wrap justify-center items-center gap-20">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
                title={brand.name}
              >
                <img src={brand.logo} alt={brand.name} className="w-8 h-8 object-contain" />
              </div>
            ))}
            <Link
              to="/vehicles"
              className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-all"
              aria-label="View all brands"
            >
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* <div id="booking-form">
        <BookingForm />
      </div> */}
      <FleetSection />
      <CarDealsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServicesSection />
    </>
  );
}
