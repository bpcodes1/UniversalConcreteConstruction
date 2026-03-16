import heroBg from "../assets/hero-concrete.jpg";

const HeroSection = () => {
  const trustItems = [
    "15+ Years in Oregon",
    "CCB Licensed #222812",
    "Fully Bonded & Insured",
    "Statewide Service",
    "Residential & Commercial",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "hsl(0,0%,4%)",
        overflow: "hidden",
      }}
    >
      {/* Layer 0 — Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Layer 1 — Gradient + noise overlay */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, rgba(17,53,167,0.88) 0%, rgba(10,10,20,0.82) 60%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 2 — Grid texture */}
      <div
        className="hero-texture"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.015) 59px, rgba(255,255,255,0.015) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.015) 59px, rgba(255,255,255,0.015) 60px)
          `,
        }}
      />

      {/* Layer 3 — Yellow accent line */}
      <div
        className="hero-accent"
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #FFD700, transparent 60%)",
          zIndex: 3,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "140px 80px 80px",
          maxWidth: "900px",
        }}
        className="hero-content"
      >
        {/* Eyebrow */}
        <p
          className="hero-fade-1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "4px",
            color: "hsl(51,100%,50%)",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Licensed · Bonded · Insured · CCB #222812 · Salem, Oregon
        </p>

        {/* H1 */}
        <h1
          className="hero-fade-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(60px, 8vw, 110px)",
            lineHeight: 0.95,
            color: "white",
            letterSpacing: "2px",
            marginBottom: "28px",
          }}
        >
          Oregon's Concrete
          <br />
          Done Right.
          <br />
          <em
            style={{
              fontStyle: "normal",
              color: "hsl(51,100%,50%)",
            }}
          >
            First Time.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          className="hero-fade-3"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.78)",
            maxWidth: "620px",
            marginBottom: "48px",
          }}
        >
          Residential &amp; commercial concrete built to last decades — not just
          pass inspection. Serving all of Oregon for 15+ years with licensed,
          bonded craftsmanship that holds up to the Pacific Northwest's demands.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-fade-4 hero-cta-row"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <a href="tel:5039322466" className="btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call (503) 932-2466
          </a>
          <a href="#contact" className="btn-ghost">
            Get a Free Estimate
          </a>
        </div>
      </div>

      {/* Trust Bar */}
      <div
        className="trust-bar hero-fade-5"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255,215,0,0.08)",
          borderTop: "1px solid rgba(255,215,0,0.2)",
          padding: "16px 80px",
          display: "flex",
          gap: "48px",
          flexWrap: "wrap",
          zIndex: 4,
        }}
      >
        {trustItems.map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "hsl(51,100%,50%)",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-content {
            padding: 120px 24px 220px !important;
          }
          .trust-bar {
            padding: 16px 24px !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 560px) {
          .hero-content {
            padding: 120px 24px 320px !important;
          }
          .hero-content h1 {
            font-size: 54px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
          }
          .hero-cta-row a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
