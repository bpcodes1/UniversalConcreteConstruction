import { useEffect, useRef } from "react";

const objections = [
  {
    q: "Your price is higher than other bids I received.",
    a: "It probably is. That price difference buys you: proper base preparation instead of concrete poured on inadequate subgrade; commercial-grade mix design instead of the cheapest available batch; a fully licensed and insured crew with accountability. Concrete repairs and replacements cost two to three times more than a quality original installation. The lower bid is only cheaper until it isn't.",
  },
  {
    q: "How long will this actually take?",
    a: "We give you a start date and completion window before you sign anything. Oregon's weather creates legitimate scheduling constraints — concrete cannot be properly poured in sustained rain. We build that into the timeline and tell you upfront. What we won't do is give you a vague answer and hope for the best.",
  },
  {
    q: "I've hired contractors who disappeared mid-project.",
    a: "This is the most legitimate fear in any trade. Our CCB license means there's a regulatory body with oversight over our work. Our 15-year operating history in Oregon means we have a reputation and a business to protect. Don't take our word for it — ask for references and call them.",
  },
  {
    q: "Do I need a permit for my project?",
    a: "It depends on project type and jurisdiction. Retaining walls above certain heights, foundation work, and some commercial projects require permits. We know Oregon's permitting landscape and identify requirements during the estimate. We will not start work that requires a permit without confirming it's been pulled.",
  },
];

const ObjectionsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="objections" style={{ background: "hsl(var(--white))", padding: "100px 0" }}>
      <div className="sc-container">
        <div ref={headerRef} className="reveal">
          <p className="section-label section-label-dark">Straight Answers</p>
          <h2
            className="font-bebas"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.05,
              color: "hsl(var(--text))",
              marginBottom: "16px",
            }}
          >
            The Questions Every Smart Homeowner Asks
          </h2>
          <p
            className="font-barlow"
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "hsl(var(--gray))",
              marginBottom: "48px",
            }}
          >
            We'd rather answer your toughest questions now than leave you guessing.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal reveal-delay"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "24px",
          }}
        >
          {objections.map((obj, i) => (
            <div key={i} className="objection-card">
              <p
                className="font-barlow-condensed"
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "hsl(var(--blue))",
                  marginBottom: "12px",
                  letterSpacing: "0.3px",
                }}
              >
                &ldquo;{obj.q}&rdquo;
              </p>
              <p
                className="font-barlow"
                style={{ fontSize: "14px", lineHeight: 1.75, color: "#444" }}
              >
                {obj.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
