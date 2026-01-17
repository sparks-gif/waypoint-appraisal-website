import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 flex-nowrap" style={{ marginLeft: '-12px' }}>
            <img 
              src="/logo.png?v=3" 
              alt="Waypoint Appraisal Co." 
              style={{ height: '56px', width: 'auto', maxHeight: 'none' }}
              className={cn(
                "flex-shrink-0 transition-all",
                isScrolled ? "" : "brightness-0 invert drop-shadow-lg"
              )}
            />
            <span className={cn(
              "text-2xl md:text-3xl font-serif font-bold tracking-tight transition-all whitespace-nowrap",
              isScrolled 
                ? "text-slate-900" 
                : "text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]"
            )}>
              Waypoint<span className={isScrolled ? "text-blue-600" : "text-blue-300"}>Appraisal</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-base font-semibold transition-colors hover:text-blue-400",
                isScrolled 
                  ? "text-gray-700 hover:text-blue-600" 
                  : "text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_50%)]"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-base font-semibold px-6 py-2"
            onClick={() => scrollToSection("#contact")}
          >
            Request Appraisal
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden",
            isScrolled ? "text-gray-700" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-gray-700 font-medium py-2 hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
          <Button className="w-full" onClick={() => scrollToSection("#contact")}>
            Request Appraisal
          </Button>
        </div>
      )}
    </nav>
  );
}
