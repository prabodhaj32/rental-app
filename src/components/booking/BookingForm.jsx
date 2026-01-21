import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";

export default function BookingForm() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Pickup Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Search a location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Pickup Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Pick-up date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Dropoff Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Drop-off Location
              </label>
              <input
                type="text"
                placeholder="Search a location"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Dropoff Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Drop-off date
              </label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Search Button */}
            <button className="bg-black text-white h-12 rounded-xl gap-2 flex items-center justify-center hover:bg-gray-800 transition">
              <Search className="w-4 h-4" />
              Find a Vehicle
            </button>
          </div>
        </div>

        {/* Brand Partners */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
          {["HONDA", "JAGUAR", "NISSAN", "VOLVO", "ACURA"].map((brand) => (
            <span key={brand} className="text-lg font-bold tracking-widest text-gray-500">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
