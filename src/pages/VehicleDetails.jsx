import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Star,
  Users,
  Gauge,
  Settings,
  Fuel,
  Snowflake,
  ArrowLeft,
} from 'lucide-react';
import { getVehicleById } from '../data/vehicles';
import RentalPopup from '../components/vehicle/RentalPopup';

export default function VehicleDetails() {
  const { id } = useParams();
  const vehicle = getVehicleById(id);
  const [showPopup, setShowPopup] = useState(false);

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900">Vehicle not found</h1>
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 mt-4 text-emerald-600 font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to fleet
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/vehicles"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                {vehicle.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Available
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {vehicle.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{vehicle.rating}</span>
              </div>
              <span className="text-gray-500">({vehicle.reviews} reviews)</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              {vehicle.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200">
                <Users className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500">Passengers</p>
                  <p className="font-semibold">{vehicle.passengers} seats</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200">
                <Settings className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500">Transmission</p>
                  <p className="font-semibold">{vehicle.transmission}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200">
                <Gauge className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500">Top speed</p>
                  <p className="font-semibold">{vehicle.speed}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200">
                <Fuel className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500">Fuel</p>
                  <p className="font-semibold">Petrol</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">
                  ${vehicle.price.toLocaleString()}
                </span>
                <span className="text-gray-500">/ day</span>
              </div>
              <button
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
              >
                Rent Now
              </button>
              <Link
                to="/booking"
                className="px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all text-center"
              >
                Custom Booking
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <RentalPopup selectedCar={vehicle} onClose={() => setShowPopup(false)} />
      )}
    </main>
  );
}
