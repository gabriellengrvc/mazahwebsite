import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fight Food Waste{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Save the Planet
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Meet Mazah, the food waste fighting app. Track expiration dates, discover recipes for leftovers, find donation centers nearby, and monitor your environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
                <img src="/assets/apple-icon.png" alt="Apple" className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button
                variant="outline"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:bg-white hover:text-gray-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
                <img src="/assets/android-icon.png" alt="Google Play" className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>X/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span>X Meals Saved</span>
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
                className="absolute -top-4 -right-4 w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="text-white text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
