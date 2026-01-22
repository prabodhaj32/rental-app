import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Clock, Phone, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Career", href: "#" },
  ],
  services: [
    { label: "Airport Transfers", href: "#" },
    { label: "Ride Hailing", href: "#" },
    { label: "Corporate Accounts", href: "#" },
    { label: "Hourly Rentals", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">U</span>
              </div>
              <span className="font-bold text-lg">RentCars</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We are a well-known car rental service that has many partners in each region to connect with you to arrive at any meetings, events, holidays or whenever you need us.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Hours */}
          <div>
            <h4 className="font-semibold mb-6">Work Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-white/50" />
                <div>
                  <p className="text-sm">9 AM - 5 PM, Monday - Saturday</p>
                  <p className="text-white/50 text-sm">Our Support and Sales team is available to assist</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/50" />
                <span className="text-sm">+234 899 543-0800</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/50" />
                <span className="text-sm">support@rentcars.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            Copyright 2026 AI Vehicle Rental System • Design by Unique
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Use
            </Link>
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}