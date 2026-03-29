const features = [
  { num: "01", title: "Best Prices", desc: "Competitive prices on every product, every day. No gimmicks, just honest value." },
  { num: "02", title: "Genuine Products", desc: "Every item is verified and sourced from trusted brands and local suppliers." },
  { num: "03", title: "Friendly Staff", desc: "Our team knows your name. Warm, helpful service that makes shopping easy." },
  { num: "04", title: "Wide Selection", desc: "From fresh produce to electronics — 5,000+ products under one roof." },
];

const ValueProps = () => {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map((f) => (
            <div key={f.num}>
              <span className="font-serif-display italic text-4xl text-primary/30 block mb-4">{f.num}</span>
              <h3 className="font-semibold text-base text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;