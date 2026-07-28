import { useState } from "react"
import { motion } from "framer-motion"

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function GoldLine() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div style={{ width: 32, height: 1, background: "#D4AF37" }} />
      <div style={{ width: 5, height: 5, background: "#D4AF37", transform: "rotate(45deg)" }} />
    </div>
  )
}

const offices = [
  { city: "Beverly Hills", address: "9200 Wilshire Blvd, Suite 800", phone: "+1 (310) 888 9200", email: "bh@lumiere-estates.com" },
  { city: "New York", address: "432 Park Avenue, 58th Floor", phone: "+1 (212) 888 4320", email: "ny@lumiere-estates.com" },
  { city: "Miami", address: "1111 Brickell Bay Drive, Ste 3200", phone: "+1 (305) 888 1111", email: "mia@lumiere-estates.com" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "16px 20px",
    background: "var(--input-bg)",
    border: `1px solid ${focused === field ? "rgba(212,175,55,0.5)" : "var(--input-border)"}`,
    borderRadius: 4,
    color: "var(--text-primary)",
    fontSize: 14,
    fontFamily: "Inter",
    outline: "none",
    transition: "border-color 0.3s",
    resize: "none" as const,
    boxSizing: "border-box" as const,
  })

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ position: "relative", padding: "100px 48px 80px", background: "var(--bg-surface)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <img src="https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=1600&h=500&fit=crop&auto=format" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--overlay-hero)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <GoldLine />
            <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.04, color: "var(--text-primary)", marginBottom: 20 }}>
              Begin Your<br />
              <span className="gold-text">Consultation</span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 500, lineHeight: 1.75 }}>
              Our team is available exclusively by private appointment. Share your vision and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="responsive-section" style={{ padding: "80px 48px 120px" }}>
        <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto", alignItems: "start" }}>
          {/* Form */}
          <FadeUp>
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(24px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 20,
                padding: "clamp(24px, 5vw, 56px)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div className="gold-text" style={{ fontSize: 56, marginBottom: 24 }}>✦</div>
                  <h3 style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>Thank You</h3>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                    Your consultation request has been received. A member of our team will contact you privately within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, letterSpacing: "-0.01em" }}>Private Consultation Request</h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 40, lineHeight: 1.6 }}>All information is held in strict confidence.</p>

                  <div className="grid-2-col" style={{ gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: "#D4AF37", marginBottom: 8, textTransform: "uppercase" }}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("name")}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: "#D4AF37", marginBottom: 8, textTransform: "uppercase" }}>Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("phone")}
                        placeholder="+1 (000) 000 0000"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: "#D4AF37", marginBottom: 8, textTransform: "uppercase" }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: "#D4AF37", marginBottom: 8, textTransform: "uppercase" }}>Primary Interest</label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      onFocus={() => setFocused("interest")}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle("interest"), appearance: "none" as const }}
                    >
                      <option value="" style={{ background: "var(--bg-card)" }}>Select a service...</option>
                      <option value="purchase" style={{ background: "var(--bg-card)" }}>Property Purchase</option>
                      <option value="architecture" style={{ background: "var(--bg-card)" }}>Luxury Architecture</option>
                      <option value="investment" style={{ background: "var(--bg-card)" }}>Investment Consulting</option>
                      <option value="interior" style={{ background: "var(--bg-card)" }}>Interior Design</option>
                      <option value="management" style={{ background: "var(--bg-card)" }}>Property Management</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 40 }}>
                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: "#D4AF37", marginBottom: 8, textTransform: "uppercase" }}>Your Vision</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("message")}
                      placeholder="Describe your ideal property or project..."
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "18px",
                      background: "#D4AF37",
                      border: "none",
                      color: "#070707",
                      fontSize: 12,
                      letterSpacing: "0.25em",
                      fontWeight: 700,
                      cursor: "none",
                      borderRadius: 4,
                      textTransform: "uppercase",
                      fontFamily: "Inter",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f0d060" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#D4AF37" }}
                  >
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Sidebar */}
          <FadeUp delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Image */}
              <div style={{ borderRadius: 16, overflow: "hidden", height: 260, background: "var(--bg-surface)" }}>
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop&auto=format"
                  alt="Our office"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Offices */}
              {offices.map((o) => (
                <div
                  key={o.city}
                  style={{
                    padding: "28px 32px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 11, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase", marginBottom: 12 }}>
                    {o.city}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{o.address}</div>
                  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
                    <a href={`tel:${o.phone}`} style={{ fontSize: 13, color: "var(--text-primary)", textDecoration: "none", letterSpacing: "0.02em" }}>{o.phone}</a>
                    <a href={`mailto:${o.email}`} style={{ fontSize: 12, color: "rgba(212,175,55,0.7)", textDecoration: "none" }}>{o.email}</a>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div style={{
                padding: "28px 32px",
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: 12,
              }}>
                <div style={{ fontSize: 11, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase", marginBottom: 14 }}>
                  Private Hours
                </div>
                {[["Monday — Friday", "9:00 AM – 7:00 PM"], ["Saturday", "By Appointment"], ["Sunday", "Closed"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                    <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{d}</span>
                    <span style={{ fontSize: 13, color: "var(--text-primary)" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
