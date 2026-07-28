import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Group of Companies and Businesses", href: "/group-of-companies" },
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { mode, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 80,
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(16px, 4vw, 48px)",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
        transition: "background 0.5s, backdrop-filter 0.5s, border-color 0.5s",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", flex: "0 0 auto", display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="/metrogrplogo.png"
          alt="Metro Group"
          style={{ height: 40, width: "auto", objectFit: "contain" }}
        />
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 700, letterSpacing: "0.2em", color: "var(--text-primary)", fontFamily: "Inter" }}>
            METRO GROUP
          </div>
          <div style={{ fontSize: 8, letterSpacing: "0.35em", color: "#D4AF37", marginTop: 4, fontWeight: 500 }}>
            PALATIAL LIFESTYLE
          </div>
        </div>
      </Link>

      {/* Center nav */}
      <div
        className="hidden-mobile"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 48,
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            style={{
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: "0.15em",
              color: location.pathname === link.href ? "#D4AF37" : "var(--text-secondary)",
              transition: "color 0.3s",
              fontWeight: location.pathname === link.href ? 600 : 400,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Theme Toggle & Right CTA */}
      <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
        <ThemeToggle mode={mode} toggle={toggle} />

        {/* CTA Desktop */}
        <div className="hidden-mobile">
          <Link to="/contact" style={{ textDecoration: "none", flex: "0 0 auto", marginLeft: 16 }}>
            <button
              style={{
                padding: "11px 28px",
                background: "#D4AF37",
                border: "1px solid #D4AF37",
                color: "#070707",
                fontSize: 11,
                letterSpacing: "0.2em",
                fontWeight: 700,
                cursor: "none",
                borderRadius: 2,
                textTransform: "uppercase",
                fontFamily: "Inter",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 4px 15px rgba(212,175,55,0.25)",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget
                b.style.background = "#f0d060"
                b.style.borderColor = "#f0d060"
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget
                b.style.background = "#D4AF37"
                b.style.borderColor = "#D4AF37"
              }}
            >
              Enquiry
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="show-mobile"
          aria-label="Toggle navigation menu"
          style={{
            marginLeft: 16,
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: i === 1 ? "#D4AF37" : "var(--text-primary)",
                borderRadius: 1,
                transition: "transform 0.3s, opacity 0.3s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 80,
            left: 0,
            right: 0,
            background: "var(--nav-bg)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: location.pathname === link.href ? "#D4AF37" : "var(--text-primary)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", marginTop: 8 }}>
            <button
              style={{
                width: "100%",
                padding: "14px 24px",
                background: "#D4AF37",
                border: "none",
                color: "#070707",
                fontSize: 12,
                letterSpacing: "0.2em",
                fontWeight: 700,
                borderRadius: 2,
                textTransform: "uppercase",
              }}
            >
              Enquiry
            </button>
          </Link>
        </div>
      )}
    </motion.header>
  )
}

/* ─── TOGGLE BUTTON ──────────────────────────────────────────── */
function ThemeToggle({ mode, toggle }: { mode: "dark" | "light"; toggle: () => void }) {
  const isDark = mode === "dark"
  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        position: "relative",
        width: 52,
        height: 28,
        borderRadius: 14,
        background: isDark ? "rgba(212,175,55,0.15)" : "rgba(212,175,55,0.25)",
        border: "1px solid rgba(212,175,55,0.4)",
        cursor: "none",
        padding: 0,
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        transition: "background 0.4s, border-color 0.4s",
        marginLeft: 8,
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.8)" }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.4)" }}
    >
      {/* Track icons */}
      <span style={{ position: "absolute", left: 7, fontSize: 10, opacity: isDark ? 0.4 : 0, transition: "opacity 0.3s", userSelect: "none" }}>☀</span>
      <span style={{ position: "absolute", right: 7, fontSize: 10, opacity: isDark ? 1 : 0, transition: "opacity 0.3s", userSelect: "none" }}>☽</span>
      {/* Thumb */}
      <span
        style={{
          position: "absolute",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#D4AF37",
          left: isDark ? 26 : 4,
          transition: "left 0.35s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          color: "#070707",
        }}
      >
        {isDark ? "☽" : "☀"}
      </span>
    </button>
  )
}
