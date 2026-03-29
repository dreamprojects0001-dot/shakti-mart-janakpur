const LocationHours = () => {
  return (
    <section id="location" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Details */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Find Us</span>
            <h2 className="font-serif-display italic font-bold text-3xl lg:text-4xl text-foreground mt-4">
              Visit Our Store
            </h2>
            <div className="mt-8 space-y-5 text-sm">
              <div>
                <h4 className="font-semibold text-foreground">Address</h4>
                <p className="text-muted-foreground mt-1">Katahariya-9, Rautahat, Nepal</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Hours</h4>
                <p className="text-muted-foreground mt-1">7:30 AM – 8:30 PM · Open 7 days a week</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground mt-1">9820064964</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/7rTAKXiF4DkY4cyx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-primary font-medium text-sm hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Map */}
          <div className="rounded-lg border border-border overflow-hidden" style={{ filter: "sepia(0.3) contrast(1.1)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28534.81511423776!2d85.9059!3d26.7288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec6556fcff7e3d%3A0x29e739c0e1a06e7a!2sJanakpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shakti Mart Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;