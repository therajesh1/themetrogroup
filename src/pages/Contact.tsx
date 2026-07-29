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

export default function Contact() {
  const phone = "9867895764"
  const formattedPhone = "+91 9867895764"
  const address = "Office no A-629, Lodha Supremus II, Road No. 22, Wagle Estate, Thane"
  const whatsappUrl = `https://wa.me/919867895764?text=${encodeURIComponent("Hello Metro Group, I would like to inquire about your projects.")}`

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
              Get in Touch with<br />
              <span className="gold-text">Metro Group</span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 540, lineHeight: 1.75 }}>
              Reach out to our corporate office for site visits, project inquiries, or commercial space bookings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="responsive-section" style={{ padding: "80px 48px 120px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="grid-2-col" style={{ gap: 32 }}>
            {/* Office Address Card */}
            <FadeUp>
              <div
                style={{
                  height: "100%",
                  background: "var(--bg-card)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid var(--border-mid)",
                  borderRadius: 20,
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <div>
                  <div style={{ fontSize: 11, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>
                    Corporate Office Address
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20, lineHeight: 1.3 }}>
                    Metro Group Head Office
                  </h3>
                  <div style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32, display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>📍</span>
                    <span>{address}</span>
                  </div>
                </div>

                <div style={{ paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                    Visiting Hours: Mon - Sat: 10:00 AM - 7:00 PM
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Direct Contact Card */}
            <FadeUp delay={0.15}>
              <div
                style={{
                  height: "100%",
                  background: "var(--bg-card)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: 20,
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <div>
                  <div style={{ fontSize: 11, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>
                    Direct Support & Inquiry
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 20 }}>
                    Call or WhatsApp Us
                  </h3>

                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
                      Phone Line
                    </div>
                    <a
                      href={`tel:${phone}`}
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#D4AF37",
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span>📞</span> {formattedPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
                  {/* WhatsApp Direct Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "16px 28px",
                      background: "#25D366",
                      color: "#ffffff",
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                      textDecoration: "none",
                      borderRadius: 8,
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                      boxShadow: "0 8px 24px rgba(37, 211, 102, 0.25)",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>💬</span> Chat on WhatsApp
                  </a>

                  {/* Call Direct Button */}
                  <a
                    href={`tel:${phone}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "16px 28px",
                      background: "transparent",
                      border: "1px solid #D4AF37",
                      color: "#D4AF37",
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                      textDecoration: "none",
                      borderRadius: 8,
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span>📞</span> Call Now
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  )
}
