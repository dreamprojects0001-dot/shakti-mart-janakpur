import { useState, useEffect } from "react";
import logoSrc from "@/assets/shakti_mart_nobg.png";

const navLinks = [
  { label: "Shop", href: "#categories" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#about" },
  { label: "Find Store", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`max-w-4xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/15 backdrop-blur-xl shadow-lg shadow-black/10 border border-white/20"
            : "bg-white/10 backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logoSrc} alt="Shakti Mart" className="h-9 w-auto" />
          <span className="font-serif-display italic font-bold text-lg text-white drop-shadow-sm">
            Shakti Mart
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#location"
            className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-white/30 transition-all border border-white/20"
          >
            Visit Us →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[76px] bg-black/80 backdrop-blur-xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#location"
            onClick={() => setMenuOpen(false)}
            className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-white/30 transition-all border border-white/20 mt-4"
          >
            Visit Us →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
