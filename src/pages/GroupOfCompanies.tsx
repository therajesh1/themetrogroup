import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function GroupOfCompanies() {
  const images = [
    "/i1.png",
    "/i2.png",
    "/i3.png",
    "/i4.png",
    "/i5.png",
    "/i6.png",
  ]
  const marqueeList = [...images, ...images, ...images, ...images]

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "120px 0", background: "var(--bg-surface)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", marginBottom: 56 }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: "#D4AF37" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase" }}>
                Our Ecosystem
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.08, marginBottom: 24 }}>
              GROUP OF<br />
              <span className="gold-text">COMPANIES AND</span><br />
              BUSINESSES
            </h1>

            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.85, maxWidth: 740 }}>
              Our Group of Companies spans real estate, luxury, education, interiors, Jwelleries and lifestyle, featuring trusted names like Kalyan Group, Metro Group, SM Life Space, Tanishq, Godrej Interiors, and more—built on trust, innovation, and excellence.
            </p>
          </FadeUp>
        </div>

        {/* Horizontal Rotating Marquee Carousel */}
        <FadeUp delay={0.2}>
          <div className="marquee-container">
            <div className="marquee-track">
              {marqueeList.map((imgSrc, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: "0 0 auto",
                    height: 120,
                    padding: "16px 32px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--card-shadow)",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.4)"
                    ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-subtle)"
                    ;(e.currentTarget as HTMLDivElement).style.transform = "none"
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Company Logo ${(idx % 6) + 1}`}
                    style={{
                      maxHeight: 70,
                      maxWidth: 200,
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
