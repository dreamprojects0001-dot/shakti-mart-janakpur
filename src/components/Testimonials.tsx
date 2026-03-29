const reviews = [
  {
    text: "I've been shopping at Shakti Mart for over two years now. The prices are always fair and the staff remembers my usual order. It feels like home.",
    name: "Sunita Devi",
    area: "Ramanand Chowk",
  },
  {
    text: "Finally a store in Janakpur that's clean, well-organized, and has everything in stock. My kids love going there for snacks after school.",
    name: "Rajesh Kumar Jha",
    area: "Bhanu Chowk",
  },
  {
    text: "Best mustard oil prices in the city. I compared everywhere. Shakti Mart is genuinely affordable — and the quality is excellent.",
    name: "Meena Kumari",
    area: "Station Road",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-lg p-6 ${i === 1 ? "md:mt-8" : ""}`}
            >
              <span className="font-serif-display italic text-5xl text-primary/40 leading-none block mb-4">"</span>
              <p className="italic text-foreground/80 leading-relaxed text-sm">{r.text}</p>
              <div className="mt-6">
                <p className="font-medium text-sm text-foreground">{r.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{r.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;