import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { projectsData, Project } from "../data/projects"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

/* ─── DATA ──────────────────────────────────────────────────── */
const featuredProjects = projectsData.slice(0, 6)


const stats = [
  { value: "200+", label: "Luxury Villas" },
  { value: "15+", label: "Years of Excellence" },
  { value: "600+", label: "Happy Clients" },
  { value: "50+", label: "Global Awards" },
]

const services = [
  { icon: "◈", title: "Luxury Architecture", desc: "Bespoke residential design that fuses visionary aesthetics with enduring structural mastery." },
  { icon: "◉", title: "Interior Design", desc: "Curated living environments crafted around your personality, lifestyle, and artistic sensibility." },
  { icon: "◇", title: "Villa Construction", desc: "End-to-end build management using only the finest craftsmen, materials, and precision engineering." },
  { icon: "◆", title: "Investment Consulting", desc: "Strategic portfolio guidance with market intelligence to maximise your luxury real estate returns." },
  { icon: "○", title: "Property Management", desc: "White-glove concierge services that protect and enhance your asset value around the clock." },
  { icon: "✦", title: "Smart Home Integration", desc: "Seamlessly woven automation technology that elevates comfort, security, and energy efficiency." },
]

const gallery = [
  { id: "1", image: "/projects/kalyan surabhi.png", label: "Kalyan Surabhi", h: "tall" },
  { id: "2", image: "/projects/Metro majestic.png", label: "Metro Majestic", h: "short" },
  { id: "3", image: "/projects/kalyan square.png", label: "Kalyan Square", h: "short" },
  { id: "4", image: "/projects/SURAJ Premises.png", label: "Suraj Premises", h: "tall" },
  { id: "5", image: "/projects/kalyan nagari.png", label: "Kalyan Nagari", h: "short" },
  { id: "6", image: "/projects/metro luxuria.png", label: "Metro Luxuria", h: "short" },
  { id: "7", image: "/projects/Navere Plaza.png", label: "Navare Plaza", h: "tall" },
  { id: "8", image: "/projects/kalyan aashiyana.png", label: "Kalyan Aashiyana", h: "short" },
]

const process = [
  { num: "01", title: "Discover", desc: "We immerse ourselves in your vision, lifestyle, and investment goals through private consultations." },
  { num: "02", title: "Design", desc: "Our studio creates detailed architectural concepts that translate aspiration into spatial reality." },
  { num: "03", title: "Build", desc: "Master craftsmen execute every specification with obsessive attention to materials and precision." },
  { num: "04", title: "Deliver", desc: "A seamless handover experience — your extraordinary residence, perfected beyond expectation." },
]

/* ─── FADE-IN WRAPPER ────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "", style }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/* ─── GOLD DIVIDER ─────────────────────────────────────────────── */
function GoldLine() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div style={{ width: 32, height: 1, background: "#D4AF37" }} />
      <div style={{ width: 5, height: 5, background: "#D4AF37", transform: "rotate(45deg)" }} />
    </div>
  )
}

