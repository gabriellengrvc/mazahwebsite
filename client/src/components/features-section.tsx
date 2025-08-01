import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar,
  ChefHat,
  MapPin,
  TrendingUp,
  Leaf,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Expiration Tracking",
    description:
      "Smart notifications remind you when food is close to expiring.",
    gradient: "gradient-primary",
  },
  {
    icon: ChefHat,
    title: "Recipe Discovery",
    description:
      "Transform leftover ingredients into delicious meals from personalized recipe suggestions.",
    gradient: "gradient-secondary",
  },
  {
    icon: MapPin,
    title: "Donation Centers",
    description:
      "Find nearby food banks to share excess food with those in need in your community.",
    gradient: "gradient-secondary",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your impact with statistics on the meals and money you saved.",
    gradient: "gradient-accent",
  },
  {
    icon: Leaf,
    title: "Carbon Impact",
    description:
      "See your positive environmental impact of CO2 emissions reduced through waste prevention.",
    gradient: "gradient-accent",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Join a growing community of eco-conscious users.",
    gradient: "gradient-secondary",
  },
];

const appScreenshots = [
  {
    title: "Expiration Tracking",
    description: "Never let food go bad again with smart reminders",
    image: "" //ss here
  },
  {
    title: "Recipe Discovery",
    description: "Transform leftovers into delicious meals",
    image: ""
  },
  {
    title: "Impact Tracking",
    description: "See your positive environmental impact",
    image: ""
  }
];

function AppScreenshotSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appScreenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  return (
    <div className="relative max-w-md mx-auto justify-center">
        <div className="bg-black rounded-[2rem] overflow-hidden relative aspect-[9/16] w-80 flex items-center justify-center">
          {/* Screenshot */}
          <motion.img
            key={currentSlide}
            src={appScreenshots[currentSlide].image}
            alt={appScreenshots[currentSlide].title}
            className="w-full h-full object-cover flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      {/* Screenshot Info */}
      <div className="text-center mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {appScreenshots[currentSlide].title}
        </h3>
        <p className="text-gray-600">
          {appScreenshots[currentSlide].description}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {appScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Features That Help You{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reduce Food Waste
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to help you save money, reduce waste, and make a positive impact on the environment at home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* App Screenshots Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <AppScreenshotSlideshow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
