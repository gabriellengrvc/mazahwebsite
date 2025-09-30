import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar,
  ChefHat,
  MapPin,
  TrendingUp,
  Leaf,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Expiration Tracking",
    description: "Smart notifications remind you when food is close to expiring.",
    gradient: "gradient-primary",
  },
  {
    icon: ChefHat,
    title: "Recipe Discovery",
    description: "Get personalized recipes recommended to you with ingredients already have in your kitchen.",
    gradient: "gradient-secondary",
  },
  {
    icon: MapPin,
    title: "Donation Centers",
    description: "Find nearby food banks to share excess food with those in need in your community.",
    gradient: "gradient-secondary",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your impact with statistics on the meals and money you saved.",
    gradient: "gradient-accent",
  },
  {
    icon: Leaf,
    title: "Carbon Impact",
    description: "See your positive environmental impact of CO2 emissions reduced through waste prevention.",
    gradient: "gradient-accent",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Join a growing community of eco-conscious users.",
    gradient: "gradient-secondary",
  },
];

const appScreenshots = [
  {
    title: "Smart Recipe Suggestions",
    description: "Use up expiring ingredients with personalized recipes.",
    image: "/assets/feature 1.png",
  },
  {
    title: "Food Inventory",
    description: "Track what you have and when it expires—at a glance.",
    image: "/assets/feature 2.png",
  },
  {
    title: "Meal Planner",
    description: "Plan meals and see your environmental impact.",
    image: "/assets/feature 3.png",
  },
];

function AppScreenshotSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appScreenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % appScreenshots.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + appScreenshots.length) % appScreenshots.length);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-[22rem] aspect-[9/16] rounded-[2rem] overflow-hidden bg-transparent">
        <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center">
          <motion.img
            key={currentSlide}
            src={appScreenshots[currentSlide].image}
            alt={appScreenshots[currentSlide].title}
            className="max-w-full max-h-full object-contain"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="text-center mt-6">
        <h3 className="font-ttcommons text-xl font-bold text-gray-900 mb-2">
          {appScreenshots[currentSlide].title}
        </h3>
        <p className="text-gray-600">
          {appScreenshots[currentSlide].description}
        </p>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {appScreenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === currentSlide ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
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
          className="text-center mb-12"
        >
          <h2 className="font-ttcommons text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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

          <div className="grid md:grid-cols-2 gap-6">
  {features.map((feature, index) => {
    const row = Math.floor(index / 2);
    const col = index % 2;

    const isGreen =
      (row % 2 === 0 && col === 0) || (row % 2 === 1 && col === 1);

    const bgColor = isGreen ? "bg-[#a8bfa1]" : "bg-[#f3ecc6]";
    const iconColor = isGreen ? "text-white" : "text-black";

    return (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
      >
        <div
          className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <feature.icon className={`${iconColor} text-lg`} />
        </div>
        <h3 className="font-ttcommons text-lg font-bold text-gray-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    );
  })}
</div>


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
