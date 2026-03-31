import { ChevronDown } from "lucide-react";
import heroStoreBg from "@/assets/hero-store.png";

const categories = [
  "Daily Use Groceries",
  "Dairy & Bakery",
  "Household Care",
  "Snacks & Beverages",
  "Personal Care",
  "Ice Creams",
  "Spices & Grains",
  "Frozen Foods",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStoreBg}
          alt="Shakti Mart Store"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
        <h1 className="font-serif-display italic font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
          <span className="bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent drop-shadow-lg">
            Everything you need,
          </span>
          <br />
          <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(6,80%,65%)] to-[hsl(40,90%,70%)] bg-clip-text text-transparent">
            closer than you think.
          </span>
        </h1>
        <p className="text-white/80 text-base lg:text-lg max-w-lg leading-relaxed mt-6">
          Katahariya's trusted neighbourhood supermart — quality groceries,
          household essentials, and everyday products at the best prices.
        </p>
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <a
            href="#categories"
            className="bg-primary text-primary-foreground font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            Explore Products
          </a>
          <a
            href="#location"
            className="border border-white/30 text-white font-medium px-7 py-3 rounded-full hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
          >
            Our Location
          </a>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-scroll-dot" />
        </div>
      </div>

      {/* Ticker strip */}
      <div className="relative z-10 bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...categories, ...categories].map((cat, i) => (
            <span key={i} className="mx-8 text-sm font-medium tracking-wide uppercase">
              {cat} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
