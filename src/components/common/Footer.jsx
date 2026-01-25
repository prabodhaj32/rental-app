import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Clock, Phone, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/', internal: true },
    { label: 'Our Services', href: '/#features', internal: true },
    { label: 'Career', href: '#', internal: false },
  ],
  services: [
    { label: 'Airport Transfers', href: '/booking', internal: true },
    { label: 'Ride Hailing', href: '/vehicles', internal: true },
    { label: 'Corporate Accounts', href: '/booking', internal: true },
    { label: 'Hourly Rentals', href: '/vehicles', internal: true },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

function FooterLink({ link }) {
  const className = 'text-white/70 hover:text-white text-sm transition-colors';
  if (link.internal) {
    return <Link to={link.href} className={className}>{link.label}</Link>;
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="font-bold text-lg">Unique<span className="text-emerald-400">Rentals</span></span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium car rental service with partners in each region. We connect you to luxury vehicles for meetings, events, holidays, and whenever you need us.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border border-emerald-500/30 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Work Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-emerald-400/80 shrink-0" />
                <div>
                  <p className="text-sm">9 AM – 5 PM, Monday – Saturday</p>
                  <p className="text-white/50 text-sm">Support & Sales available</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400/80 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400/80 shrink-0" />
                <span className="text-sm">support@uniquerentals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Unique Rentals • Premium Vehicle Rental
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
