import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "Is Aaron Allen Hulst licensed and insured in Oregon?",
    a: "Yes. We operate under Oregon CCB License #222812. Fully licensed, bonded, and insured on every project we accept. You can verify our license status directly at the Oregon CCB website at any time.",
  },
  {
    q: "What areas of Oregon do you serve?",
    a: "We serve all of Oregon — Salem, Portland, Eugene, Medford, Bend, Corvallis, Albany, Grants Pass, Klamath Falls, Roseburg, Astoria, and every community between them. Distance is factored into our estimates transparently.",
  },
  {
    q: "How long does a concrete driveway or patio project take?",
    a: "Preparation typically takes one to two days depending on scope. The pour itself is usually completed in a single day. Concrete requires a curing period of at least 7 days before foot traffic and 28 days before heavy vehicle use. We provide a complete timeline projection with your estimate.",
  },
  {
    q: "Why is concrete better than asphalt or pavers for my driveway?",
    a: "Concrete driveways in Oregon typically last 30 to 50 years with minimal maintenance, compared to 15 to 20 years for asphalt requiring periodic sealing and repaving. Pavers can shift and settle in Oregon's wet soil conditions. Concrete provides a stable, permanent surface that increases property value.",
  },
  {
    q: "How much does a concrete project cost in Oregon?",
    a: "Costs vary based on project size, complexity, site conditions, and mix specifications. Residential concrete driveways commonly range from $8 to $18 per square foot depending on preparation requirements and finish type. Decorative and stamped concrete carries a premium. We provide itemized, written estimates — you'll know exactly what you're paying for and why.",
  },
  {
    q: "What happens if my concrete cracks?",
    a: "All concrete cracks eventually — the goal is to control where and how. We install control joints strategically to direct natural cracking to predetermined locations where it won't affect structural integrity or aesthetics. Cracking resulting from improper base preparation, inadequate joint spacing, or incorrect mix design is a workmanship failure. That's exactly what our process is designed to prevent.",
  },
  {
    q: "Do you offer stamped or decorative concrete?",
    a: "Yes. Stamped concrete, exposed aggregate, broom finish, salt finish, and colored concrete are all available. Decorative options are discussed and selected prior to project start. We show samples and discuss expected long-term performance in Oregon's climate before you commit to a finish type.",
  },
  {
    q: "Can you work with my general contractor or builder?",
    a: "Yes. We work on commercial and residential projects as a concrete subcontractor under general contractors, as well as directly with property owners. We coordinate schedules, meet project spec documentation requirements, and work within professional project management frameworks.",
  },
  {
    q: "Can you replace or repair an existing concrete surface?",
    a: "Yes. We assess existing surfaces and determine whether repair is structurally sound or whether full replacement delivers better long-term value. We'll give you an honest assessment — not whatever generates the larger job.",
  },
  {
    q: "How do I know my project will be completed on schedule?",
    a: "We commit to a project timeline in writing before work begins. Oregon weather can create legitimate delays — concrete should not be placed in sustained rain or freezing conditions. When weather creates delays, we notify you promptly and reset the schedule. We don't overbook our crews at the expense of your project's timeline.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      style={{
        background: "hsl(222,82%,24%)",
        padding: "100px 0",
      }}
    >
      <div className="sc-container">
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div className="section-label" style={{ justifyContent: "flex-start" }}>
            FAQ
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
              color: "white",
              marginBottom: "16px",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
            }}
          >
            Real questions. Direct answers.
          </p>
        </div>

        {/* Accordion */}
        <div ref={sectionRef} className="reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "24px 0",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: openIndex === i ? "hsl(51,100%,50%)" : "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  letterSpacing: "0.3px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== i)
                    e.currentTarget.style.color = "hsl(51,100%,50%)";
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== i) e.currentTarget.style.color = "white";
                }}
              >
                <span>{faq.q}</span>
                <span className={`faq-icon${openIndex === i ? " open" : ""}`}>
                  +
                </span>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: "0 0 24px",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: "820px",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
