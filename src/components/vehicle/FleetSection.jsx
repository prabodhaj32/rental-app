import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  "Premium",
  "Coupe", 
  "Hypercars",
  "Sportcar",
  "Cabriolet",
  "Limousines"
];

const vehicles = [
  {
    id: 1,
    name: "BMW M8 Coupe",
    category: "Coupe",
    image: "/images/car-bmw.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Porsche 911 GT3",
    category: "Hypercars",
    image: "/images/car-porsche-gt.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Corvette C8",
    category: "Sportcar",
    image: "/images/car-corvette.jpg",
    featured: true
  },
  {
    id: 4,
    name: "Mercedes-AMG GT",
    category: "Premium",
    image: "/images/car-mercedes.jpg",
    featured: false
  },
  {
    id: 5,
    name: "Lamborghini Huracan",
    category: "Hypercars",
    image: "/images/car-lamborghini.jpg",
    featured: false
  },
  {
    id: 6,
    name: "Audi R8 V10",
    category: "Sportcar",
    image: "/images/car-audi.jpg",
    featured: false
  },
  {
    id: 7,
    name: "Range Rover Sport",
    category: "Premium",
    image: "/images/car-suv.jpg",
    featured: false
  },
];

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState("Hypercars");

  const filteredVehicles = activeCategory === "All" 
    ? vehicles 
    : vehicles.filter(v => v.category === activeCategory || activeCategory === "Premium");

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Only the Best Cars
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
            Our Vehicle Fleet
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide our customers with the most incredible driving emotions. That's why we have only world-class cars in our fleet.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Cards */}
          {filteredVehicles.slice(0, 3).map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold">{vehicle.name}</h3>
                <p className="text-white/70 text-sm">{vehicle.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {filteredVehicles.slice(3, 7).map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center mt-10">
          <button className="rounded-full px-8 py-3 gap-2 bg-transparent border border-gray-300 hover:bg-gray-100 transition flex items-center mx-auto">
            Show All (83 models)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
