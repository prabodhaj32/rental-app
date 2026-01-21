import { Star, Users, Gauge, Settings } from "lucide-react";

const carDeals = [
  {
    id: 1,
    name: "BMW M8 COUP 2023",
    image: "/images/car-bmw.jpg",
    rating: 4.8,
    reviews: 2453,
    passengers: 4,
    transmission: "Automatic",
    speed: "280 km/h",
    price: 2000,
  },
  {
    id: 2,
    name: "FORTUNE GX",
    image: "/images/car-suv.jpg",
    rating: 4.8,
    reviews: 1232,
    passengers: 7,
    transmission: "Automatic",
    speed: "180 km/h",
    price: 2500,
  },
  {
    id: 3,
    name: "Lamborghini Huracan",
    image: "/images/car-lamborghini.jpg",
    rating: 4.9,
    reviews: 892,
    passengers: 2,
    transmission: "Automatic",
    speed: "325 km/h",
    price: 3000,
  },
  {
    id: 4,
    name: "AUDI R8",
    image: "/images/car-audi.jpg",
    rating: 4.7,
    reviews: 1567,
    passengers: 2,
    transmission: "Automatic",
    speed: "330 km/h",
    price: 3200,
  },
];

export default function CarDealsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Popular Car Rentals Deals
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carDeals.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-black">{car.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{car.rating}</span>
                  <span className="text-sm text-gray-500">({car.reviews} reviews)</span>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Users className="w-3 h-3" />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Settings className="w-3 h-3" />
                    <span>{car.transmission.slice(0, 4)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Gauge className="w-3 h-3" />
                    <span>{car.speed}</span>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-xl font-bold text-black">${car.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">/day</span>
                  </div>
                  <button className="rounded-full text-xs bg-transparent border border-gray-300 hover:bg-gray-100 transition px-4 py-2">
                    Rent Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="text-gray-500 hover:text-black transition">
            Show all vehicles →
          </button>
        </div>
      </div>
    </section>
  );
}
