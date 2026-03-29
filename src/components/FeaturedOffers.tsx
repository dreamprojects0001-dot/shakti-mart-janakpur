const products = [
  {
    name: "Dhara Mustard Oil (1L)",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=375&fit=crop",
    original: 320,
    sale: 265,
  },
  {
    name: "Masoor Dal — Red Lentils (1kg)",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=375&fit=crop",
    original: 180,
    sale: 145,
  },
  {
    name: "Basmati Rice — Premium (5kg)",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=375&fit=crop",
    original: 850,
    sale: 699,
  },
];

const FeaturedOffers = () => {
  return (
    <section id="offers" className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground">
            This Week's Picks
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const savings = Math.round(((p.original - p.sale) / p.original) * 100);
            return (
              <div key={p.name} className="card-lift bg-card rounded-lg border border-border overflow-hidden">
                <div className="relative" style={{ aspectRatio: "4/3" }}>
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    Save {savings}%
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-foreground">{p.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-muted-foreground line-through text-sm">रू {p.original}</span>
                    <span className="text-primary font-bold text-lg">रू {p.sale}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="text-primary font-medium text-sm hover:underline">
            View All Deals →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffers;