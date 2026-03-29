const stats = [
  { value: "5,000+", label: "Products" },
  { value: "15,000+", label: "Customers" },
  { value: "7 Days", label: "Open" },
];

const AboutStrip = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3 h-[400px] lg:h-[500px]">
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=600&fit=crop"
                alt="Inside Shakti Mart"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de940a6ed6?w=400&h=600&fit=crop"
                alt="Fresh products"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Our Story</span>
            <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground mt-4">
              Katahariya's Favourite
              <br />
              Local Mart
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-lg">
              Shakti Mart has been serving the Katahariya community with quality products at fair prices. 
              We believe in honest business — no hidden costs, no compromises. Just a clean, well-stocked 
              store where every family can find what they need. From daily use groceries to trusted household 
              brands, we're the store your neighbour recommends.
            </p>
            <hr className="my-8 border-border" />
            <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="font-serif-display italic font-bold text-2xl text-foreground">{s.value}</span>
                  <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;