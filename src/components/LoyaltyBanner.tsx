const LoyaltyBanner = () => {
  return (
    <section className="py-20 lg:py-28 border-t-2 border-primary/20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground">
          Join the Shakti Club
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Earn points on every purchase. Get exclusive deals, early access to sales,
          and birthday rewards. It's free to join.
        </p>
        <div className="mt-8 inline-block">
          <a
            href="#"
            className="relative inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            style={{
              outline: "2px dashed hsl(6 63% 46% / 0.4)",
              outlineOffset: "6px",
            }}
          >
            Sign Up Free →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyBanner;