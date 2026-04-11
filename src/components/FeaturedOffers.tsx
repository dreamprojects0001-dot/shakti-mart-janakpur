const hotDeals = [
  {
    name: "Ice Cream",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&h=375&fit=crop",
    tag: "🔥 Hot Deal",
  },
  {
    name: "Fresh Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=375&fit=crop",
    tag: "🔥 Hot Deal",
  },
  {
    name: "Dairy Items",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&h=375&fit=crop",
    tag: "🔥 Hot Deal",
  },
];

const FeaturedOffers = () => {
  return (
    <section id="offers" className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground">
            This Week's Hot Deals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotDeals.map((item) => (
            <div key={item.name} className="card-lift bg-card rounded-lg border border-border overflow-hidden">
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-foreground text-lg">{item.name}</h3>
              </div>
            </div>
          ))}
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