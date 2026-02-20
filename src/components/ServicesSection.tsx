import { useState, useEffect, useRef } from "react";

const residentialCards = [
  { icon: "🏠", title: "Concrete Driveways", body: "Engineered with proper base preparation, correct slab thickness for load demands, controlled expansion joints, and a finish calibrated to your aesthetic. Built for Oregon's freeze-thaw cycles and heavy rainfall — for decades, not years." },
  { icon: "🌿", title: "Concrete Patios & Outdoor Spaces", body: "Permanent outdoor living surfaces that add livable square footage and visual value. We handle complex grades, drainage integration, and custom edge profiles — with the same structural standard as every other project we build." },
  { icon: "✦", title: "Stamped & Decorative Concrete", body: "The visual complexity of natural stone or wood at a fraction of the long-term cost. Premium stamping systems and professional-grade colorants deliver finishes that hold their look year after year in Oregon's wet climate." },
  { icon: "🚶", title: "Sidewalks & Walkways", body: "Built to Oregon code with proper slope for drainage, clean joints, and slip-resistant finishes. Residential sidewalk replacement, new path construction, and ADA-compliant approaches — precision on every linear foot." },
  { icon: "🧱", title: "Retaining Walls", body: "Engineered for your specific site — soil composition, hydrostatic pressure, height requirements, and drainage. A retaining wall failure isn't an inconvenience; it's a structural event. We build them to prevent that." },
  { icon: "⬛", title: "Concrete Foundations", body: "Poured with attention to soil bearing capacity, rebar placement, anchor bolt positioning, and waterproofing integration. Your foundation is the single most critical element of any structure — we treat it accordingly." },
  { icon: "🚗", title: "Garage Floors & Interior Slabs", body: "Vapor barriers, steel reinforcement, control joints, and professional finishes — including polished or sealed options for workshops and living spaces. Resists cracking, moisture intrusion, and surface deterioration for decades." },
  { icon: "🪜", title: "Steps & Entryways", body: "Built with structural integrity, proper rise and run ratios, non-slip finishes, and clean lines. Concrete steps are one of the highest-liability points on a property when poorly executed. We don't cut corners here." },
];

const commercialCards = [
  { icon: "🏭", title: "Commercial Slabs & Warehouse Floors", body: "Poured to exact compressive strength specifications for forklift loads, racking systems, and heavy equipment. We work with general contractors and project owners to meet schedule and spec — without compromise." },
  { icon: "🅿️", title: "Parking Lots & Structures", body: "Concrete parking surfaces outperform asphalt in long-term cost and durability. Load distribution, proper drainage grades, and joint patterns that prevent premature cracking under constant vehicle stress." },
  { icon: "♿", title: "Commercial Sidewalks & ADA", body: "Strict ADA compliance, correct cross-slope, detectable warning surfaces, and permitting coordination — across Oregon. We handle the full process from permit application through final inspection." },
  { icon: "🔧", title: "Site Concrete & Civil Work", body: "Curb and gutter, equipment pads, loading docks, concrete barriers, and site drainage structures. Experienced working under general contractors and directly on design-build projects." },
  { icon: "🏗️", title: "Foundation Systems", body: "Precision foundation work and concrete panel support for commercial and industrial construction. Coordination with structural engineers is standard practice on every project — not an afterthought." },
  { icon: "💠", title: "Decorative Commercial Concrete", body: "Polished floors, exposed aggregate, and stamped surfaces for retail spaces, restaurants, hotel entrances, and office parks. Residential-level attention to detail at commercial scale." },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
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

  const cards = activeTab === "residential" ? residentialCards : commercialCards;

  return (
    <section
      id="services"
      style={{
        background: "hsl(220,11%,96%)",
        padding: "100px 0",
      }}
    >
      <div className="sc-container">
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: "0" }}>
          <div className="section-label section-label-dark">Full-Service Concrete</div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
              color: "hsl(240,27%,14%)",
              marginBottom: "20px",
            }}
          >
            Residential &amp; Commercial Services
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "hsl(0,0%,49%)",
              maxWidth: "680px",
              lineHeight: 1.6,
            }}
          >
            Every project — from a residential driveway to a commercial warehouse
            slab — is engineered to the same standard. No shortcuts. No cheap mix
            designs. No corners cut on base preparation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            margin: "40px 0 48px",
            borderBottom: "2px solid hsl(220,8%,91%)",
            display: "flex",
          }}
        >
          {(["residential", "commercial"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "14px 32px",
                cursor: "pointer",
                color: activeTab === tab ? "hsl(226,82%,37%)" : "hsl(0,0%,49%)",
                borderBottom: activeTab === tab ? "3px solid hsl(226,82%,37%)" : "3px solid transparent",
                marginBottom: "-2px",
                transition: "color 0.2s",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="reveal services-grid">
          {cards.map((card) => (
            <div key={card.title} className="service-card">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(17,53,167,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "hsl(222,82%,24%)",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "hsl(0,0%,49%)",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
