import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Search } from 'lucide-react';
import BookingSummary from '../components/booking/BookingSummary';
import HowItWorksSection from '../components/booking/HowItWorksSection';

export default function Booking() {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/vehicles');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Book Your Ride
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Choose your pickup and drop-off locations and dates. We'll show you available vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Pick-up location
                  </label>
                  <input
                    type="text"
                    placeholder="City, address, or airport"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Drop-off location
                  </label>
                  <input
                    type="text"
                    placeholder="Same as pickup or different"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Pick-up date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Drop-off date
                  </label>
                  <input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
                >
                  <Search className="w-5 h-5" />
                  Find vehicles
                </button>
                <Link
                  to="/vehicles"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  Browse all fleet
                </Link>
              </div>
            </form>
          </div>
          <div>
            <BookingSummary
              pickup={pickupLocation || undefined}
              dropoff={dropoffLocation || undefined}
              pickupDate={pickupDate || undefined}
              dropoffDate={dropoffDate || undefined}
            />
          </div>
        </div>

        <HowItWorksSection />
      </div>
    </main>
  );
}
