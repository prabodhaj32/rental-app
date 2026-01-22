import { Search, CalendarCheck, Car, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse and select",
    description: "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best."
  },
  {
    icon: CalendarCheck,
    title: "Book and Confirm",
    description: "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS."
  },
  {
    icon: Car,
    title: "Enjoy your ride",
    description: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service."
  },
  {
    icon: CheckCircle,
    title: "Return with ease",
    description: "Return the car at any of our convenient locations. Our team will handle the rest."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            How it works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 text-center">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-black" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
