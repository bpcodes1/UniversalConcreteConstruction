import { useEffect, useRef } from "react";

const AuthoritySection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "The License Is Not a Formality",
      body: "CCB #222812 means full regulatory oversight, bonding, and insurance. You have legal recourse — not just a handshake. In an industry where unlicensed work quietly ruins properties, this is the most important thing you can verify before a single yard of concrete is poured.",
    },
    {
      title: "Oregon-Wide. Not Just Salem.",
      body: "We service the full state — Portland, Eugene, Medford, Bend, Corvallis, Albany, Grants Pass, Klamath Falls, Roseburg, Astoria, Salem, and everywhere between. Our logistics are built for it. Our pricing accounts for it honestly.",
    },
    {
      title: "Three Things Quality Concrete Requires",
      body: "Precision in mix design, placement, and curing. Accountability from the first call to the final walkthrough. Experience reading Oregon's climate, soil, and code requirements. Salvador's Concrete LLC delivers all three — verifiably.",
    },
  ];

  return (
    <section
      id="authority"
      style={{
        background: "hsl(222,82%,24%)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "420px",
          color: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
        className="authority-watermark"
      >
        15
      </div>

      <div className="sc-container">
        <div className="authority-grid">
          {/* Left Column */}
          <div ref={leftRef} className="reveal">
            <div className="section-label">Authority &amp; Trust</div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 5vw, 68px)",
                lineHeight: 1,
                color: "white",
                marginBottom: "28px",
              }}
            >
              What 15 Years in Oregon Concrete Actually Means
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.72)",
                marginBottom: "20px",
              }}
            >
              Most contractors pick up a mixer and call themselves professionals.
              Salvador's Concrete LLC has spent 15 years earning the right to
              say it.
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.72)",
                marginBottom: "28px",
              }}
            >
              That span of time represents hundreds of Oregon driveways that
              still look sharp after a decade of wet winters. Commercial slabs
              poured to spec for warehouses in Portland, municipal sidewalks in
              Eugene, and residential patios from Medford to Bend. It represents
              institutional knowledge about soil conditions in the Willamette
              Valley, frost-heave patterns in Central Oregon, and coastal
              exposure near Lincoln City — knowledge that no new contractor can
              fake or fast-track.
            </p>

            {/* CCB Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "hsl(51,100%,50%)",
                color: "hsl(0,0%,4%)",
                padding: "14px 24px",
                borderRadius: "3px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                Oregon CCB License #222812 — Verified
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightRef}
            className="reveal reveal-delay"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {cards.map((card) => (
              <div key={card.title} className="authority-card">
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    color: "hsl(51,100%,50%)",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .authority-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .authority-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .authority-watermark {
            font-size: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AuthoritySection;
