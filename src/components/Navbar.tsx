import { useState, useEffect } from "react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif-display italic font-bold text-2xl text-foreground">
          Shakti Mart
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#location"
            className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
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
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-card transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#location"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity mt-4"
          >
            Visit Us →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;