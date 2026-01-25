import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Gauge, Settings } from 'lucide-react';
import RentalPopup from './RentalPopup';
import { getDealVehicles } from '../../data/vehicles';

const carDeals = getDealVehicles();

export default function CarDealsSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleRentNow = (e, car) => {
    e.preventDefault();
    setSelectedCar(car);
    setShowPopup(true);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-emerald-600 font-medium mb-4">
              Best Deals
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Popular Car Rentals
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From elegant sedans to powerful sports cars—carefully selected for the ultimate driving experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carDeals.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <Link to={`/vehicles/${car.id}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/vehicles/${car.id}`}>
                    <h3 className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors">{car.name}</h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{car.rating}</span>
                    <span className="text-sm text-gray-500">({car.reviews} reviews)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{car.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="w-3 h-3" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      <span>{car.speed}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xl font-bold text-gray-900">${car.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500"> / day</span>
                    </div>
                    <button
                      onClick={(e) => handleRentNow(e, car)}
                      className="px-4 py-2 text-sm font-medium rounded-xl border border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-colors"
                    >
                      Rent Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/vehicles"
              className="text-emerald-600 font-medium hover:text-emerald-700 hover:underline transition-colors"
            >
              Show all vehicles →
            </Link>
          </div>
        </div>
      </section>

      {showPopup && selectedCar && (
        <RentalPopup selectedCar={selectedCar} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
