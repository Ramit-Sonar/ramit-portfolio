import { MoonIcon, SunIcon } from "./Icons"
import { mobileNavLinks, navLinks } from "@/data/portfolio"

type NavbarProps = {
  dark: boolean
  mobileOpen: boolean
  textPrimary: string
  textSecondary: string
  borderColor: string
  onToggleTheme: () => void
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export default function Navbar({
  dark,
  mobileOpen,
  textPrimary,
  textSecondary,
  borderColor,
  onToggleTheme,
  onToggleMenu,
  onCloseMenu,
}: NavbarProps) {
  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: dark ? "rgba(13,17,23,0.5)" : "rgba(255,255,255,0.25)",
        backdropFilter: "blur(18px) saturate(180%)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        borderBottom: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
      }}>
        <div style={{
          width: "100%", height: 60,
          display: "flex", alignItems: "center",
          paddingLeft: "calc((100vw - 80vw) / 2)",
          paddingRight: "calc((100vw - 80vw) / 2)",
        }}>
          <a href="#about" style={{ textDecoration: "none", fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1 }}>
            <span style={{ color: "#06b6d4" }}>Ramit </span>
            <span style={{ color: "#7c3aed" }}>Sonar</span>
          </a>

          <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                className="nav-link"
                style={{ fontSize: 17, fontWeight: 500, color: textSecondary, transition: "color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#06b6d4" }}
                onMouseLeave={e => { e.currentTarget.style.color = textSecondary }}
              >{label}</a>
            ))}
          </nav>

          <button
            onClick={onToggleTheme}
            className="hidden-mobile theme-toggle"
            aria-label="Toggle theme"
            style={{
              position: "absolute", right: "1.5rem",
              width: 42, height: 42, borderRadius: "50%",
              border: `1.5px solid ${borderColor}`,
              background: dark ? "#161b22" : "#fff",
              color: dark ? "#f59e0b" : "#4f46e5", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <div className="show-mobile" style={{
            marginLeft: "auto",
            display: "flex", flexDirection: "row",
            alignItems: "center", gap: 8,
          }}>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle"
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1.5px solid ${borderColor}`,
                background: dark ? "#161b22" : "#f1f5f9",
                color: dark ? "#f59e0b" : "#4f46e5", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={onToggleMenu}
              aria-label="Open menu"
              style={{
                width: 36, height: 36, borderRadius: 8,
                border: `1.5px solid ${borderColor}`,
                background: dark ? "#161b22" : "#f1f5f9",
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 4,
                flexShrink: 0, padding: 0,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: 16, height: 2,
                  backgroundColor: textPrimary, borderRadius: 2,
                  transition: "all 0.25s",
                  transform: mobileOpen
                    ? i === 0 ? "translateY(6px) rotate(45deg)" : i === 2 ? "translateY(-6px) rotate(-45deg)" : "scaleX(0)"
                    : "none",
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={onCloseMenu}
        className="mobile-drawer"
        style={{
          position: "fixed", inset: 0, zIndex: 98,
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: mobileOpen ? "blur(2px)" : "none",
          WebkitBackdropFilter: mobileOpen ? "blur(2px)" : "none",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        className="mobile-drawer mobile-drawer-panel"
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 99,
          width: 220,
          backgroundColor: dark ? "rgba(15,23,42,0.88)" : "rgba(255,255,255,0.82)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderLeft: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
          boxShadow: "-8px 0 40px rgba(0,0,0,0.18)",
          borderRadius: "20px 0 0 20px",
          padding: "80px 28px 40px",
          flexDirection: "column", gap: 8,
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#06b6d4", marginBottom: 8 }}>Navigation</p>
        {mobileNavLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={onCloseMenu}
            style={{
              fontSize: 17, fontWeight: 600, color: textPrimary,
              textDecoration: "none", padding: "12px 16px",
              borderRadius: 12,
              backgroundColor: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}`,
              transition: "background 0.2s",
              display: "block",
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = dark ? "rgba(6,182,212,0.15)" : "rgba(6,182,212,0.08)"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
