import { motion } from "framer-motion";
import { Award, Globe, Users, Trophy, Target, Zap } from "lucide-react";

export default function AwardSection() {
  return (
    <section
      id="award"
      className="py-20 bg-gradient-to-br from-secondary/20 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mr-4">
              <Trophy className="text-white text-3xl" />
            </div>
            <div className="text-left">
              <h3 className="font-ttcommons text-2xl font-bold text-gray-900">Top Honors Award Recipient</h3>
              <p className="text-lg text-primary font-semibold">National Geographic Slingshot Challenge</p>
            </div>
          </div>

          <h2 className="font-ttcommons text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Award-Winning{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized by the National Geographic and the Paul G. Allen Family Foundation for our solution to creating positive environmental impact.
          </p>
          
          <a href="https://www.youtube.com/watch?v=a1MAVHcEop4"> 
            <img src="/assets/ngslingshot.jpeg" alt="National Geographic Slingshot Challenge" className="mt-8 mx-auto max-w-full" /> 
          </a>

          <br></br>
          <p className="text-l text-gray-400 max-w-1xl mx-auto">Selected from over 2100 global submissions, featured at the Explorer’s Festival in Washington D.C., recognized by Young Post South China Morning Post, WIT CERN, UN Today magazine, and international media outlets.</p>
        
          <br></br>
          <br></br>
          <br></br>
          <div className="flex justify-center items-center space-x-10">
            <img
              src="/assets/slingshot-challenge.png"
              alt="National Geographic"
              className="h-32 object-contain"
            />

            <img
              src="/assets/Nat_Geo_Logo.png"
              alt="National Geographic"
              className="h-20 object-contain"
            />
            <img
              src="/assets/paul-g-allen.png"
              alt="Paul G. Allen Family Foundation"
              className="h-16 object-contain"
            />
            
          </div>
        
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        </div>
      </div>
    </section>
  );
}
