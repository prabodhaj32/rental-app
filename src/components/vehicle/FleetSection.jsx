import { useState } from "react";
import { ArrowRight } from "lucide-react";

// ✅ Image imports (Vite way)
import bmwImg from "../../assets/images/car-bmw.jpg";
import porscheGtImg from "../../assets/images/car-porsche-gt.jpg";
import corvetteImg from "../../assets/images/car-corvette.jpg";
import mercedesImg from "../../assets/images/car-mercedes.jpg";
import lamboImg from "../../assets/images/car-lamborghini.jpg";
import audiImg from "../../assets/images/car-audi.jpg";
import suvImg from "../../assets/images/car-suv.jpg";

const categories = [
  "Premium",
  "Coupe",
  "Hypercars",
  "Sportcar",
  "Cabriolet",
  "Limousines",
];

const vehicles = [
  {
    id: 1,
    name: "BMW M8 Coupe",
    category: "Coupe",
    image: bmwImg,
    featured: true,
  },
  {
    id: 2,
    name: "Porsche 911 GT3",
    category: "Hypercars",
    image: porscheGtImg,
    featured: true,
  },
  {
    id: 3,
    name: "Corvette C8",
    category: "Sportcar",
    image: corvetteImg,
    featured: true,
  },
  {
    id: 4,
    name: "Mercedes-AMG GT",
    category: "Premium",
    image: mercedesImg,
    featured: false,
  },
  {
    id: 5,
    name: "Lamborghini Huracan",
    category: "Hypercars",
    image: lamboImg,
    featured: false,
  },
  {
    id: 6,
    name: "Audi R8 V10",
    category: "Sportcar",
    image: audiImg,
    featured: false,
  },
  {
    id: 7,
    name: "Range Rover Sport",
    category: "Premium",
    image: suvImg,
    featured: false,
  },
];

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState("Hypercars");

  const filteredVehicles =
    activeCategory === "All"
      ? vehicles
      : vehicles.filter(
          (v) =>
            v.category === activeCategory ||
            (activeCategory === "Premium" && v.category === "Premium")
        );

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Only the Best Cars
          </p>
           <h2 className="text-3xl sm:text-4xl font-bold text-black">
           Our Vehicle Fleet
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide our customers with the most incredible driving emotions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Vehicles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.slice(0, 3).map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold">{vehicle.name}</h3>
                <p className="text-white/70 text-sm">{vehicle.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Vehicles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {filteredVehicles.slice(3).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="flex items-center gap-2 mx-auto px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            Show All (83 models)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
