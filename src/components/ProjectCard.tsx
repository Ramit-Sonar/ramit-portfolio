import { useState } from "react"
import { GitHubIcon } from "./Icons"
import type { Project } from "@/data/portfolio"

export default function ProjectCard({ project, dark }: { project: Project; dark: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)

  const cardBg = dark ? "#0d1117" : "#ffffff"
  const imgBg = dark ? "#0d1117" : "#f1f5f9"
  const titleColor = dark ? "#f1f5f9" : "#111827"
  const descColor = dark ? "#94a3b8" : "#6b7280"
  const labelColor = dark ? "#cbd5e1" : "#374151"
  const featBg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"
  const featBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)"
  const featColor = dark ? "#94a3b8" : "#4b5563"
  const btnBorder = dark ? "rgba(255,255,255,0.18)" : "#d1d5db"
  const btnBg = dark ? "rgba(255,255,255,0.06)" : "#f9fafb"
  const btnColor = dark ? "#f1f5f9" : "#374151"

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card-h scroll-reveal"
      style={{
        backgroundColor: cardBg,
        borderRadius: 20,
        overflow: "hidden",
        border: dark ? "1px solid #30363d" : "1px solid #e2e8f0",
        boxShadow: hovered
          ? "0 0 0 2px rgba(6,182,212,0.5), 0 0 28px rgba(6,182,212,0.18), 0 24px 56px rgba(0,0,0,0.12)"
          : dark ? "0 4px 24px rgba(0,0,0,0.22)" : "0 4px 24px rgba(0,0,0,0.08)",
        transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)",
        display: "grid",
        gridTemplateColumns: "42% 1fr",
      }}
    >
      <div
        style={{ position: "relative", overflow: "hidden", backgroundColor: imgBg, minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "16px", margin: "10px 0 10px 10px", boxShadow: dark ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.08)" }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            transition: "transform 0.45s ease",
            transform: imgHovered ? "scale(1.05)" : "scale(1)",
            display: "block",
            borderRadius: "14px",
          }}
        />

        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(0,0,0,0.52)",
          opacity: imgHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }} />

        <div style={{
          position: "absolute", top: 14, left: 14,
          display: "flex", flexWrap: "wrap", gap: 7,
          opacity: imgHovered ? 1 : 0,
          transform: imgHovered ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>
          {project.tagLabels.map((tag, i) => (
            <span key={tag} style={{
              backgroundColor: i === 0 ? "#06b6d4" : i === 1 ? "#7c3aed" : "#ec4899",
              color: "#fff", fontSize: 11.5, fontWeight: 700,
              padding: "4px 10px", borderRadius: 20, letterSpacing: "0.02em",
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: "2rem 2rem 1.75rem", display: "flex", flexDirection: "column", gap: 0 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: titleColor, marginBottom: 10 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: descColor, marginBottom: 20 }}>
          {project.description}
        </p>

        <p style={{ fontSize: 13, fontWeight: 700, color: labelColor, marginBottom: 10, letterSpacing: "0.04em" }}>Key Features:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {project.features.map((feature) => (
            <span key={feature} style={{
              fontSize: 12.5, color: featColor, fontWeight: 500,
              padding: "5px 12px", borderRadius: 20,
              border: `1px solid ${featBorder}`,
              backgroundColor: featBg,
            }}>{feature}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "auto" }}>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "10px 20px", borderRadius: 10,
              border: `1.5px solid ${btnBorder}`,
              backgroundColor: btnBg,
              color: btnColor, fontSize: 13.5, fontWeight: 600,
              textDecoration: "none", transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#06b6d4"; e.currentTarget.style.color = "#06b6d4" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = btnBorder; e.currentTarget.style.color = btnColor }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            View Project
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "10px 20px", borderRadius: 10,
              border: `1.5px solid ${btnBorder}`,
              backgroundColor: btnBg,
              color: btnColor, fontSize: 13.5, fontWeight: 600,
              textDecoration: "none", transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.color = "#7c3aed" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = btnBorder; e.currentTarget.style.color = btnColor }}
          >
            <GitHubIcon size={14} />
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}
