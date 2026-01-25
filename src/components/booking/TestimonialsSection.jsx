import { Star } from "lucide-react";

import carMercedes from "../../assets/images/car-mercedes.jpg";
import carBMW from "../../assets/images/car-bmw.jpg";
import carLamborghini from "../../assets/images/car-lamborghini.jpg";


const testimonials = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "Business Traveler",
    avatar: "JC",
    rating: 5,
    quote:
      "I had an incredible experience renting from Rent Cars! The process was smooth and easy, and the car was in pristine condition. Highly recommended!",
    image: carMercedes,
  },
  {
    id: 2,
    name: "Alex Rental",
    role: "Adventure Seeker",
    avatar: "AR",
    rating: 5,
    quote:
      "I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car was excellent.",
    image: carBMW,
  },
  {
    id: 3,
    name: "Katy Rental",
    role: "Luxury Enthusiast",
    avatar: "KR",
    rating: 5,
    quote:
      "Rent Cars truly stands out. From their seamless pick-up and drop-off process to excellent customer service.",
    image: carLamborghini,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-600 font-medium mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some comments from users.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-emerald-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm mb-4">{t.quote}</p>

              {/* Car Image */}
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={t.image}
                  alt="Rental car"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
