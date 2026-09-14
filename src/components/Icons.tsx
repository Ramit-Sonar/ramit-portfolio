import type { ReactElement } from "react"
import type { TechIconName } from "@/data/portfolio"

export function TechIcon({ icon }: { icon: TechIconName }) {
  const icons: Record<TechIconName, ReactElement> = {
    js: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#F7DF1E" /><path d="M9.5 25.5l2.1-1.3c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.6V16h2.6v7.9c0 2.7-1.6 3.9-3.9 3.9-2.1 0-3.3-1.1-3.9-2.3zm7.5-.3l2.1-1.2c.5.9 1.2 1.5 2.4 1.5 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-2 1.3c-.4-.7-.9-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.4l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.3 0-3.7-1.1-4.7-2.5z" fill="#000" /></svg>,
    c: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="14" fill="#00599C" /><path d="M20 12.5c-.9-1-2.1-1.5-3.5-1.5-2.8 0-5 2.2-5 5s2.2 5 5 5c1.4 0 2.6-.5 3.5-1.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>,
    java: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M12.5 22.5s-1 .6.7.8c2.1.2 3.1.2 5.4-.2 0 0 .6.4 1.4.7-5 2.1-11.3-.1-7.5-1.3zm-.7-2.8s-1.1.8.6.9c2.2.2 3.9.2 6.9-.3 0 0 .4.4 1.1.6-6.1 1.8-12.9.1-8.6-1.2z" fill="#EA2D2E" /><path d="M17.3 13.5c1.2 1.4.4 2.7.4 2.7s3.3-1.7 1.8-3.8c-1.4-2-2.5-3 3.4-6.4 0 0-9.3 2.3-5.6 7.5z" fill="#EA2D2E" /><path d="M23.6 24.5s.7.6-.8.9c-2.9.9-12 1.2-14.5.1-.9-.4.8-.9.8-.9l-.7-.5s-3.3 1-2.3 2.1c2.6 1.1 14.1.9 17.6-1.1l-.1-.6zm-11.1-8s-4.2 1-1.5 1.4c1.1.2 3.4.1 5.5-.1 1.7-.2 3.5-.5 3.5-.5s-1.2.5-2.1.9c-8.4 2.2-12.3.1-10.2-.8 1.7-.8 4.8-1 4.8-.9z" fill="#EA2D2E" /><path d="M21.5 19.8c8.5-4.4 4.6-8.7 1.8-8.1-.7.1-1 .3-1 .3s.3-.4.8-.6c5.7-2 10.1 5.9-1.8 9-.1 0 .1-.2.2-.6z" fill="#EA2D2E" /><path d="M18.7 3s2.4 2.4-2.3 6c-3.8 3-1 4.3 0 6-2-1.8-3.5-3.4-2.5-4.8 1.4-2.2 5.4-3.3 4.8-7.2z" fill="#EA2D2E" /><path d="M13.2 27.8c8.2.5 20.7-.3 21-3.7 0 0-.6 1.5-6.7 2.6-6.9 1.3-15.4 1.1-20.4.3 0 0 1 .9 6.1.8z" fill="#EA2D2E" /></svg>,
    python: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M15.9 3C10.3 3 10.7 5.4 10.7 5.4V8h5.4v1H7.4S4 8.6 4 14.3s3 5.7 3 5.7H9v-2.7s-.1-3 3-3h5.1s2.9.1 2.9-2.8V6c0 0 .4-3-4.1-3zm-1.6 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" /><path d="M16.1 29c5.6 0 5.2-2.4 5.2-2.4v-2.6h-5.4v-1h8.7s3.4.3 3.4-5.4-3-5.7-3-5.7H23v2.7s.1 3-3 3h-5.1s-2.9-.1-2.9 2.8v4.5s-.4 3 4.1 3zm1.6-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD343" /></svg>,
    cpp: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="14" fill="#00599C" /><text x="7" y="21" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">C++</text></svg>,
    mysql: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M3 20.5c3.5 0 6-1.5 6-1.5s.5 2.5 3.5 2.5c2 0 3-1 3-1s.5 3 4 3c3 0 5-2.5 5-2.5s.5 1.5 4.5 1.5" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" /><text x="5" y="14" fontFamily="Arial" fontWeight="bold" fontSize="7" fill="#00758F">MySQL</text></svg>,
    html: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M5 3l1.9 21.4L16 27l9.1-2.6L27 3H5z" fill="#E44D26" /><path d="M16 25.1l7.4-2.1 1.6-17.8H16v19.9z" fill="#F16529" /><path d="M16 13.4h-3.9l-.3-3.1H16V7.2H8.6l.1.9.9 10.4H16v-5.1zm0 8.3l-.1.1-3.1-.8-.2-2.3H9.4l.4 4.5 6.2 1.7v-3.2z" fill="#EBEBEB" /><path d="M16 13.4v5.1h3.6l-.3 3.2-3.3.9v3.2l6.2-1.7.9-10.7H16zm0-6.2v3.1h7l-.1-1.2-.2-1.9H16z" fill="#fff" /></svg>,
    css: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M5 3l1.9 21.4L16 27l9.1-2.6L27 3H5z" fill="#1572B6" /><path d="M16 25.1l7.4-2.1 1.6-17.8H16v19.9z" fill="#33A9DC" /><path d="M16 13.4H9.9l.2 2.3H16v-2.3zm-5.7-3.9l.2 2.3H16V9.5H10.3zm5.7 9.2h-.1l-2.8-.8-.2-2H10.4l.4 4.1 5.2 1.5v-2.8z" fill="#EBEBEB" /><path d="M16 15.7h3.4l-.3 3.5-3.1.9v2.8l5.2-1.5 1.3-14.9H16v2.9h6.3l-.2 2.3H16v2.3z" fill="#fff" /></svg>,
    react: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="3" fill="#61DAFB" /><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" /><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" /></svg>,
    node: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#539E43" /><path d="M16 8v16M10 11l6 5 6-5M10 21l6-5 6 5" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    express: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="4" fill="#000" /><text x="4" y="22" fontFamily="Arial" fontWeight="bold" fontSize="11" fill="white">ex</text></svg>,
    reactnative: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="3" fill="#61DAFB" /><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" /><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" /></svg>,
    mongodb: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M16 3C10 3 8 10 8 16s2.5 11.5 8 13c5.5-1.5 8-7 8-13S22 3 16 3z" fill="#47A248" /><path d="M16 6v20" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>,
    git: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M29.5 14.5l-12-12a2 2 0 00-2.8 0l-2.8 2.8 3.5 3.5a2.4 2.4 0 013 3l3.4 3.4a2.4 2.4 0 11-1.4 1.4l-3.2-3.2V21a2.4 2.4 0 11-2 0v-5.7a2.4 2.4 0 01-1.3-3.1L9.4 8.7 2.5 15.7a2 2 0 000 2.8l12 12a2 2 0 002.8 0l12.2-12.2a2 2 0 000-2.8z" fill="#F05032" /></svg>,
    docker: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="4" fill="#2496ED" /><path d="M8 17h3v-3H8v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm-8-4h3v-3H8v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm-4-4h3V6h-3v3z" fill="white" /><path d="M27 16s-1-1.5-3.5-1c-.3-1.8-1.8-2.5-1.8-2.5s-1.2 2.5.5 4.5c-1 .5-2.7.5-2.7.5H5s-.5 4 4 5h14s5-1 4-6.5z" fill="white" /></svg>,
    postman: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="14" fill="#FF6C37" /><path d="M22 16l-8 5V11l8 5z" fill="white" /></svg>,
    vscode: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M23.5 3L12.5 14 6 8.5 3 11l9.5 5L3 21l3 2.5 6.5-5.5 11 11 3.5-1.5V4.5L23.5 3z" fill="#007ACC" /></svg>,
    visualstudio: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M1 10.5L8 4l7 6.5V28L8 23 1 28V10.5z" fill="#68217A" /><path d="M8 4l16 8v8L8 28V4z" fill="#68217A" /><path d="M8 4l16 8-16 8V4z" fill="#9B4F96" /><path d="M8 4L1 10.5V28L8 23V4z" fill="#B179C1" /><path d="M24 12l7 4-7 4V12z" fill="#68217A" /></svg>,
    figma: <svg viewBox="0 0 32 32" width="18" height="18"><rect x="8" y="2" width="8" height="8" rx="4" fill="#F24E1E" /><rect x="16" y="2" width="8" height="8" rx="4" fill="#FF7262" /><rect x="8" y="10" width="8" height="8" rx="4" fill="#A259FF" /><rect x="8" y="18" width="8" height="8" rx="4" fill="#0ACF83" /><circle cx="20" cy="14" r="4" fill="#1ABCFE" /></svg>,
    django: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#092E20" /><path d="M17 6h3v14.5c0 3.5-1.6 5-4.5 5-1.4 0-2.6-.3-3.5-.8l.7-2.3c.7.4 1.5.6 2.3.6 1.2 0 2-.6 2-2.5V6zM12 11h3v10.3c0 .2 0 .4-.1.6-.5 1.2-1.8 1.9-3.4 1.9-2.4 0-4-1.5-4-3.8 0-2.4 1.7-3.9 4-3.9.5 0 .9.1 1.3.2V11h-1zm0 7.1c-.3-.1-.6-.2-1-.2-1.1 0-1.9.7-1.9 1.8s.7 1.8 1.8 1.8c.5 0 .9-.1 1.1-.3v-3.1z" fill="#44B78B" /></svg>,
    postgresql: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#336791" /><path d="M21.5 8.5c-1.2-.7-2.5-1-3.8-.9-1-.1-1.8.1-2.5.4-.4-.2-.9-.3-1.4-.3-2.1 0-3.5 1.6-3.5 1.6S8 10.8 8 14c0 2.5 1.2 4.5 2.5 4.5.6 0 1.2-.4 1.8-1.4 0 0 .7 1 2 1 .2 0 .4 0 .6-.1 0 .6-.1 1-.1 1.3 0 .9.3 1.5 1.2 1.7.2.1.5.1.7.1 1.8 0 2.3-1.5 2.3-2.5 0-.3 0-.7-.1-1.1.3.1.6.1.9.1 1.8 0 3-1.5 3-3.5 0-.5-.1-1-.2-1.4.7-.6 1.1-1.6 1.1-2.8 0-.9-.3-1.7-.2-1.4zm-5.3 9.3c0 .5-.2 1.2-.8 1.2-.2 0-.3-.1-.4-.2.1-.5.2-1.1.2-1.8 0-.1 0-.3-.1-.4.1 0 .3-.1.4-.1.4 0 .7.5.7 1.3zm-3.1-1.3c-.5.8-1 1.5-1.6 1.5-.8 0-1.5-1.4-1.5-3.5 0-2.6 1-3.8 2-3.8.3 0 .6.1.9.3-.1.8-.2 1.6-.2 2.4 0 1.2.1 2.2.4 3.1zm4.1-2.3c-.2 0-.5 0-.7-.1 0-.5.1-1 .1-1.5 0-.7-.1-1.3-.3-1.8.4-.2.8-.3 1.2-.3 1.1 0 1.8 1 1.8 2.2 0 .9-.5 1.5-1.1 1.5z" fill="white" /></svg>,
  }

  return icons[icon]
}

export function MoonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
