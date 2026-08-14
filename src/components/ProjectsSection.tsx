import { GitHubIcon } from "./Icons"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/portfolio"

export default function ProjectsSection({
  dark,
  textSecondary,
  borderColor,
  cardBg,
}: {
  dark: boolean
  textSecondary: string
  borderColor: string
  cardBg: string
}) {
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: dark ? "#0d1117" : "#f3f4f6" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <h2 className="h-section-lg" style={{ marginBottom: 14 }}>
            <span style={{ color: "#06b6d4" }}>My </span>
            <span style={{ color: "#ec4899" }}>Projects</span>
          </h2>
          <p style={{ fontSize: 15, color: textSecondary, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Here are some of my featured projects. Each one was built to solve real problems and showcase different technical skills.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "3rem", marginBottom: "3rem" }}>
          {projects.map(project => <ProjectCard key={project.title} project={project} dark={dark} />)}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/Ramit-Sonar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 13.5, fontWeight: 600, color: textSecondary,
              padding: "10px 24px", borderRadius: 8,
              border: `1.5px solid ${borderColor}`,
              backgroundColor: cardBg, textDecoration: "none",
              transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#06b6d4"; e.currentTarget.style.color = "#06b6d4" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = textSecondary }}
          >
            <GitHubIcon size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
