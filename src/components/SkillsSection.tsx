import SkillCard from "./SkillCard"
import { techStack } from "@/data/portfolio"

export default function SkillsSection({ dark }: { dark: boolean }) {
  return (
    <section id="skills" className="section-pad scroll-reveal" style={{ backgroundColor: dark ? "#0d1117" : "#f3f4f6" }}>
      <div className="section-container">
        <h2 className="h-section-lg" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#06b6d4" }}>My </span>
          <span style={{ color: dark ? "#94a3b8" : "#9ca3af" }}>Tech </span>
          <span style={{ color: "#f87171" }}>Stack</span>
        </h2>
        <div className="grid-3">
          {techStack.map(group => <SkillCard key={group.category} group={group} dark={dark} />)}
        </div>
      </div>
    </section>
  )
}
