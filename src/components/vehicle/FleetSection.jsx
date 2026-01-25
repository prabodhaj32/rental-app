import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { vehicles, categories } from '../../data/vehicles';

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  const featured = filtered.slice(0, 3);
  const rest = filtered.slice(3, 7);

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-600 font-medium mb-4">
            Only the Best Cars
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Vehicle Fleet
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide our customers with the most incredible driving emotions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(featured.length ? featured : filtered.slice(0, 3)).map((v) => (
            <Link
              key={v.id}
              to={`/vehicles/${v.id}`}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold">{v.name}</h3>
                <p className="text-white/80 text-sm">{v.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {rest.slice(0, 4).map((v) => (
            <Link
              key={v.id}
              to={`/vehicles/${v.id}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-emerald-200 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <p className="font-medium text-gray-900 text-sm truncate">{v.name}</p>
                <p className="text-xs text-gray-500">{v.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-100 hover:border-emerald-400 hover:text-emerald-700 transition-all"
          >
            Show All Vehicles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
