import { MoonIcon, SunIcon } from "./Icons"
import { navLinks } from "@/data/portfolio"

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
        <div className="navbar-inner" style={{
          width: "100%", height: 60,
          display: "flex", alignItems: "center",
          paddingLeft: "calc((100vw - 80vw) / 2)",
          paddingRight: "calc((100vw - 80vw) / 2)",
        }}>
          <a className="site-logo" href="#about" style={{ textDecoration: "none", fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1 }}>
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
              width: 42, height: 42,
              border: "none",
              background: "transparent",
              color: dark ? "#f59e0b" : "#4f46e5", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 220ms ease, filter 220ms ease",
            }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <div className="show-mobile mobile-nav-actions" style={{
            marginLeft: "auto",
            display: "flex", flexDirection: "row",
            alignItems: "center", gap: 8,
          }}>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle"
              style={{
                width: 36, height: 36,
                border: "none",
                background: "transparent",
                color: dark ? "#f59e0b" : "#4f46e5", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "color 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 220ms ease, filter 220ms ease",
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={onToggleMenu}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                width: 36, height: 36, borderRadius: 8,
                border: `1.5px solid ${borderColor}`,
                background: dark ? "#161b22" : "#f1f5f9",
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 4,
                flexShrink: 0, padding: 0,
                transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1)",
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
          backgroundColor: "transparent",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />
      <div
        className="mobile-drawer mobile-drawer-panel"
        style={{
          position: "fixed", top: 68, right: 16, zIndex: 99,
          width: 156,
          backgroundColor: dark ? "rgba(13,17,23,0.94)" : "rgba(255,255,255,0.94)",
          backdropFilter: "blur(16px) saturate(160%)",
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
          border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
          boxShadow: dark ? "0 16px 36px rgba(0,0,0,0.28)" : "0 16px 36px rgba(15,23,42,0.12)",
          borderRadius: 18,
          padding: "10px 12px",
          flexDirection: "column", gap: 10,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.96)",
          transformOrigin: "top right",
          transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={onCloseMenu}
            style={{
              fontSize: 16, fontWeight: 700, color: textPrimary,
              textDecoration: "none", padding: "6px 2px",
              backgroundColor: "transparent",
              border: "none",
              transition: "color 0.2s ease, transform 0.2s ease",
              display: "block",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#06b6d4"; e.currentTarget.style.transform = "translateX(4px)" }}
            onMouseLeave={e => { e.currentTarget.style.color = textPrimary; e.currentTarget.style.transform = "translateX(0)" }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
