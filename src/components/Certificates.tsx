import { useState } from "react"
import { certificates, type Certificate } from "@/data/certificates"

function CertificateCard({ certificate, dark, isDuplicate = false }: { certificate: Certificate; dark: boolean; isDuplicate?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [imageHovered, setImageHovered] = useState(false)

  const cardBg = dark ? "#161b22" : "#ffffff"
  const imageBg = dark ? "#0d1117" : "#f8fafc"
  const titleColor = dark ? "#f1f5f9" : "#111827"
  const textColor = dark ? "#cbd5e1" : "#374151"
  const mutedColor = dark ? "#94a3b8" : "#6b7280"
  const borderColor = dark ? "#30363d" : "#e2e8f0"
  const buttonBg = dark ? "rgba(255,255,255,0.06)" : "#f9fafb"
  const buttonColor = dark ? "#f1f5f9" : "#374151"
  const hasMeta = certificate.issued || certificate.credentialId

  return (
    <article
      className={`certificate-card${isDuplicate ? " certificate-card-duplicate" : ""}`}
      aria-hidden={isDuplicate || undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        boxShadow: hovered
          ? "0 0 0 2px rgba(6,182,212,0.45), 0 0 26px rgba(6,182,212,0.16), 0 22px 48px rgba(0,0,0,0.14)"
          : dark ? "0 6px 28px rgba(0,0,0,0.32)" : "0 6px 28px rgba(0,0,0,0.07)",
      }}
    >
      <div
        className="certificate-image-wrap"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
        style={{
          backgroundColor: imageBg,
          boxShadow: dark ? "0 2px 12px rgba(0,0,0,0.26)" : "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            transform: imageHovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.45s ease",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "1rem", minHeight: 0 }}>
        <span
          style={{
            alignSelf: "flex-start",
            backgroundColor: dark ? "rgba(6,182,212,0.14)" : "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.28)",
            borderRadius: 20,
            color: "#06b6d4",
            fontSize: 11,
            fontWeight: 800,
            padding: "3px 9px",
            marginBottom: 9,
          }}
        >
          {certificate.type}
        </span>

        <h3 style={{ color: titleColor, fontSize: 17, fontWeight: 800, lineHeight: 1.32, marginBottom: 8 }}>
          {certificate.title}
        </h3>

        <p style={{ color: mutedColor, fontSize: 13, fontWeight: 600, lineHeight: 1.45, marginBottom: 10 }}>
          {certificate.issuer}
        </p>

        {hasMeta ? (
          <div className="certificate-meta">
            {certificate.issued ? (
              <p>
                <span style={{ color: mutedColor }}>Issued:</span>
                <strong style={{ color: textColor }}>{certificate.issued}</strong>
              </p>
            ) : null}
            {certificate.credentialId ? (
              <p>
                <span style={{ color: mutedColor }}>Credential ID:</span>
                <strong style={{ color: textColor }}>{certificate.credentialId}</strong>
              </p>
            ) : null}
          </div>
        ) : null}

        {certificate.credentialUrl ? (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isDuplicate ? -1 : undefined}
            className="certificate-link"
            style={{
              borderColor: dark ? "rgba(255,255,255,0.18)" : "#d1d5db",
              backgroundColor: buttonBg,
              color: buttonColor,
            }}
          >
            View Credential
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <span
            className="certificate-link certificate-link-disabled"
            aria-disabled="true"
            style={{
              borderColor: dark ? "rgba(255,255,255,0.12)" : "#e5e7eb",
              backgroundColor: buttonBg,
              color: mutedColor,
            }}
          >
            View Credential
          </span>
        )}
      </div>
    </article>
  )
}

export default function Certificates({ dark }: { dark: boolean }) {
  const textSecondary = dark ? "#94a3b8" : "#6b7280"

  return (
    <section id="certificates" className="section-pad scroll-reveal" style={{ backgroundColor: dark ? "#0d1117" : "#f3f4f6" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 className="h-section-lg" style={{ marginBottom: 14 }}>
            <span style={{ color: "#06b6d4" }}>My </span>
            <span style={{ color: dark ? "#94a3b8" : "#9ca3af" }}>Certificates</span>
          </h2>
          <p style={{ fontSize: 15, color: textSecondary, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Verified learning, participation, and achievement highlights from my development journey.
          </p>
        </div>

        <div className="certificates-track" aria-label="Certificates carousel">
          <div className="certificates-loop">
            <div className="certificates-group">
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={`${certificate.title}-${certificate.issuer}-${index}`}
                  certificate={certificate}
                  dark={dark}
                />
              ))}
            </div>
            <div className="certificates-group certificates-group-duplicate" aria-hidden="true">
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={`${certificate.title}-${certificate.issuer}-duplicate-${index}`}
                  certificate={certificate}
                  dark={dark}
                  isDuplicate
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
