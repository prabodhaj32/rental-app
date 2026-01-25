import { Link } from 'react-router-dom';
import { Star, Users, Gauge, Settings } from 'lucide-react';

export default function VehicleCard({ vehicle }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
      <Link to={`/vehicles/${vehicle.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/vehicles/${vehicle.id}`}>
          <h2 className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
            {vehicle.name}
          </h2>
        </Link>
        {vehicle.rating != null && (
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium">{vehicle.rating}</span>
            {vehicle.reviews != null && (
              <span className="text-sm text-gray-500">({vehicle.reviews})</span>
            )}
          </div>
        )}
        {(vehicle.passengers != null || vehicle.transmission) && (
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
            {vehicle.passengers != null && (
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" /> {vehicle.passengers} seats
              </span>
            )}
            {vehicle.transmission && (
              <span className="flex items-center gap-1">
                <Settings className="w-3 h-3" /> {vehicle.transmission}
              </span>
            )}
            {vehicle.speed && (
              <span className="flex items-center gap-1">
                <Gauge className="w-3 h-3" /> {vehicle.speed}
              </span>
            )}
          </div>
        )}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">
              ${(vehicle.price ?? 0).toLocaleString()}
            </span>
            <span className="text-sm text-gray-500"> / day</span>
          </div>
          <Link
            to={`/vehicles/${vehicle.id}`}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            View & Book
          </Link>
        </div>
      </div>
    </div>
  );
}
