import { MapPin, Calendar, Car } from 'lucide-react';

export default function BookingSummary({ pickup, dropoff, pickupDate, dropoffDate, vehicle }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
      <div className="space-y-4">
        {pickup && (
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Pick-up</p>
              <p className="font-medium text-gray-900">{pickup}</p>
            </div>
          </div>
        )}
        {dropoff && (
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Drop-off</p>
              <p className="font-medium text-gray-900">{dropoff}</p>
            </div>
          </div>
        )}
        {pickupDate && (
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Dates</p>
              <p className="font-medium text-gray-900">
                {pickupDate} → {dropoffDate || '—'}
              </p>
            </div>
          </div>
        )}
        {vehicle && (
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Vehicle</p>
              <p className="font-medium text-gray-900">{vehicle}</p>
            </div>
          </div>
        )}
        {!pickup && !dropoff && !pickupDate && !vehicle && (
          <p className="text-gray-500 text-sm">Complete the form to see your summary.</p>
        )}
      </div>
    </div>
  );
}
