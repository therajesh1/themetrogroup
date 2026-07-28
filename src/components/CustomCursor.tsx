import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const smooth = useRef({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
      if (!visible) setVisible(true)
    }
    window.addEventListener("mousemove", onMove)

    let raf: number
    const tick = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.13
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.13
      const size = hovered ? 48 : 32
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${smooth.current.x - size / 2}px, ${smooth.current.y - size / 2}px)`
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const handleEnter = () => setHovered(true)
    const handleLeave = () => setHovered(false)
    const attach = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", handleEnter)
        el.addEventListener("mouseleave", handleLeave)
      })
    }
    attach()
    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [hovered, visible])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "#D4AF37",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: "1px solid rgba(212,175,55,0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "width 0.35s cubic-bezier(0.22,1,0.36,1), height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s",
          willChange: "transform, width, height",
        }}
      />
    </>
  )
}
