import { Shield, DollarSign, Smartphone } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more."
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank."
  },
  {
    icon: Smartphone,
    title: "Convenient Online Booking",
    description: "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime."
  }
];

export default function ServicesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Our Services & Benefits
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            To make renting easy and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
