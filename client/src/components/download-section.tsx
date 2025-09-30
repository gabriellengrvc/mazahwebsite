import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-20 relative overflow-hidden text-white bg-gradient-to-br from-[#2a3b2a] via-[#293629] to-[#232e23]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-ttcommons text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Fight{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Food Waste?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start your journey with Mazah today.
          </p>
        </motion.div>

        {}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
