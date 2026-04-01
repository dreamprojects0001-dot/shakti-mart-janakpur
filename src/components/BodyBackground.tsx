const BodyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Floating gradient orbs */}
      <div className="body-orb body-orb-1" />
      <div className="body-orb body-orb-2" />
      <div className="body-orb body-orb-3" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 body-grid-overlay" />
    </div>
  );
};

export default BodyBackground;
