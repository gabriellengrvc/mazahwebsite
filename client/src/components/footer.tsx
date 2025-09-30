import { SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#232e23] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/mazah-favicon.png" 
                alt="Mazah Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="ml-3 text-xl font-bold">mazah</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fighting food waste one meal at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mazahapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <SiInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/mazah-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <SiLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#232e23] mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 Mazah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