/* ─── HERO ─────────────────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 10 })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section
      ref={ref}
      style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}
    >
      {/* Parallax BG */}
      <motion.div style={{ position: "absolute", inset: "-10%", y }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(/projects/Metro%20majestic.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-hero)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, background: "var(--overlay-bottom)" }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
          style={{
            position: "absolute",
            width: 2,
            height: 2,
            background: "#D4AF37",
            borderRadius: "50%",
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Floating rings */}
      <motion.div
        className="spin-slow"
        style={{
          position: "absolute",
          right: "18%",
          top: "20%",
          width: 120,
          height: 120,
          border: "1px solid rgba(212,175,55,0.2)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        className="spin-slow"
        style={{
          position: "absolute",
          right: "18.5%",
          top: "19.5%",
          width: 160,
          height: 160,
          border: "1px solid rgba(212,175,55,0.08)",
          borderRadius: "50%",
          animationDirection: "reverse",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 48px", opacity }}
      >
        <div style={{ maxWidth: 780 }}>
          {/* Left / Main Hero Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
              style={{
                fontSize: "clamp(48px, 6vw, 88px)",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 28,
              }}
            >
              Crafting<br />
              <span className="gold-text">Extraordinary</span><br />
              Spaces
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 560, marginBottom: 48 }}
            >
              Luxury residences designed for visionaries who value timeless architecture, premium comfort, and exceptional investment opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <Link to="/properties" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "16px 48px",
                    background: "#D4AF37",
                    border: "none",
                    color: "#070707",
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    cursor: "none",
                    borderRadius: 2,
                    textTransform: "uppercase",
                    fontFamily: "Inter",
                    transition: "all 0.35s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f0d060" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#D4AF37" }}
                >
                  Explore Properties
                </button>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "16px 48px",
                    background: "transparent",
                    border: "1px solid var(--border-mid)",
                    color: "var(--text-primary)",
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    fontWeight: 600,
                    cursor: "none",
                    borderRadius: 2,
                    textTransform: "uppercase",
                    fontFamily: "Inter",
                    transition: "all 0.35s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-mid)" }}
                >
                  Enquiry
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 48,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.35em", color: "var(--text-muted)", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #D4AF37, transparent)" }}
        />
      </motion.div>
    </section>
  )
}

/* ─── STATS BAR ─────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="responsive-section" style={{ padding: "0 48px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <div
            className="grid-4-col"
            style={{
              background: "var(--border-subtle)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "40px 32px",
                  background: "var(--bg-card)",
                  borderRight: i < 3 ? "1px solid var(--border-subtle)" : "none",
                  textAlign: "center",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--bg-card-hover)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--bg-card)")}
              >
                <div className="gold-text" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 8, letterSpacing: "0.1em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ─── FEATURED PROPERTIES ──────────────────────────────────── */
function FeaturedProperties() {
  return (
    <section className="responsive-section" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <GoldLine />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 64 }}>
            <div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--text-primary)" }}>
                Featured<br />Properties
              </h2>
            </div>
            <Link to="/properties" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "none",
                  paddingBottom: 4,
                  borderBottom: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                View all listings <span>→</span>
              </div>
            </Link>
          </div>
        </FadeUp>

        <div className="grid-3-col" style={{ alignItems: "stretch" }}>
          {featuredProjects.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.1} style={{ height: "100%" }}>
              <PropertyCard project={p} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function PropertyCard({ project: p }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        cursor: "pointer",
        transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hovered ? "0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,175,55,0.15)" : "var(--card-shadow)",
      }}
    >
      {/* Image Container - Entire image visible */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: 280,
          background: "#08080a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <img
          src={p.image}
          alt={p.name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />

        {/* Status Tag */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "5px 12px",
            background: p.status === "Completed" ? "rgba(34, 197, 94, 0.25)" : "rgba(245, 158, 11, 0.25)",
            backdropFilter: "blur(12px)",
            border: p.status === "Completed" ? "1px solid rgba(34, 197, 94, 0.5)" : "1px solid rgba(245, 158, 11, 0.5)",
            borderRadius: 4,
            fontSize: 10,
            letterSpacing: "0.15em",
            color: p.status === "Completed" ? "#4ADE80" : "#FBBF24",
            fontWeight: 700,
            textTransform: "uppercase",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          ● {p.status}
        </div>
      </div>

      {/* Info Content - Uniform Flex height */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: 10, minHeight: 28 }}>
            {p.name}
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 6, lineHeight: 1.5, minHeight: 36 }}>
            <span style={{ flexShrink: 0, marginTop: 1 }}>📍</span> <span>{p.location}</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20, minHeight: 44 }}>
            {p.desc}
          </p>
        </div>

        {/* Specs Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 14,
            borderTop: "1px solid var(--border-subtle)",
            marginTop: "auto",
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>{p.type}</div>
            <div style={{ fontSize: 9, color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>Type</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#D4AF37" }}>{p.units || p.configurations}</div>
            <div style={{ fontSize: 9, color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>Details</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── ABOUT ─────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="responsive-section" style={{ padding: "120px 48px", background: "var(--bg-surface)" }}>
      <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto", alignItems: "center" }}>
        {/* Image side */}
        <FadeUp>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 580, background: "var(--bg-surface)" }}>
              <img
                src="https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=800&h=900&fit=crop&auto=format"
                alt="Luxury Interior"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.25), transparent)" }} />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="float"
              style={{
                position: "absolute",
                bottom: -24,
                right: -32,
                background: "var(--bg-card)",
                backdropFilter: "blur(24px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 12,
                padding: "24px 32px",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <div className="gold-text" style={{ fontSize: 48, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>15+</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6, letterSpacing: "0.1em" }}>Years of Excellence</div>
            </motion.div>
          </div>
        </FadeUp>

        {/* Text side */}
        <FadeUp delay={0.2}>
          <GoldLine />
          <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.06, color: "var(--text-primary)", marginBottom: 28 }}>
            Where Architecture<br />Meets<br />
            <span className="gold-text">Artistry</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 48, maxWidth: 460 }}>
            Since 2009, Metro Group has been synonymous with a singular idea: that a residence should be more than shelter — it should be a living work of art that inspires and endures.
          </p>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 56, maxWidth: 460 }}>
            We partner exclusively with the world's foremost architects, designers, and craftspeople — selecting only those whose obsession with perfection matches our own.
          </p>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ paddingLeft: 20, borderLeft: "2px solid rgba(212,175,55,0.3)" }}>
                <div className="gold-text" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4, letterSpacing: "0.1em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ─── SERVICES ──────────────────────────────────────────────── */
