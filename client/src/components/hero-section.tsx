import { Leaf, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="home"
      className="pt-16 bg-transparent min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
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
              <button
                onClick={() => setShowPopup(true)}
                className="transform hover:-translate-y-1 transition-all duration-200"
              >
                <img
                  src="/assets/coming-soon-badge.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto hover:opacity-90"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30  }}
            animate={{ opacity: 1, scale: 1, y: 0  }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[480px] aspect-square">
            <img 
              src="/assets/mazah.gif"  
              alt="Mazah demo animation"
              className="w-full h-full rounded-[3rem] object-cover shadow-2xl"
            />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#a8bfa1] rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="text-white text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    <AnimatePresence>
      {showPopup && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1], // smooth, natural Apple curve
            }}
            className="relative bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 p-2 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              Mazah will be available on Google Play shortly.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </section>
  );
}
