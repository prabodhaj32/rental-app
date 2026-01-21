import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // make sure installed via npm
import Dashboard from "../../pages/Dashboard";
import Home from "../../pages/Home";
import FleetSection from "../vehicle/FleetSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
              U
            </div>
            <span className="font-bold text-lg tracking-tight text-black">
              Unique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-gray-500">
            <Link to="/" className="text-sm hover:text-black transition-colors">
              About Us
            </Link>
            <Link to="/FleetSection" className="text-sm hover:text-black transition-colors">
              Cars
            </Link>
            <Link to="/" className="text-sm hover:text-black transition-colors">
              Features
            </Link>
            <Link to="/" className="text-sm hover:text-black transition-colors">
              Help
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 text-gray-500 flex flex-col gap-4">
            <Link to="/" className="hover:text-black transition-colors">
              About Us
            </Link>
            <Link to="/vehicles" className="hover:text-black transition-colors">
              Cars
            </Link>
            <Link to="/" className="hover:text-black transition-colors">
              Features
            </Link>
            <Link to="/" className="hover:text-black transition-colors">
              Help
            </Link>
            <button className="bg-black text-white px-6 py-2 rounded-full w-fit hover:bg-gray-800 transition">
              Download App
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