/* ─── GROUP OF COMPANIES AND BUSINESSES ────────────────────────── */
function GroupOfCompaniesSection() {
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
    <section style={{ padding: "120px 0", background: "var(--bg-surface)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", marginBottom: 56 }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "#D4AF37" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.35em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase" }}>
              Our Ecosystem
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.08, marginBottom: 24 }}>
            GROUP OF<br />
            <span className="gold-text">COMPANIES AND</span><br />
            BUSINESSES
          </h2>

          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.85, maxWidth: 740 }}>
            Our Group of Companies spans real estate, luxury, education, interiors, and lifestyle, featuring trusted names like Kalyan Group, Metro Group, SM Life Space, Tanishq, Godrej Interiors, and more—built on trust, innovation, and excellence.
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
  )
}

function ServicesSection() {
  return (
    <section id="services" className="responsive-section" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <GoldLine />
            <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.05 }}>
              Our Services
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
              Every service we offer is designed to deliver an experience that is, quite simply, without parallel.
            </p>
          </div>
        </FadeUp>

        <div className="grid-3-col">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <ServiceCard service={s} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service: s }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "40px 36px",
        background: hovered ? "var(--bg-glass-hover)" : "var(--bg-glass)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? "rgba(212,175,55,0.3)" : "var(--border-subtle)"}`,
        borderRadius: 16,
        cursor: "none",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? "var(--card-shadow)" : "none",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#D4AF37",
          marginBottom: 24,
          transition: "transform 0.4s",
          transform: hovered ? "scale(1.1) rotate(10deg)" : "none",
          display: "inline-block",
        }}
      >
        {s.icon}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12, letterSpacing: "-0.01em" }}>{s.title}</div>
      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8 }}>{s.desc}</p>
      <div
        style={{
          marginTop: 28,
          fontSize: 11,
          color: "#D4AF37",
          letterSpacing: "0.2em",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.4s",
          textTransform: "uppercase",
        }}
      >
        Learn more →
      </div>
    </div>
  )
}

/* ─── SHOWCASE (CSS 3D) ─────────────────────────────────────── */
function ShowcaseSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }

  const rx = mouse.y * -12
  const ry = mouse.x * 12

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      className="responsive-section"
      style={{ padding: "120px 48px", background: "var(--bg-surface)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <GoldLine />
            <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.05 }}>
              Architectural<br />
              <span className="gold-text">Showcase</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 16 }}>Move your cursor to explore the space</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ perspective: "1200px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: 900,
                height: "clamp(280px, 45vw, 520px)",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
                transition: "transform 0.1s ease-out",
                transformStyle: "preserve-3d",
                boxShadow: "0 40px 120px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,175,55,0.1)",
              }}
            >
              <img
                src="/projects/Metro majestic.png"
                alt="Metro Majestic Architectural Showcase"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `translate(${mouse.x * -15}px, ${mouse.y * -8}px) scale(1.05)`,
                  transition: "transform 0.15s ease-out",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.35), transparent 60%)" }} />

              {/* Overlay info */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 4 }}>Metro Majestic — Landmark Living</div>
                <div style={{ fontSize: 13, color: "#D4AF37", letterSpacing: "0.1em" }}>Panoramic Sky Lounge · Eco Amenities · Completed Landmark</div>
              </div>

              {/* Corner tags */}
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  padding: "8px 18px",
                  background: "rgba(212,175,55,0.12)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  borderRadius: 4,
                  fontSize: 11,
                  color: "#D4AF37",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                3D Interactive
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ─── GALLERY ────────────────────────────────────────────────── */
function GallerySection() {
  return (
    <section className="responsive-section" style={{ padding: "120px 48px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
            <div>
              <GoldLine />
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.05 }}>
                Luxury Gallery
              </h2>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.1em" }}>8 Curated Properties</div>
          </div>
        </FadeUp>

        <div className="responsive-gallery-columns">
          {gallery.map((g, i) => (
            <FadeUp key={g.id} delay={i * 0.06}>
              <GalleryItem item={g} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ item: g }: { item: typeof gallery[0] }) {
  const [hovered, setHovered] = useState(false)
  const tall = g.h === "tall"
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        breakInside: "avoid",
        marginBottom: 16,
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "none",
        background: "var(--bg-surface)",
        height: tall ? 380 : 220,
      }}
    >
      <img
        src={g.image}
        alt={g.label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.4s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          fontSize: 12,
          fontWeight: 600,
          color: "#ffffff",
          letterSpacing: "0.1em",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "all 0.4s",
          textTransform: "uppercase",
        }}
      >
        {g.label}
      </div>
    </div>
  )
}

