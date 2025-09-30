import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const DOWNLOAD_URL = "https://apps.apple.com/us/app/mazah/id6749251437";

type NavItem = { label: string } & (
  | { href: string }          // internal route
  | { externalHref: string }  // external link
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
    { label: "Download", externalHref: DOWNLOAD_URL },
  ];

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const handleInternalClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const renderDesktopItem = (item: NavItem) => {
    if ("externalHref" in item) {
      return (
        <a
          key={item.label}
          href={item.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link
        key={item.label}
        href={item.href}
        className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
        onClick={handleInternalClick}
      >
        {item.label}
      </Link>
    );
  };

  const renderMobileItem = (item: NavItem) => {
    if ("externalHref" in item) {
      return (
        <a
          key={item.label}
          href={item.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link
        key={item.label}
        href={item.href}
        className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-medium"
        onClick={handleInternalClick}
      >
        {item.label}
      </Link>
    );
  };

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
          {/* Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" onClick={handleInternalClick}>
                <img
                  src="/assets/mazah-favicon.png"
                  alt="Mazah Logo"
                  className="w-10 h-10 rounded-lg cursor-pointer"
                />
              </Link>
            </div>
            <div className="ml-3">
              <Link href="/" onClick={handleInternalClick}>
                <span className="font-lora text-xl font-bold text-[#547253] cursor-pointer">
                  mazah
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(renderDesktopItem)}
            </div>
          </div>

          {/* Mobile toggle */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(renderMobileItem)}
          </div>
        </div>
      )}
    </nav>
  );
}
