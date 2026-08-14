import { useState } from "react"
import { profileImage } from "@/data/portfolio"

const aboutHeading = "About Me"

export default function AboutSection({
  dark,
  textPrimary,
}: {
  dark: boolean
  textPrimary: string
}) {
  const [photoHovered, setPhotoHovered] = useState(false)

  return (
    <section id="about" className="scroll-reveal" style={{ backgroundColor: dark ? "#0d1117" : "#f3f4f6", paddingTop: 0, paddingBottom: "2rem", marginTop: 0 }}>
      <div className="about-outer">
        <div className="about-bg-card" style={{
          backgroundColor: dark ? "#161b22" : "#ffffff",
          borderRadius: "0 0 28px 28px",
          borderTop: "none",
          borderLeft: dark ? "1px solid #334155" : "none",
          borderRight: dark ? "1px solid #334155" : "none",
          borderBottom: dark ? "1px solid #334155" : "none",
          boxShadow: dark
            ? "0 0 6px rgba(0,0,0,0.22), 0 24px 32px -8px rgba(0,0,0,0.55)"
            : "0 0 5px rgba(0,0,0,0.06), 0 24px 32px -8px rgba(0,0,0,0.22)",
        }}>
          <div className="about-card" style={{
            backgroundColor: dark ? "#161b22" : "#ffffff",
            borderRadius: 28,
            border: dark ? "1px solid #334155" : "none",
            display: "grid",
            alignItems: "center",
            boxShadow: "0 0 4px rgba(0,0,0,0.05), 0 20px 28px -8px rgba(0,0,0,0.18)",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            <div>
              <h1
                className="about-h1"
                style={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  background: "linear-gradient(90deg, #06b6d4 0%, #7c3aed 48%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {aboutHeading.split("").map((letter, index) => (
                  <span
                    className="about-heading-letter"
                    key={`${letter}-${index}`}
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {letter === " " ? "\u00a0" : letter}
                  </span>
                ))}
              </h1>
              <p className="about-body" style={{ lineHeight: 1.8, color: textPrimary, marginBottom: "1rem" }}>
                Hey there! I'm{" "}
                <a href="#contact" style={{ color: "#06b6d4", fontWeight: 600, textDecoration: "none" }}>Ramit Sonar</a>
                , a passionate <strong>full-stack developer</strong> and <strong>Computer Engineering student</strong>. I love creating <strong>modern digital experiences</strong>, whether it's a powerful web application or a smooth mobile interface.
              </p>
              <p className="about-body" style={{ lineHeight: 1.8, color: textPrimary, marginBottom: "1rem" }}>
                My stack includes <strong>HTML, CSS, JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, and Tailwind CSS</strong>.
              </p>
              <p className="about-body" style={{ lineHeight: 1.8, color: textPrimary, marginBottom: "2rem" }}>
                I love writing <strong>clean, scalable code</strong> and solving <strong>real-world challenges</strong> through tech.
              </p>
              <a
                href="#contact"
                className="about-cta"
                style={{ backgroundColor: "#06b6d4", color: "#fff", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Get in Touch
              </a>
            </div>

            <div
              className="about-photo-wrap"
              style={{ borderRadius: 16, transition: "box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)", boxShadow: photoHovered ? "0 0 0 3px rgba(6,182,212,0.55), 0 0 28px rgba(6,182,212,0.35), 0 8px 32px rgba(0,0,0,0.18)" : "0 8px 28px rgba(0,0,0,0.13)" }}
              onMouseEnter={() => setPhotoHovered(true)}
              onMouseLeave={() => setPhotoHovered(false)}
            >
              <img
                src={profileImage}
                alt="Ramit Sonar"
                className="about-photo"
                style={{
                  objectFit: "cover", objectPosition: "center 30%",
                  borderRadius: 14,
                  transition: "transform 0.35s ease",
                  transform: photoHovered ? "scale(1.025)" : "scale(1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