/* ─── PROCESS ───────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <section className="responsive-section" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <GoldLine />
            <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.05 }}>
              Our Process
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", marginTop: 16, maxWidth: 440, margin: "16px auto 0" }}>
              Four deliberate steps from vision to extraordinary reality.
            </p>
          </div>
        </FadeUp>

        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div
            className="hidden-mobile"
            style={{
              position: "absolute",
              top: 36,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), rgba(212,175,55,0.3), transparent)",
            }}
          />

          <div className="grid-4-col" style={{ position: "relative" }}>
            {process.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.12}>
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  {/* Node */}
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        border: "1px solid rgba(212,175,55,0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(212,175,55,0.08)",
                        position: "relative",
                        boxShadow: "0 0 30px rgba(212,175,55,0.12)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: -6,
                          border: "1px solid rgba(212,175,55,0.1)",
                          borderRadius: "50%",
                          animation: "spin-slow 8s linear infinite",
                        }}
                      />
                      <span className="gold-text" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "0.05em" }}>
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12, letterSpacing: "-0.01em" }}>{step.title}</div>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT CTA ────────────────────────────────────────────── */
function ContactCTA() {
  return (
    <section className="responsive-section" style={{ padding: "80px 48px 120px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp>
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              padding: "clamp(40px, 8vw, 96px) clamp(20px, 5vw, 80px)",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              textAlign: "center",
            }}
          >
            {/* BG image */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
              <img
                src="https://images.unsplash.com/photo-1681656569927-ae3a2929ecfd?w=1400&h=600&fit=crop&auto=format"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, var(--bg-surface) 75%)" }} />

            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="pulse-gold" style={{ fontSize: 11, letterSpacing: "0.4em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase", marginBottom: 24 }}>
                ✦ Begin Your Journey ✦
              </div>
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.05, marginBottom: 24 }}>
                Your Extraordinary<br />Residence Awaits
              </h2>
              <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.75 }}>
                Schedule a private consultation with our expert team and take the first step toward owning something truly remarkable.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      padding: "18px 56px",
                      background: "#D4AF37",
                      border: "none",
                      color: "#070707",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      fontWeight: 700,
                      cursor: "none",
                      borderRadius: 2,
                      textTransform: "uppercase",
                      fontFamily: "Inter",
                      transition: "all 0.35s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f0d060" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#D4AF37" }}
                  >
                    Enquiry
                  </button>
                </Link>
                <Link to="/properties" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      padding: "18px 56px",
                      background: "transparent",
                      border: "1px solid var(--border-mid)",
                      color: "var(--text-primary)",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      fontWeight: 600,
                      cursor: "none",
                      borderRadius: 2,
                      textTransform: "uppercase",
                      fontFamily: "Inter",
                      transition: "all 0.35s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-mid)" }}
                  >
                    View Properties
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProperties />
      <AboutSection />
      <GroupOfCompaniesSection />
      <ServicesSection />
      <ShowcaseSection />
      <GallerySection />
      <ProcessSection />
      <ContactCTA />
    </>
  )
}
