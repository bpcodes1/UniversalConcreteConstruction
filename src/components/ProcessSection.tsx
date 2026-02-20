import { useEffect, useRef } from "react";

const steps = [
  {
    num: "1",
    title: "Discovery & Site Visit",
    body: "We don't quote concrete work without seeing it. A site visit identifies grade, drainage, soil conditions, and access — all of which affect method and pricing.",
  },
  {
    num: "2",
    title: "Written Estimate",
    body: "Itemized by materials, labor, preparation scope, and timeline. No mystery numbers. No vague line items. Permitting requirements identified upfront.",
  },
  {
    num: "3",
    title: "Pre-Pour Preparation",
    body: "Subgrade compaction, gravel base, form setting, and rebar placement happen before a single yard arrives. The quality of prep determines the quality of the slab.",
  },
  {
    num: "4",
    title: "Pour & Placement",
    body: "Coordinated with the batch plant for correct mix design and timing. Concrete is placed efficiently, consolidated properly, screeded to grade, and finished to spec.",
  },
  {
    num: "5",
    title: "Curing & Joints",
    body: "Control joints cut at the right depth and spacing. Curing compounds applied where conditions require. This step determines how your concrete performs five years from now.",
  },
  {
    num: "6",
    title: "Final Walkthrough",
    body: "You walk the project with us. Finish, drainage, and joint placement verified against spec. Site cleaned. Direct contact for anything during the curing period.",
  },
];

const ProcessSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      style={{ background: "hsl(220,11%,96%)", padding: "100px 0" }}
    >
      <div className="sc-container">
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: "center" }}>
          <div className="section-label section-label-dark section-label-center">
            How We Work
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
              color: "hsl(240,27%,14%)",
              marginBottom: "20px",
            }}
          >
            A Professional Process, Start to Finish
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "hsl(0,0%,49%)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Every Salvador's Concrete project follows the same structured
            workflow — because quality outcomes don't happen by accident.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={gridRef}
          className="reveal process-grid"
          style={{ marginTop: "60px", position: "relative" }}
        >
          {/* Connector Line */}
          <div
            className="process-connector"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "40px",
              left: "15%",
              right: "15%",
              height: "2px",
              background:
                "linear-gradient(90deg, hsl(226,82%,37%) 0%, hsl(51,100%,50%) 100%)",
              zIndex: 0,
            }}
          />

          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                textAlign: "center",
                padding: "0 24px 40px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div className="process-circle">{step.num}</div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  color: "hsl(222,82%,24%)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "hsl(0,0%,49%)",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
          .process-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
