import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Contact Us", href: "/contact" },
    { label: "Download", id: "download" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-sm border-b border-gray-200/50 shadow-lg"
          : "bg-white/60 backdrop-blur-sm border-b border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/assets/mazah-favicon.png" 
                alt="Mazah Logo" 
                className="w-10 h-10 rounded-lg"
              />
            </div>
            <div className="ml-3">
              <span className="font-lora text-xl text-[#547253]">mazah</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => item.id && scrollToSection(item.id)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => item.id && scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}