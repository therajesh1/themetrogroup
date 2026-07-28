import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ThemeProvider } from "./context/ThemeContext"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GroupOfCompanies from "./pages/GroupOfCompanies"

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.55, ease },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/group-of-companies" element={<GroupOfCompanies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }} className="cursor-custom">
          <CustomCursor />
          <Nav />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
