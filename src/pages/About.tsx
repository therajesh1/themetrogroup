import { motion } from "framer-motion"

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
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

export default function About() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeUp>
            <GoldLine />
            <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.04, color: "var(--text-primary)", maxWidth: 640 }}>
              The Art of<br />
              <span className="gold-text">Living Well</span>
            </h1>
            <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.75, marginTop: 24 }}>
              Metro Group is the singular address for clients who expect their residence to be a masterpiece.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="responsive-section" style={{ padding: "120px 48px", background: "var(--bg-surface)" }}>
        <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto", alignItems: "center" }}>
          <FadeUp>
            <GoldLine />
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: 32 }}>
              Built on a Simple Belief:<br />Extraordinary Is the<br />
              <span className="gold-text">Only Standard</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 24 }}>
              Metro Group was founded on the principle that a residence of true distinction requires more than skilled architects — it demands a philosophy that treats every material choice, every proportion, every threshold as an opportunity for beauty.
            </p>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.85 }}>
              Over the years we've assembled a team of specialists — architects, interior designers, landscape artists, and investment strategists — unified by a shared intolerance for the mediocre. Our clients are not buying square footage. They are commissioning a legacy.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.3)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop"
                  alt="Metro Group Estate"
                  style={{ width: "100%", height: 500, objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Leadership Profile — MAHESH A. GALA */}
      <section className="responsive-section" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeUp>
            <div className="leadership-grid-layout">
              {/* Left Photo */}
              <div className="leadership-photo-container" style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "1px solid var(--border-mid)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
                    background: "var(--bg-card)",
                  }}
                >
                  <img
                    src="/mahesh_gala.jpg"
                    alt="Mahesh A. Gala — Chairman & Managing Director"
                    style={{
                      width: "100%",
                      height: 540,
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    right: -20,
                    padding: "16px 24px",
                    background: "var(--bg-card)",
                    border: "1px solid #D4AF37",
                    borderRadius: 8,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "#D4AF37", fontWeight: 700, textTransform: "uppercase" }}>Leadership</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginTop: 2 }}>Since 1995</div>
                </div>
              </div>

              {/* Right Bio */}
              <div>
                <GoldLine />
                <div style={{ fontSize: 12, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                  Leadership & Vision
                </div>
                <h2 style={{ fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: 12 }}>
                  MAHESH A. GALA
                </h2>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#D4AF37", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 32 }}>
                  Chairman & Managing Director
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Embarking on his entrepreneurial journey in 1995, Mahesh Gala has successfully built a dynamic business empire as Managing Director and Chairman. With ventures spanning Apparel, Furniture, Real Estate, Jewellery, and Education, he has established himself as a versatile leader with a keen eye for opportunity and strategic growth.
                  </p>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.85 }}>
                    Known for creating unique shopping experiences, developing luxury and affordable living spaces, and promoting quality education, he continues to drive innovation and excellence across industries. Passionate about building sustainable businesses and fostering long-term value, Mahesh Gala remains committed to inspiring growth and leaving a lasting legacy.
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid-3-col" style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--border-subtle)" }}>
                  {[
                    ["1995", "Journey Began"],
                    ["5+ Sectors", "Apparel to Real Estate"],
                    ["Excellence", "Sustainable Value"],
                  ].map(([val, lbl]) => (
                    <div key={lbl}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#D4AF37", marginBottom: 2 }}>{val}</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.02em" }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
