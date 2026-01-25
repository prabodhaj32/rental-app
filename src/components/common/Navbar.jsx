import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, User, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:bg-emerald-700 transition-colors">
              U
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">
              Unique<span className="text-emerald-600">Rentals</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-gray-600">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Home
            </button>
            <Link to="/vehicles" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Cars
            </Link>
            <Link to="/booking" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Book Now
            </Link>
            <Link
              to="/#features"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Features
            </Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-emerald-500 hover:text-emerald-600 transition-all text-sm font-medium"
            >
              <User className="w-4 h-4" />
              Login
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm font-medium shadow-md shadow-emerald-600/25"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Link>
          </div>

          <button
            className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 flex flex-col gap-1">
            <button
              onClick={() => { navigate('/'); setIsOpen(false); }}
              className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              Home
            </button>
            <Link to="/vehicles" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              Cars
            </Link>
            <Link to="/booking" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              Book Now
            </Link>
            <Link
              to="/#features"
              onClick={(e) => {
                setIsOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              Features
            </Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              Dashboard
            </Link>
            <div className="border-t border-gray-200 mt-2 pt-2 flex flex-col gap-1">
              <Link to="/login" onClick={() => setIsOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium flex items-center gap-2">
                <User className="w-4 h-4" /> Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="mx-4 py-3 rounded-xl bg-emerald-600 text-white text-center font-medium">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
