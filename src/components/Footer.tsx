import { Link } from "react-router-dom"

const nav = [
  { group: "Explore", items: [{ label: "Properties", href: "/properties" }, { label: "About Us", href: "/about" }, { label: "Services", href: "/#services" }] },
  { group: "Company", items: [{ label: "Contact", href: "/contact" }] },
]

export default function Footer() {
  return (
    <footer
      className="responsive-section"
      style={{
        background: "var(--bg-page)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "80px 48px 48px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top row */}
        <div className="grid-3-col" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <img
                src="/metrogrplogo.png"
                alt="Metro Group"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.24em", color: "var(--text-primary)" }}>METRO GROUP</div>
                <div style={{ fontSize: 8, letterSpacing: "0.45em", color: "#D4AF37", marginTop: 4 }}>PALATIAL LIFESTYLE</div>
              </div>
            </Link>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 280 }}>
              Crafting extraordinary living spaces for visionaries who demand nothing less than perfection.
            </p>
          </div>

          {/* Nav groups */}
          {nav.map((group) => (
            <div key={group.group}>
              <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase", marginBottom: 24 }}>
                {group.group}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    style={{
                      textDecoration: "none",
                      fontSize: 13,
                      color: "var(--text-muted)",
                      transition: "color 0.3s",
                      letterSpacing: "0.02em",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.05em" }}>
            © 2026 Metro Group. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: "rgba(212,175,55,0.5)", letterSpacing: "0.1em" }}>
            ✦ CRAFTED FOR EXCELLENCE
          </div>
        </div>
      </div>
    </footer>
  )
}
