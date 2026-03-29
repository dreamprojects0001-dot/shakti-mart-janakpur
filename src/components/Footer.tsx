const quickLinks = ["Shop", "Offers", "About", "Find Store", "Shakti Club"];
const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-serif-display italic font-bold text-2xl text-card">Shakti Mart</span>
            <p className="text-footer-muted text-sm mt-3 leading-relaxed">
              सबैको पसल — Everyone's store.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-footer-muted hover:text-footer-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-footer-muted hover:text-footer-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm text-card mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm text-card mb-4">Contact</h4>
            <ul className="space-y-2.5 text-footer-muted text-sm">
              <li>Janakpur, Madhesh Pradesh</li>
              <li>Nepal</li>
              <li>+977-41-XXXXXX</li>
              <li>info@shaktimart.com.np</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-footer-muted text-xs">© 2026 Shakti Mart. All rights reserved.</p>
          <p className="text-footer-muted text-xs">Made with love in Janakpur ♥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;