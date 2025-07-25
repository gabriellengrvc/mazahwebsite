import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "Insert Testimonial",
    author: "Person 1",
    role: "Organization 1",
    initials: "P1",
  },
  {
    content:
      "Insert Testimonial",
    author: "Person 2",
    role: "Organization 2",
    initials: "P2",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimonials{" "}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the food waste fighting movement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-semibold`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
