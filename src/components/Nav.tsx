import { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#differentiator" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          height: scrolled ? "60px" : "72px",
          background: scrolled
            ? "rgba(10,37,112,1)"
            : "rgba(10,37,112,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "2px solid rgba(255,215,0,0.3)",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "height 0.3s, background 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            letterSpacing: "2px",
            color: "white",
            textDecoration: "none",
          }}
        >
          UNIVERSAL CONCRETE{" "}
          <span style={{ color: "hsl(51,100%,50%)" }}>& CONSTRUCTION</span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "32px" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "hsl(51,100%,50%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "hsl(0,0%,4%)",
              background: "hsl(51,100%,50%)",
              padding: "10px 22px",
              borderRadius: "3px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e6c200";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "hsl(51,100%,50%)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "white",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: scrolled ? "60px" : "72px",
            left: 0,
            right: 0,
            zIndex: 899,
            background: "hsl(222,82%,24%)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-primary"
            style={{ justifyContent: "center" }}
          >
            Free Estimate
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Nav;
