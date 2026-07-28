import { createContext, useContext, useEffect, useState } from "react"

type Mode = "dark" | "light"

interface ThemeCtx {
  mode: Mode
  toggle: () => void
}

const ThemeContext = createContext<ThemeCtx>({ mode: "light", toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>(() => {
    const stored = localStorage.getItem("lumiere-theme")
    return (stored === "light" || stored === "dark") ? stored : "light"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode)
    if (mode === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("lumiere-theme", mode)
  }, [mode])

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"))

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
