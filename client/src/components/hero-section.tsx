import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-secondary/30 via-white to-secondary/20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-ttcommons text-7xl sm:text-7xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Fight Food Waste{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Save the Planet
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Meet Mazah, the food waste fighting app. Track expiration dates, discover recipes for leftovers, find food banks nearby, and monitor your environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start mb-8">
               <a href="https://apps.apple.com/us/app/mazah/id6749251437" className="transform hover:-translate-y-1 transition-all duration-200">
                <img 
                  src="/assets/app-store-badge.png" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto hover:opacity-90"
                />
              </a>
              <a href="#" className="transform hover:-translate-y-1 transition-all duration-200">
                <img 
                  src="/assets/coming-soon-badge.png" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto hover:opacity-90"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[480px]">
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] overflow-hidden relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Mazah</h3>
                    <p className="text-sm opacity-75">Mazah Food Waste Fighting App</p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#a8bfa1] rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="text-white text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
