import { Link } from "react-router-dom"
import { useState } from "react"

const nav = [
  { group: "Explore", items: [{ label: "Properties", href: "/properties" }, { label: "About Us", href: "/about" }, { label: "Services", href: "/#services" }] },
  { group: "Company", items: [{ label: "Contact", href: "/contact" }, { label: "Careers", href: "#" }, { label: "Press", href: "#" }] },
  { group: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }, { label: "Cookie Policy", href: "#" }] },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail("") }
  }

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
        <div className="grid-4-col" style={{ marginBottom: 64 }}>
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
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 260 }}>
              Crafting extraordinary living spaces for visionaries who demand nothing less than perfection.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              {["IG", "LI", "TW", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "border-color 0.3s, color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4AF37"
                    ;(e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-subtle)"
                    ;(e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
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

        {/* Newsletter */}
        <div
          className="newsletter-card"
          style={{
            padding: "40px 48px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6, letterSpacing: "0.02em" }}>
              Stay ahead of the market
            </div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>Exclusive listings and market insights delivered privately.</div>
          </div>
          {sent ? (
            <div style={{ color: "#D4AF37", fontSize: 13, letterSpacing: "0.1em" }}>✦ Thank you — we'll be in touch.</div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form" style={{ display: "flex", gap: 0, flex: "0 0 auto" }}>
              <input
                type="email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  padding: "12px 24px",
                  background: "var(--input-bg)",
                  borderTop: "1px solid var(--input-border)",
                  borderBottom: "1px solid var(--input-border)",
                  borderLeft: "1px solid var(--input-border)",
                  borderRight: "none",
                  color: "var(--text-primary)",
                  fontSize: 13,
                  outline: "none",
                  borderRadius: "2px 0 0 2px",
                  width: 260,
                  fontFamily: "Inter",
                }}
              />
              <button
                type="submit"
                className="newsletter-button"
                style={{
                  padding: "12px 28px",
                  background: "#D4AF37",
                  border: "1px solid #D4AF37",
                  color: "#070707",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  cursor: "none",
                  borderRadius: "0 2px 2px 0",
                  textTransform: "uppercase",
                  fontFamily: "Inter",
                  whiteSpace: "nowrap",
                  transition: "background 0.3s",
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: 12, color: "var(--text-faint)", letterSpacing: "0.05em" }}>
            © 2025 Metro Group. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: "rgba(212,175,55,0.5)", letterSpacing: "0.1em" }}>
            ✦ CRAFTED FOR EXCELLENCE
          </div>
        </div>
      </div>
    </footer>
  )
}
