import { useState, type FormEvent } from "react"
import { GitHubIcon, LinkedInIcon } from "./Icons"

export default function ContactSection({
  dark,
  textPrimary,
  textSecondary,
  borderColor,
}: {
  dark: boolean
  textPrimary: string
  textSecondary: string
  borderColor: string
}) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)

  function validateForm() {
    const errors = { name: "", email: "", message: "" }
    if (!formData.name.trim()) errors.name = "Name is required."
    if (!formData.email.trim()) errors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Enter a valid email address."
    if (!formData.message.trim()) errors.message = "Message is required."
    else if (formData.message.trim().length < 10) errors.message = "Message must be at least 10 characters."
    return errors
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)

    if (!errors.name && !errors.email && !errors.message) {
      setFormSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setFormSubmitted(false), 4000)
    }
  }

  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: dark ? "#0d1117" : "#f3f4f6" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#06b6d4", marginBottom: 10 }}>LET'S CONNECT</p>
          <h2 className="h-section-lg" style={{ marginBottom: 14 }}>
            <span style={{ color: "#06b6d4" }}>Get In </span>
            <span style={{ color: "#ec4899" }}>Touch</span>
          </h2>
          <p style={{ fontSize: 16, color: textSecondary, maxWidth: 520, margin: "0 auto" }}>
            Whether you have a project in mind or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid" style={{ alignItems: "start" }}>
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: textPrimary, marginBottom: 12 }}>Contact Information</h3>
            <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.7, marginBottom: 32 }}>
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            {[
              {
                bg: "rgba(6,182,212,0.12)",
                icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                label: "Email Me",
                value: "shapkotaramit47@gmail.com",
                href: "mailto:shapkotaramit47@gmail.com",
              },
              {
                bg: "rgba(6,182,212,0.12)",
                icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                label: "Call Me",
                value: "+977 9813965138",
                href: "tel:+9779813965138",
              },
              {
                bg: "rgba(124,58,237,0.12)",
                icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="#7c3aed"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
                label: "Linkedin",
                value: "ramitsonar",
                href: "https://www.linkedin.com/in/ramitsonar",
              },
            ].map(({ bg, icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: textPrimary, marginBottom: 3 }}>{label}</p>
                  <a href={href} style={{ fontSize: 14.5, color: "#06b6d4", textDecoration: "none" }}
                    onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
                    onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
                  >{value}</a>
                </div>
              </div>
            ))}

            <p style={{ fontSize: 15, fontWeight: 600, color: textPrimary, marginTop: 8, marginBottom: 16 }}>Follow me on</p>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="https://github.com/Ramit-Sonar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: "#24292f", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <GitHubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ramitsonar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: "#0a66c2", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: dark ? "#161b22" : "#ffffff", borderRadius: 20, border: "none", padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: textPrimary, marginBottom: 28 }}>Send a Message</h3>

            {formSubmitted && (
              <div style={{ background: "rgba(6,182,212,0.12)", border: "1.5px solid rgba(6,182,212,0.4)", borderRadius: 10, padding: "14px 18px", marginBottom: 20, color: "#06b6d4", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Message sent! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </span>
                  <input type="text" placeholder="Your Name" value={formData.name}
                    onChange={e => { setFormData(p => ({ ...p, name: e.target.value })); setFormErrors(p => ({ ...p, name: "" })) }}
                    style={{ width: "100%", padding: "14px 16px 14px 44px", borderRadius: 10, border: `1.5px solid ${formErrors.name ? "#ef4444" : borderColor}`, backgroundColor: dark ? "#0d1117" : "#f9fafb", fontSize: 15, color: textPrimary, outline: "none", boxSizing: "border-box", transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                    onFocus={e => { e.currentTarget.style.borderColor = formErrors.name ? "#ef4444" : "#06b6d4"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.12)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = formErrors.name ? "#ef4444" : borderColor; e.currentTarget.style.boxShadow = "none" }}
                  />
                </div>
                {formErrors.name && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 5, marginLeft: 4 }}>{formErrors.name}</p>}
              </div>

              <div>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </span>
                  <input type="email" placeholder="Your Email" value={formData.email}
                    onChange={e => { setFormData(p => ({ ...p, email: e.target.value })); setFormErrors(p => ({ ...p, email: "" })) }}
                    style={{ width: "100%", padding: "14px 16px 14px 44px", borderRadius: 10, border: `1.5px solid ${formErrors.email ? "#ef4444" : borderColor}`, backgroundColor: dark ? "#0d1117" : "#f9fafb", fontSize: 15, color: textPrimary, outline: "none", boxSizing: "border-box", transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                    onFocus={e => { e.currentTarget.style.borderColor = formErrors.email ? "#ef4444" : "#06b6d4"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.12)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = formErrors.email ? "#ef4444" : borderColor; e.currentTarget.style.boxShadow = "none" }}
                  />
                </div>
                {formErrors.email && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 5, marginLeft: 4 }}>{formErrors.email}</p>}
              </div>

              <div>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 16, top: 16, color: "#9ca3af" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </span>
                  <textarea rows={6} placeholder="Your Message" value={formData.message}
                    onChange={e => { setFormData(p => ({ ...p, message: e.target.value })); setFormErrors(p => ({ ...p, message: "" })) }}
                    style={{ width: "100%", padding: "14px 16px 14px 44px", borderRadius: 10, border: `1.5px solid ${formErrors.message ? "#ef4444" : borderColor}`, backgroundColor: dark ? "#0d1117" : "#f9fafb", fontSize: 15, color: textPrimary, outline: "none", resize: "none", boxSizing: "border-box", transition: "background-color 650ms cubic-bezier(0.22, 1, 0.36, 1), color 650ms cubic-bezier(0.22, 1, 0.36, 1), border-color 650ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                    onFocus={e => { e.currentTarget.style.borderColor = formErrors.message ? "#ef4444" : "#06b6d4"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.12)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = formErrors.message ? "#ef4444" : borderColor; e.currentTarget.style.boxShadow = "none" }}
                  />
                </div>
                {formErrors.message && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 5, marginLeft: 4 }}>{formErrors.message}</p>}
              </div>

              <button type="submit"
                style={{ width: "100%", padding: "15px", borderRadius: 10, border: "none", background: "linear-gradient(90deg, #06b6d4, #ec4899)", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s, transform 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)" }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
