import { useState, useEffect, useRef, FormEvent } from "react";

const projectTypes = [
  "Concrete Driveway",
  "Concrete Patio",
  "Stamped / Decorative Concrete",
  "Retaining Wall",
  "Foundation",
  "Sidewalk / Walkway",
  "Garage Floor / Interior Slab",
  "Commercial Slab",
  "Commercial Parking",
  "Steps & Entryway",
  "Other",
];

const timelines = ["ASAP", "Within 1 Month", "1–3 Months", "Planning Stage"];

const inputStyle: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: "15px",
  padding: "13px 16px",
  border: "1.5px solid hsl(220,8%,91%)",
  borderRadius: "4px",
  background: "white",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "hsl(0,0%,49%)",
  display: "block",
  marginBottom: "6px",
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    { icon: "📞", text: "(503) 914-8519", href: "tel:5039148519" },
    { icon: "📍", text: "Salem, Oregon — Serving All of Oregon", href: null },
    { icon: "🪪", text: "CCB Licensed #222812 · Licensed · Bonded · Insured", href: null },
    { icon: "🕐", text: "Monday – Saturday", href: null },
  ];

  return (
    <section id="contact" style={{ background: "white", padding: "100px 0" }}>
      <div className="sc-container">
        <div className="contact-grid">
          {/* Left Column */}
          <div ref={leftRef} className="reveal">
            <div className="section-label section-label-dark">Free Estimate</div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1,
                color: "hsl(240,27%,14%)",
                marginBottom: "24px",
              }}
            >
              Let's Talk About Your Project
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "hsl(0,0%,49%)",
                marginBottom: "16px",
              }}
            >
              Fill out the form and a member of our team will contact you within
              24 hours on business days. The more detail you provide, the more
              accurate our initial assessment will be.
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "hsl(0,0%,49%)",
                marginBottom: "36px",
              }}
            >
              No pressure. No obligation. Just accurate information from a
              licensed Oregon concrete contractor.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactDetails.map((detail) => (
                <div
                  key={detail.text}
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "hsl(226,82%,37%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {detail.icon}
                  </div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "hsl(222,82%,24%)",
                        textDecoration: "none",
                      }}
                    >
                      {detail.text}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "hsl(222,82%,24%)",
                      }}
                    >
                      {detail.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <div ref={rightRef} className="reveal reveal-delay">
            <div
              style={{
                background: "hsl(220,11%,96%)",
                padding: "48px 44px",
                borderRadius: "8px",
                border: "1px solid hsl(220,8%,91%)",
              }}
              className="contact-form-box"
            >
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "36px",
                  color: "hsl(222,82%,24%)",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                Request Your Free Estimate
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  color: "hsl(0,0%,49%)",
                  marginBottom: "28px",
                  lineHeight: 1.6,
                }}
              >
                No Pressure. No Obligation. Just Accurate Information From a
                Licensed Oregon Contractor.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="form-row-2" style={{ marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "hsl(226,82%,37%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(220,8%,91%)")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(503) 000-0000"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "hsl(226,82%,37%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(220,8%,91%)")
                      }
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "hsl(226,82%,37%)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "hsl(220,8%,91%)")
                    }
                  />
                </div>

                {/* Row 3 */}
                <div className="form-row-2" style={{ marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Project City/Zip *</label>
                    <input
                      type="text"
                      required
                      placeholder="Salem, OR"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "hsl(226,82%,37%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(220,8%,91%)")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Project Type *</label>
                    <select
                      required
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "hsl(226,82%,37%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(220,8%,91%)")
                      }
                    >
                      <option value="">Select type...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="form-row-2" style={{ marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Approx. Square Footage</label>
                    <input
                      type="text"
                      placeholder="If known"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "hsl(226,82%,37%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(220,8%,91%)")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Project Timeline</label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "hsl(226,82%,37%)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "hsl(220,8%,91%)")
                      }
                    >
                      <option value="">Select timeline...</option>
                      {timelines.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 5 */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle}>Project Details</label>
                  <textarea
                    placeholder="Any additional information about your project, site conditions, or specific requirements..."
                    style={{
                      ...inputStyle,
                      minHeight: "100px",
                      resize: "vertical",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "hsl(226,82%,37%)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "hsl(220,8%,91%)")
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitted}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    background: submitted ? "#16a34a" : "hsl(51,100%,50%)",
                    color: submitted ? "white" : "hsl(0,0%,4%)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "18px 36px",
                    borderRadius: "3px",
                    border: "none",
                    cursor: submitted ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    transition: "background 0.3s",
                  }}
                >
                  {submitted
                    ? "✓ Estimate Request Sent — We'll be in touch within 24 hours!"
                    : "Request My Free Estimate"}
                </button>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    color: "hsl(0,0%,49%)",
                    textAlign: "center",
                    lineHeight: 1.5,
                    marginTop: "12px",
                  }}
                >
                  We respond within 24 business hours. No spam. No aggressive
                  follow-up calls. One conversation, your timeline.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-form-box {
            padding: 32px 24px !important;
          }
        }
        @media (max-width: 560px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
