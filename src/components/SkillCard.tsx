import { useState } from "react"
import { TechIcon } from "./Icons"
import type { TechGroup, TechItem } from "@/data/portfolio"

function SkillChip({ item, dark }: { item: TechItem; dark: boolean }) {
  const [chipHovered, setChipHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setChipHovered(true)}
      onMouseLeave={() => setChipHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: chipHovered
          ? dark ? "#0d1117" : "#ffffff"
          : dark ? "#0d1117" : "#f8fafc",
        border: chipHovered
          ? "1.5px solid rgba(6,182,212,0.7)"
          : dark ? "1px solid #21262d" : "1px solid #e2e8f0",
        borderRadius: 10,
        padding: "0.6rem 0.85rem",
        fontSize: 14.5,
        fontWeight: 500,
        color: dark ? "#cbd5e1" : "#374151",
        transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: chipHovered ? "0 0 0 3px rgba(6,182,212,0.15)" : "none",
        cursor: "default",
      }}
    >
      <TechIcon icon={item.icon} />
      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {item.name}
      </span>
    </div>
  )
}

export default function SkillCard({ group, dark }: { group: TechGroup; dark: boolean }) {
  const [hovered, setHovered] = useState(false)

  const cardBase = dark ? "#161b22" : "#ffffff"
  const cardHover = dark
    ? "linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(124,58,237,0.1) 100%)"
    : "linear-gradient(135deg, rgba(236,72,153,0.07) 0%, rgba(124,58,237,0.07) 100%)"
  const shadow = hovered
    ? "0 0 0 2px rgba(6,182,212,0.5), 0 0 22px rgba(6,182,212,0.22), 0 20px 48px rgba(0,0,0,0.25)"
    : dark
      ? "0 6px 28px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)"
      : "0 6px 28px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)"

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="scroll-reveal"
      style={{
        borderRadius: 20,
        padding: "clamp(1.25rem, 3vw, 1.75rem)",
        border: dark ? "1px solid #30363d" : "none",
        boxShadow: shadow,
        transition: "background 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)",
        background: hovered ? cardHover : cardBase,
      }}
    >
      <h3 style={{ fontSize: 20, fontWeight: 700, color: "#2563EB", marginBottom: "1.2rem" }}>
        {group.category}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
        {group.items.map((item) => (
          <SkillChip key={item.name} item={item} dark={dark} />
        ))}
      </div>
    </div>
  )
}
