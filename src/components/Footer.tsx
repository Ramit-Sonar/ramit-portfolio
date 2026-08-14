export default function Footer({
  dark,
  textSecondary,
  borderColor,
}: {
  dark: boolean
  textSecondary: string
  borderColor: string
}) {
  return (
    <footer style={{ backgroundColor: dark ? "#0a1120" : "#f3f4f6", paddingBottom: "1.5rem" }}>
      <div className="section-container">
        <div style={{ borderTop: `1px solid ${borderColor}`, marginBottom: "1.5rem" }} />
      </div>
      <div className="section-container footer-content">
        <a
          href="#"
          style={{ display: "inline-block", padding: "10px 24px", borderRadius: 8, backgroundColor: "#4f46e5", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Download CV
        </a>
        <p style={{ fontSize: 13.5, color: textSecondary }}>Â© 2026 Ramit Sonar</p>
      </div>
    </footer>
  )
}
