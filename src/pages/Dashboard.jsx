import { Link } from 'react-router-dom';
import {
  Car,
  TrendingUp,
  Wrench,
  ArrowRight,
  DollarSign,
  Calendar,
} from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: '$124,580', change: '+12%', icon: DollarSign, color: 'emerald' },
  { label: 'Active Rentals', value: '48', change: '+5', icon: Car, color: 'blue' },
  { label: 'Maintenance Due', value: '3', change: '-2', icon: Wrench, color: 'amber' },
  { label: 'New Bookings', value: '127', change: '+18%', icon: Calendar, color: 'violet' },
];

const colorMap = {
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  blue: 'bg-blue-50 text-blue-600 border-blue-200',
  amber: 'bg-amber-50 text-amber-600 border-amber-200',
  violet: 'bg-violet-50 text-violet-600 border-violet-200',
};

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Overview of your rental operations</p>
          </div>
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
          >
            Manage Fleet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorMap[s.color]}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-500 mt-4">{s.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
              <p className="text-sm text-emerald-600 font-medium mt-1">{s.change} vs last month</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              Demand Overview
            </h2>
            <div className="h-48 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-gray-400 text-sm">Chart placeholder — connect your analytics</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              Revenue
            </h2>
            <div className="h-48 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-gray-400 text-sm">Chart placeholder — connect your analytics</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-emerald-600" />
            Maintenance
          </h2>
          <div className="h-48 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-gray-400 text-sm">Maintenance chart placeholder</p>
          </div>
        </div>
      </div>
    </main>
  );
}
