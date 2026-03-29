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

const heroImages = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?w=400&h=500&fit=crop",
];

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-0 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 lg:py-20">
        {/* Left */}
        <div className="lg:w-[55%] space-y-8">
          <h1 className="font-serif-display italic font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Everything you need,
            <br />
            closer than you think.
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-lg leading-relaxed">
            Katahariya's trusted neighbourhood supermart — quality groceries, household essentials, and everyday products at the best prices.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#categories"
              className="bg-primary text-primary-foreground font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Explore Products
            </a>
            <a
              href="#location"
              className="border border-foreground/20 text-foreground font-medium px-7 py-3 rounded-full hover:bg-foreground/5 transition-colors text-sm"
            >
              Our Location
            </a>
          </div>
        </div>

        {/* Right — image grid */}
        <div className="lg:w-[45%] grid grid-cols-2 gap-3 w-full max-w-md lg:max-w-none">
          <div className="space-y-3">
            <div className="border border-border rounded-lg overflow-hidden aspect-[4/5]">
              <img src={heroImages[0]} alt="Fresh groceries" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="border border-border rounded-lg overflow-hidden aspect-[4/3]">
              <img src={heroImages[1]} alt="Dairy products" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-3 pt-8">
            <div className="border border-border rounded-lg overflow-hidden aspect-[4/3]">
              <img src={heroImages[2]} alt="Household items" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="border border-border rounded-lg overflow-hidden aspect-[4/5]">
              <img src={heroImages[3]} alt="Fresh produce" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
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