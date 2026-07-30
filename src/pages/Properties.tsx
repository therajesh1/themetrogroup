import { useState } from "react"
import { motion } from "framer-motion"
import { projectsData, Project } from "../data/projects"

const filterOptions = [
  "All",
  "Completed",
  "Ongoing",
  "Residential",
  "Commercial",
  "Residential + Commercial",
]

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ height: "100%", ...style }}
    >
      {children}
    </motion.div>
  )
}

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Completed") return p.status === "Completed"
    if (activeFilter === "Ongoing") return p.status === "Ongoing"
    return p.category === activeFilter
  })

  const completedCount = projectsData.filter((p) => p.status === "Completed").length
  const ongoingCount = projectsData.filter((p) => p.status === "Ongoing").length

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero Header */}
      <section
        style={{
          position: "relative",
          padding: "100px 48px 80px",
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.08 }}>
          <img
            src="/projects/Metro majestic.png"
            alt="Background"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: "#D4AF37" }} />
              <div style={{ width: 5, height: 5, background: "#D4AF37", transform: "rotate(45deg)" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.4em", color: "#D4AF37", fontWeight: 600, textTransform: "uppercase" }}>
                Metro Group Portfolio
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 5.5vw, 76px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.04,
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              Our Completed &<br />
              <span className="gold-text">Ongoing Projects</span>
            </h1>

            <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 580, lineHeight: 1.75 }}>
              Explore Metro Group's landmark residential and commercial developments across Kalyan, Thane, and surrounding regions.
            </p>

            {/* Quick summary badges */}
            <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
              <div
                onClick={() => setActiveFilter("Completed")}
                style={{
                  cursor: "pointer",
                  padding: "12px 24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.3s",
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ADE80" }} />
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{completedCount}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.05em", marginTop: 4 }}>Completed Projects</div>
                </div>
              </div>

              <div
                onClick={() => setActiveFilter("Ongoing")}
                style={{
                  cursor: "pointer",
                  padding: "12px 24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.3s",
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{ongoingCount}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.05em", marginTop: 4 }}>Ongoing Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Filter & Grid Section */}
      <section style={{ padding: "64px 48px 120px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Filters Bar */}
          <FadeUp>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: 48,
                paddingBottom: 24,
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {filterOptions.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "10px 24px",
                    background: f === activeFilter ? "#D4AF37" : "var(--bg-card)",
                    border: `1px solid ${f === activeFilter ? "#D4AF37" : "var(--border-subtle)"}`,
                    color: f === activeFilter ? "#070707" : "var(--text-secondary)",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    cursor: "pointer",
                    borderRadius: 4,
                    textTransform: "uppercase",
                    fontFamily: "Inter",
                    transition: "all 0.3s",
                    boxShadow: f === activeFilter ? "0 4px 14px rgba(212,175,55,0.3)" : "none",
                  }}
                >
                  {f}
                </button>
              ))}

              <div style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                Showing <strong style={{ color: "#D4AF37" }}>{filteredProjects.length}</strong> Projects
              </div>
            </div>
          </FadeUp>

          {/* Grid */}
          <div className="grid-3-col" style={{ alignItems: "stretch" }}>
            {filteredProjects.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setHoveredId(p.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedProject(p)}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#ffffff",
                    border: hoveredId === p.id ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                    transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s, border-color 0.4s",
                    transform: hoveredId === p.id ? "translateY(-8px)" : "none",
                    boxShadow:
                      hoveredId === p.id
                        ? "0 28px 70px rgba(0,0,0,0.15), 0 0 0 1px rgba(212,175,55,0.2)"
                        : "var(--card-shadow)",
                  }}
                >
                  {/* Image Container - Entire image visible using contain */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      height: 280,
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 12,
                      borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
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
                        transform: hoveredId === p.id ? "scale(1.04)" : "scale(1)",
                      }}
                    />

                    {/* Status Badge */}
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
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      ● {p.status}
                    </div>
                  </div>

                  {/* Body Content - Uniform flex layout for equal card size */}
                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#070707", letterSpacing: "-0.01em", marginBottom: 10 }}>
                        {p.name}
                      </div>

                      <div style={{ fontSize: 12, color: "#555555", marginBottom: 16, display: "flex", alignItems: "flex-start", gap: 6, lineHeight: 1.5 }}>
                        <span style={{ flexShrink: 0, marginTop: 1 }}>📍</span> <span>{p.location}</span>
                      </div>
                    </div>

                    {/* WhatsApp Inquiry Button */}
                    {p.status !== "Completed" && (
                      <a
                        href={`https://wa.me/919867895764?text=${encodeURIComponent(`Hello Metro Group, I am interested in inquiring about ${p.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          width: "100%",
                          marginTop: "auto",
                          padding: "12px 16px",
                          background: "rgba(37, 211, 102, 0.12)",
                          border: "1px solid rgba(37, 211, 102, 0.4)",
                          borderRadius: 6,
                          color: "#25D366",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          ;(e.currentTarget as HTMLAnchorElement).style.background = "#25D366"
                          ;(e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                          ;(e.currentTarget as HTMLAnchorElement).style.background = "rgba(37, 211, 102, 0.12)"
                          ;(e.currentTarget as HTMLAnchorElement).style.color = "#25D366"
                        }}
                      >
                        <span style={{ fontSize: 16 }}>💬</span> WhatsApp Inquiry
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Detail */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 760,
              width: "100%",
              background: "var(--bg-card)",
              border: "1px solid var(--border-mid)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div style={{ position: "relative", height: 380, background: "#060608", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span
                  style={{
                    padding: "4px 12px",
                    background: selectedProject.status === "Completed" ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)",
                    border: selectedProject.status === "Completed" ? "1px solid #22c55e" : "1px solid #f59e0b",
                    borderRadius: 4,
                    fontSize: 10,
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {selectedProject.status} Project
                </span>
              </div>

              <h2 style={{ fontSize: 32, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: 12 }}>
                {selectedProject.name}
              </h2>

              <div style={{ fontSize: 14, color: "#D4AF37", marginBottom: 20, letterSpacing: "0.03em", lineHeight: 1.6 }}>
                📍 {selectedProject.location}
              </div>

              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28 }}>
                {selectedProject.desc}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: 16,
                  padding: 20,
                  background: "var(--bg-surface)",
                  borderRadius: 12,
                  border: "1px solid var(--border-subtle)",
                  marginBottom: 28,
                }}
              >
                <div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Type</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginTop: 4 }}>{selectedProject.type}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Units / Layout</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginTop: 4 }}>{selectedProject.units || "N/A"}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Status</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: selectedProject.status === "Completed" ? "#4ADE80" : "#FBBF24", marginTop: 4 }}>{selectedProject.status}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", flexWrap: "wrap" }}>
                {selectedProject.status !== "Completed" && (
                  <a
                    href={`https://wa.me/919867895764?text=${encodeURIComponent(`Hello Metro Group, I am interested in inquiring about ${selectedProject.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 28px",
                      background: "#25D366",
                      color: "#ffffff",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                      borderRadius: 4,
                      textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ fontSize: 16 }}>💬</span> Inquire on WhatsApp
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    padding: "12px 28px",
                    background: "#D4AF37",
                    border: "none",
                    color: "#070707",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    borderRadius: 4,
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  Close Detail
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
