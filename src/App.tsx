import { useEffect, useState } from "react"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import useScrollReveal from "@/hooks/useScrollReveal"

export default function App() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useScrollReveal()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const bg = dark ? "#0d1117" : "#f3f4f6"
  const cardBg = dark ? "#161b22" : "#ffffff"
  const textPrimary = dark ? "#f1f5f9" : "#111827"
  const textSecondary = dark ? "#94a3b8" : "#6b7280"
  const borderColor = dark ? "#30363d" : "#e2e8f0"

  return (
    <div className="theme-transition" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: bg, color: textPrimary, minHeight: "100vh" }}>
      <Navbar
        dark={dark}
        mobileOpen={mobileOpen}
        textPrimary={textPrimary}
        textSecondary={textSecondary}
        borderColor={borderColor}
        onToggleTheme={() => setDark(!dark)}
        onToggleMenu={() => setMobileOpen(!mobileOpen)}
        onCloseMenu={() => setMobileOpen(false)}
      />

      <main style={{ paddingTop: 61 }}>
        <AboutSection dark={dark} textPrimary={textPrimary} />
        <ProjectsSection dark={dark} textSecondary={textSecondary} borderColor={borderColor} cardBg={cardBg} />
        <SkillsSection dark={dark} />
        <ContactSection
          dark={dark}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      </main>

      <Footer dark={dark} textSecondary={textSecondary} borderColor={borderColor} />
    </div>
  )
}
