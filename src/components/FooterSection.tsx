const FooterSection = () => {
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Aaron Allen Hulst", href: "#differentiator" },
    { label: "Our Process", href: "#process" },
    { label: "Common Questions", href: "#objections" },
    { label: "Full FAQ", href: "#faq" },
    { label: "Free Estimate", href: "#contact" },
  ];

  const serviceAreas = [
    "Salem · Portland · Eugene",
    "Medford · Bend · Corvallis",
    "Albany · Grants Pass",
    "Klamath Falls · Roseburg",
    "Astoria · Lincoln City",
    "And all of Oregon",
  ];

  const footerLinkStyle: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "14px",
    color: "rgba(255,255,255,0.45)",
    textDecoration: "none",
    display: "block",
    transition: "color 0.2s",
    lineHeight: 2,
  };

  return (
    <footer style={{ background: "#0a0a0a", padding: "72px 0 40px" }}>
      <div className="sc-container">
        {/* 4-column grid */}
        <div className="footer-grid" style={{ marginBottom: "56px" }}>
          {/* Column 1 — Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "24px",
                color: "white",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              SALVADOR'S{" "}
              <span style={{ color: "hsl(51,100%,50%)" }}>CONCRETE</span> LLC
            </div>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Oregon's trusted concrete contractor for 15+ years. Licensed,
              bonded, and insured on every project across the state — from
              residential driveways in Salem to commercial slabs in Portland.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,215,0,0.1)",
                border: "1px solid rgba(255,215,0,0.3)",
                padding: "8px 16px",
                borderRadius: "3px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "hsl(51,100%,50%)",
              }}
            >
              ✓ CCB License #222812
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={footerLinkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "hsl(51,100%,50%)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Service Areas
            </h4>
            <div>
              {serviceAreas.map((area) => (
                <p
                  key={area}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "14px",
                    lineHeight: 2,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {area}
                </p>
              ))}
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Contact
            </h4>
            <a
              href="tel:5039322466"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "32px",
                color: "hsl(51,100%,50%)",
                letterSpacing: "2px",
                textDecoration: "none",
                display: "block",
                marginBottom: "12px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e6c200")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(51,100%,50%)")
              }
            >
              (503) 932-2466
            </a>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "16px",
                lineHeight: 1.6,
              }}
            >
              Monday – Saturday
              <br />
              No Emergency Services
            </p>
            <a
              href="#contact"
              style={{
                display: "flex",
                justifyContent: "center",
                background: "hsl(51,100%,50%)",
                color: "hsl(0,0%,4%)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "12px 20px",
                borderRadius: "3px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e6c200")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "hsl(51,100%,50%)")
              }
            >
              Free Estimate
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2025 Salvador's Concrete LLC. All Rights Reserved. | Licensed
            Concrete Contractor in Oregon | CCB #222812
          </p>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Salem, Oregon — Serving All of Oregon
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr;
          gap: 48px;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;
