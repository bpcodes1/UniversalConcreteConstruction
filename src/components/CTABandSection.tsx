import { useEffect, useRef } from "react";

const CTABandSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, hsl(var(--blue)) 0%, hsl(var(--blue-dark)) 100%)",
        padding: "120px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(200px, 30vw, 500px)",
          color: "rgba(255,255,255,0.025)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        CALL
      </div>

      <div ref={contentRef} className="sc-container reveal" style={{ position: "relative", zIndex: 2 }}>
        <p className="section-label section-label-center">Get Started Today</p>
        <h2
          className="font-bebas"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            color: "white",
            marginBottom: "20px",
          }}
        >
          Oregon's Trusted Concrete Contractor
        </h2>
        <p
          className="font-barlow"
          style={{
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "600px",
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          You have a project. You need a contractor who shows up, does the work correctly, and stands
          behind it. That's not a complicated ask — but in this industry, it's harder to find than it
          should be.
        </p>

        <a
          href="tel:5039322466"
          className="font-bebas"
          style={{
            fontSize: "clamp(48px, 6vw, 80px)",
            color: "hsl(var(--yellow))",
            letterSpacing: "3px",
            display: "block",
            marginBottom: "32px",
            textDecoration: "none",
          }}
        >
          (503) 932-2466
        </a>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="tel:5039322466" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Now
          </a>
          <a href="#contact" className="btn-white">
            Request Free Estimate
          </a>
        </div>

        <p
          className="font-barlow-condensed"
          style={{
            marginTop: "20px",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Mon–Sat · No Emergency Services · Response Within 24 Hours
        </p>
      </div>
    </section>
  );
};

export default CTABandSection;
