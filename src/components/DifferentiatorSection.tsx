import { useEffect, useRef } from "react";

const diffItems = [
  {
    num: "01",
    title: "Site Assessment Before Every Estimate",
    body: "We look at grade, drainage, soil, and access before quoting. Concrete poured on a bad base fails regardless of mix quality.",
  },
  {
    num: "02",
    title: "Commercial-Grade Mix Designs",
    body: "Calibrated to application and Oregon climate — not whatever's cheapest from the batch plant that day.",
  },
  {
    num: "03",
    title: "Documented Process",
    body: "You know what's going in the ground, in what order, and why — before the crew shows up on day one.",
  },
  {
    num: "04",
    title: "Full Licensing, Every Job",
    body: "CCB license, bonding, and insurance maintained on every project. No exceptions. This separates us from operators who disappear when problems emerge.",
  },
  {
    num: "05",
    title: "Defined Timelines. Kept.",
    body: "Your project doesn't get absorbed into a chaotic schedule. You get a defined timeline and a single point of contact from start to finish.",
  },
];

const DifferentiatorSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="differentiator"
      style={{ background: "white", padding: "100px 0" }}
    >
      <div className="sc-container">
        <div className="diff-grid">
          {/* Left Column */}
          <div ref={leftRef} className="reveal">
            <div className="section-label section-label-dark">Why Universal Concrete & Construction</div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1,
                color: "hsl(240,27%,14%)",
                marginBottom: "24px",
              }}
            >
              The Cheapest Bid Is the Most Expensive Concrete You'll Ever Buy
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Oregon has no shortage of concrete contractors. Many operate with
              used equipment, minimal licensing, and substandard mix designs. The
              bids look attractive. The problems show up 18 months later — as
              cracks running through your new driveway, retaining walls leaning
              under soil pressure, or slabs that didn't cure properly because
              placement was rushed.
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#333",
                marginBottom: "32px",
              }}
            >
              Universal Concrete & Construction is not competing on price. We compete on
              outcome. Concrete repairs and replacements cost two to three times
              more than a quality original installation.
            </p>

            {/* Dark callout */}
            <div
              style={{
                background: "hsl(222,82%,24%)",
                color: "white",
                padding: "32px 36px",
                borderRadius: "4px",
                borderLeft: "5px solid hsl(51,100%,50%)",
                fontSize: "16px",
                lineHeight: 1.7,
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              "The contractors underbidding us are cutting corners you won't see
              until it's too late. We're the contractors you call after that
              happens — or the ones you hire first to make sure it never does."
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightRef}
            className="reveal reveal-delay"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {diffItems.map((item) => (
              <div key={item.num} className="diff-item">
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "40px",
                    color: "hsl(226,82%,37%)",
                    opacity: 0.3,
                    lineHeight: 1,
                    width: "48px",
                    flexShrink: 0,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "hsl(222,82%,24%)",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "hsl(0,0%,49%)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .diff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .diff-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default DifferentiatorSection;
