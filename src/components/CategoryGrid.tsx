const categories = [
  { name: "Daily Use Groceries", count: "800+ items", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=450&fit=crop" },
  { name: "Dairy & Bakery", count: "400+ items", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=450&fit=crop" },
  { name: "Household Care", count: "600+ items", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&h=450&fit=crop" },
  { name: "Snacks & Beverages", count: "1,200+ items", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=450&fit=crop" },
  { name: "Personal Care", count: "500+ items", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=450&fit=crop" },
  { name: "Ice Creams", count: "300+ items", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=450&fit=crop" },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground">
            Browse by Category
          </h2>
          <p className="text-muted-foreground mt-3">5,000+ products across every aisle.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="card-lift group relative overflow-hidden rounded-lg border border-border"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
              />
              <div className="absolute inset-0 bg-card/60 transition-all duration-500 group-hover:bg-card/40" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 group-hover:translate-y-[-4px]">
                <h3 className="font-serif-display italic text-xl text-foreground">{cat.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{cat.count}</p>
                <span className="text-primary text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 block">
                  Shop now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;