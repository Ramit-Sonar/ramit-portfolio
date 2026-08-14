import { useState, useEffect, type ReactElement } from 'react'
import profilePhoto from '@/imports/image-1.png'
import skillBridgeImg from '@/imports/_26CEB2F6-4A23-4003-928D-6DA43E7CE97A_.png'
import queueLessImg from '@/imports/_DC194AAF-DD29-4019-A53C-C6B7D9E3D07C_.png'

// ─── Data ────────────────────────────────────────────────────────────────────

const TECH_STACK = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'C', icon: 'c' },
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cpp' },
      { name: 'SQL', icon: 'mysql' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', icon: 'reactnative' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Visual Studio', icon: 'visualstudio' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
]

const PROJECTS = [
  {
    title: 'SkillBridge',
    description: 'SkillBridge is a student micro-work platform that connects students with clients for real-world projects, managing the complete workflow from job posting and application to project completion and review.',
    image: skillBridgeImg,
    tags: ['react', 'node', 'mongodb', 'express', 'js', 'ts'],
    tagLabels: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript'],
    features: ['Job & Application Management', 'Application-to-Project Workflow', 'Deliverable & Revision Tracking', 'Verification & Review System'],
    demoLink: 'https://skill-bridge-hazel-rho.vercel.app/',
    codeLink: 'https://github.com/Ramit-Sonar/SkillBridge.git',
  },
  {
    title: 'QueueLess Nepal',
    description: 'A digital queue and token management system that allows users to take tokens online, track live queue status, and reduce unnecessary physical waiting in service-based organizations.',
    image: queueLessImg,
    tags: ['django', 'postgresql', 'html', 'css', 'js'],
    tagLabels: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Digital token generation', 'Live queue tracking', 'Staff queue management', 'English ⇄ नेपाली language support'],
    demoLink: '#',
    codeLink: 'https://github.com/Ramit-Sonar/queueless-nepal.git',
  },
]


// ─── Icons ───────────────────────────────────────────────────────────────────

function TechIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactElement> = {
    js: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><path d="M9.5 25.5l2.1-1.3c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.6V16h2.6v7.9c0 2.7-1.6 3.9-3.9 3.9-2.1 0-3.3-1.1-3.9-2.3zm7.5-.3l2.1-1.2c.5.9 1.2 1.5 2.4 1.5 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-2 1.3c-.4-.7-.9-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.4l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.3 0-3.7-1.1-4.7-2.5z" fill="#000"/></svg>,
    ts: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#3178C6"/><path d="M18.6 22.4v2.4c.4.2.9.4 1.4.5.6.1 1.1.2 1.7.2.6 0 1.1-.1 1.6-.2.5-.1 1-.3 1.4-.6.4-.3.7-.6.9-1.1.2-.4.3-1 .3-1.6 0-.5-.1-.9-.2-1.2-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.7-.4-.2-.9-.4-1.4-.6-.4-.1-.7-.3-1-.4-.3-.1-.5-.2-.7-.4-.2-.1-.3-.3-.4-.4-.1-.2-.1-.3-.1-.5 0-.2 0-.3.1-.5.1-.1.2-.3.3-.4.1-.1.3-.2.5-.2.2-.1.4-.1.7-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.6.3.2.1.3.3.5.4v-2.3c-.4-.1-.8-.2-1.2-.3-.4-.1-.9-.1-1.4-.1-.6 0-1.1.1-1.6.2-.5.1-.9.3-1.3.6-.4.3-.7.6-.9 1-.2.4-.3.9-.3 1.5 0 .8.2 1.4.6 1.9.4.5 1 .9 1.9 1.2.4.2.8.3 1.1.4.3.1.6.3.8.4.2.1.4.3.5.5.1.2.2.4.2.6 0 .2 0 .3-.1.5-.1.2-.2.3-.3.4-.2.1-.3.2-.5.3-.2.1-.5.1-.7.1-.5 0-1-.1-1.5-.3-.4-.3-.8-.6-1.1-.9zM14.4 17.4H17v-2.1H9v2.1h2.6V26h2.8v-8.6z" fill="#fff"/></svg>,
    dart: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M6.4 6.8L2 11.2l6.4 6.4 4-4.4-6-6.4z" fill="#54C5F8"/><path d="M2 11.2v9.6l6.4 6.4V17.6L2 11.2z" fill="#01579B"/><path d="M8.4 27.2l4.4-4.4h9.6l-6 6-8-1.6z" fill="#29B6F6"/><path d="M22.4 22.8l3.2-3.2V9.6l-6.4-6.4H9.6L6.4 6.8l16 16z" fill="#01579B"/><path d="M12.8 22.8h9.6l3.2-3.2-12.8-.4v3.6z" fill="#54C5F8"/><path d="M8.4 4.8L12.8 3.2h6.4l3.2 6.4-14.4-1.6.4-3.2z" fill="#29B6F6"/></svg>,
    c: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="14" fill="#00599C"/><path d="M20 12.5c-.9-1-2.1-1.5-3.5-1.5-2.8 0-5 2.2-5 5s2.2 5 5 5c1.4 0 2.6-.5 3.5-1.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>,
    java: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M12.5 22.5s-1 .6.7.8c2.1.2 3.1.2 5.4-.2 0 0 .6.4 1.4.7-5 2.1-11.3-.1-7.5-1.3zm-.7-2.8s-1.1.8.6.9c2.2.2 3.9.2 6.9-.3 0 0 .4.4 1.1.6-6.1 1.8-12.9.1-8.6-1.2z" fill="#EA2D2E"/><path d="M17.3 13.5c1.2 1.4.4 2.7.4 2.7s3.3-1.7 1.8-3.8c-1.4-2-2.5-3 3.4-6.4 0 0-9.3 2.3-5.6 7.5z" fill="#EA2D2E"/><path d="M23.6 24.5s.7.6-.8.9c-2.9.9-12 1.2-14.5.1-.9-.4.8-.9.8-.9l-.7-.5s-3.3 1-2.3 2.1c2.6 1.1 14.1.9 17.6-1.1l-.1-.6zm-11.1-8s-4.2 1-1.5 1.4c1.1.2 3.4.1 5.5-.1 1.7-.2 3.5-.5 3.5-.5s-1.2.5-2.1.9c-8.4 2.2-12.3.1-10.2-.8 1.7-.8 4.8-1 4.8-.9z" fill="#EA2D2E"/><path d="M21.5 19.8c8.5-4.4 4.6-8.7 1.8-8.1-.7.1-1 .3-1 .3s.3-.4.8-.6c5.7-2 10.1 5.9-1.8 9-.1 0 .1-.2.2-.6z" fill="#EA2D2E"/><path d="M18.7 3s2.4 2.4-2.3 6c-3.8 3-1 4.3 0 6-2-1.8-3.5-3.4-2.5-4.8 1.4-2.2 5.4-3.3 4.8-7.2z" fill="#EA2D2E"/><path d="M13.2 27.8c8.2.5 20.7-.3 21-3.7 0 0-.6 1.5-6.7 2.6-6.9 1.3-15.4 1.1-20.4.3 0 0 1 .9 6.1.8z" fill="#EA2D2E"/></svg>,
    python: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M15.9 3C10.3 3 10.7 5.4 10.7 5.4V8h5.4v1H7.4S4 8.6 4 14.3s3 5.7 3 5.7H9v-2.7s-.1-3 3-3h5.1s2.9.1 2.9-2.8V6c0 0 .4-3-4.1-3zm-1.6 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB"/><path d="M16.1 29c5.6 0 5.2-2.4 5.2-2.4v-2.6h-5.4v-1h8.7s3.4.3 3.4-5.4-3-5.7-3-5.7H23v2.7s.1 3-3 3h-5.1s-2.9-.1-2.9 2.8v4.5s-.4 3 4.1 3zm1.6-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD343"/></svg>,
    cpp: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="14" fill="#00599C"/><text x="7" y="21" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">C++</text></svg>,
    docker: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="4" fill="#2496ED"/><path d="M8 17h3v-3H8v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm-8-4h3v-3H8v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm4 0h3v-3h-3v3zm-4-4h3V6h-3v3z" fill="white"/><path d="M27 16s-1-1.5-3.5-1c-.3-1.8-1.8-2.5-1.8-2.5s-1.2 2.5.5 4.5c-1 .5-2.7.5-2.7.5H5s-.5 4 4 5h14s5-1 4-6.5z" fill="white"/></svg>,
    html: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M5 3l1.9 21.4L16 27l9.1-2.6L27 3H5z" fill="#E44D26"/><path d="M16 25.1l7.4-2.1 1.6-17.8H16v19.9z" fill="#F16529"/><path d="M16 13.4h-3.9l-.3-3.1H16V7.2H8.6l.1.9.9 10.4H16v-5.1zm0 8.3l-.1.1-3.1-.8-.2-2.3H9.4l.4 4.5 6.2 1.7v-3.2z" fill="#EBEBEB"/><path d="M16 13.4v5.1h3.6l-.3 3.2-3.3.9v3.2l6.2-1.7.9-10.7H16zm0-6.2v3.1h7l-.1-1.2-.2-1.9H16z" fill="#fff"/></svg>,
    css: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M5 3l1.9 21.4L16 27l9.1-2.6L27 3H5z" fill="#1572B6"/><path d="M16 25.1l7.4-2.1 1.6-17.8H16v19.9z" fill="#33A9DC"/><path d="M16 13.4H9.9l.2 2.3H16v-2.3zm-5.7-3.9l.2 2.3H16V9.5H10.3zm5.7 9.2h-.1l-2.8-.8-.2-2H10.4l.4 4.1 5.2 1.5v-2.8z" fill="#EBEBEB"/><path d="M16 15.7h3.4l-.3 3.5-3.1.9v2.8l5.2-1.5 1.3-14.9H16v2.9h6.3l-.2 2.3H16v2.3z" fill="#fff"/></svg>,
    react: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg>,
    vue: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M16 28L2 4h6l8 14 8-14h6L16 28z" fill="#42B883"/><path d="M16 28l-8-14h4l4 7 4-7h4L16 28z" fill="#35495E"/></svg>,
    node: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#539E43"/><path d="M16 8v16M10 11l6 5 6-5M10 21l6-5 6 5" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    express: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="4" fill="#000"/><text x="4" y="22" fontFamily="Arial" fontWeight="bold" fontSize="11" fill="white">ex</text></svg>,
    flutter: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M13.9 2L4 12l4.2 4.2 14-14H13.9z" fill="#54C5F8"/><path d="M4 12l9.9 9.9-4.2 4.2L4 20.4V12z" fill="#01579B"/><path d="M13.9 21.9L18.1 26.1H27.9L18.1 16.1l-4.2 5.8z" fill="#29B6F6"/><path d="M13.9 21.9l4.2-5.8 4.2 4.2-4.2 5.8-4.2-4.2z" fill="#01579B" opacity=".4"/></svg>,
    reactnative: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg>,
    mongodb: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M16 3C10 3 8 10 8 16s2.5 11.5 8 13c5.5-1.5 8-7 8-13S22 3 16 3z" fill="#47A248"/><path d="M16 6v20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
    mysql: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M3 20.5c3.5 0 6-1.5 6-1.5s.5 2.5 3.5 2.5c2 0 3-1 3-1s.5 3 4 3c3 0 5-2.5 5-2.5s.5 1.5 4.5 1.5" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round"/><text x="5" y="14" fontFamily="Arial" fontWeight="bold" fontSize="7" fill="#00758F">MySQL</text></svg>,
    git: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M29.5 14.5l-12-12a2 2 0 00-2.8 0l-2.8 2.8 3.5 3.5a2.4 2.4 0 013 3l3.4 3.4a2.4 2.4 0 11-1.4 1.4l-3.2-3.2V21a2.4 2.4 0 11-2 0v-5.7a2.4 2.4 0 01-1.3-3.1L9.4 8.7 2.5 15.7a2 2 0 000 2.8l12 12a2 2 0 002.8 0l12.2-12.2a2 2 0 000-2.8z" fill="#F05032"/></svg>,
    firebase: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M6 26l4.5-16 4.5 8L19 8l7 18H6z" fill="#FFA000"/><path d="M6 26l4.5-16 4.5 8 1-1.8L19 8l7 18H6z" fill="#F57F17" opacity=".6"/><path d="M6 26l10-7 10 7H6z" fill="#FFCA28"/></svg>,
    postman: <svg viewBox="0 0 32 32" width="18" height="18"><circle cx="16" cy="16" r="14" fill="#FF6C37"/><path d="M22 16l-8 5V11l8 5z" fill="white"/></svg>,
    vscode: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M23.5 3L12.5 14 6 8.5 3 11l9.5 5L3 21l3 2.5 6.5-5.5 11 11 3.5-1.5V4.5L23.5 3z" fill="#007ACC"/></svg>,
    visualstudio: <svg viewBox="0 0 32 32" width="18" height="18"><path d="M1 10.5L8 4l7 6.5V28L8 23 1 28V10.5z" fill="#68217A"/><path d="M8 4l16 8v8L8 28V4z" fill="#68217A"/><path d="M8 4l16 8-16 8V4z" fill="#9B4F96"/><path d="M8 4L1 10.5V28L8 23V4z" fill="#B179C1"/><path d="M24 12l7 4-7 4V12z" fill="#68217A"/></svg>,
    figma: <svg viewBox="0 0 32 32" width="18" height="18"><rect x="8" y="2" width="8" height="8" rx="4" fill="#F24E1E"/><rect x="16" y="2" width="8" height="8" rx="4" fill="#FF7262"/><rect x="8" y="10" width="8" height="8" rx="4" fill="#A259FF"/><rect x="8" y="18" width="8" height="8" rx="4" fill="#0ACF83"/><circle cx="20" cy="14" r="4" fill="#1ABCFE"/></svg>,
    django: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#092E20"/><path d="M17 6h3v14.5c0 3.5-1.6 5-4.5 5-1.4 0-2.6-.3-3.5-.8l.7-2.3c.7.4 1.5.6 2.3.6 1.2 0 2-.6 2-2.5V6zM12 11h3v10.3c0 .2 0 .4-.1.6-.5 1.2-1.8 1.9-3.4 1.9-2.4 0-4-1.5-4-3.8 0-2.4 1.7-3.9 4-3.9.5 0 .9.1 1.3.2V11h-1zm0 7.1c-.3-.1-.6-.2-1-.2-1.1 0-1.9.7-1.9 1.8s.7 1.8 1.8 1.8c.5 0 .9-.1 1.1-.3v-3.1z" fill="#44B78B"/></svg>,
    postgresql: <svg viewBox="0 0 32 32" width="18" height="18"><rect width="32" height="32" rx="3" fill="#336791"/><path d="M21.5 8.5c-1.2-.7-2.5-1-3.8-.9-1-.1-1.8.1-2.5.4-.4-.2-.9-.3-1.4-.3-2.1 0-3.5 1.6-3.5 1.6S8 10.8 8 14c0 2.5 1.2 4.5 2.5 4.5.6 0 1.2-.4 1.8-1.4 0 0 .7 1 2 1 .2 0 .4 0 .6-.1 0 .6-.1 1-.1 1.3 0 .9.3 1.5 1.2 1.7.2.1.5.1.7.1 1.8 0 2.3-1.5 2.3-2.5 0-.3 0-.7-.1-1.1.3.1.6.1.9.1 1.8 0 3-1.5 3-3.5 0-.5-.1-1-.2-1.4.7-.6 1.1-1.6 1.1-2.8 0-.9-.3-1.7-.2-1.4zm-5.3 9.3c0 .5-.2 1.2-.8 1.2-.2 0-.3-.1-.4-.2.1-.5.2-1.1.2-1.8 0-.1 0-.3-.1-.4.1 0 .3-.1.4-.1.4 0 .7.5.7 1.3zm-3.1-1.3c-.5.8-1 1.5-1.6 1.5-.8 0-1.5-1.4-1.5-3.5 0-2.6 1-3.8 2-3.8.3 0 .6.1.9.3-.1.8-.2 1.6-.2 2.4 0 1.2.1 2.2.4 3.1zm4.1-2.3c-.2 0-.5 0-.7-.1 0-.5.1-1 .1-1.5 0-.7-.1-1.3-.3-1.8.4-.2.8-.3 1.2-.3 1.1 0 1.8 1 1.8 2.2 0 .9-.5 1.5-1.1 1.5z" fill="white"/></svg>,
  }
  return icons[icon] ?? <span style={{ fontSize: 16 }}>●</span>
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ─── Skill Card ───────────────────────────────────────────────────────────────

function SkillChip({ item, dark }: { item: { name: string; icon: string }; dark: boolean }) {
  const [chipHovered, setChipHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setChipHovered(true)}
      onMouseLeave={() => setChipHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: chipHovered
          ? (dark ? '#0d1117' : '#ffffff')
          : (dark ? '#0d1117' : '#f8fafc'),
        border: chipHovered
          ? '1.5px solid rgba(6,182,212,0.7)'
          : (dark ? '1px solid #21262d' : '1px solid #e2e8f0'),
        borderRadius: 10,
        padding: '0.6rem 0.85rem',
        fontSize: 14.5,
        fontWeight: 500,
        color: dark ? '#cbd5e1' : '#374151',
        transition: 'border 0.2s ease, box-shadow 0.2s ease',
        boxShadow: chipHovered ? '0 0 0 3px rgba(6,182,212,0.15)' : 'none',
        cursor: 'default',
      }}
    >
      <TechIcon icon={item.icon} />
      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {item.name}
      </span>
    </div>
  )
}

function SkillCard({ group, dark }: { group: typeof TECH_STACK[0]; dark: boolean }) {
  const [hovered, setHovered] = useState(false)

  const cardBase = dark ? '#161b22' : '#ffffff'
  const cardHover = dark
    ? 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(124,58,237,0.1) 100%)'
    : 'linear-gradient(135deg, rgba(236,72,153,0.07) 0%, rgba(124,58,237,0.07) 100%)'
  const shadow = hovered
    ? '0 0 0 2px rgba(6,182,212,0.5), 0 0 22px rgba(6,182,212,0.22), 0 20px 48px rgba(0,0,0,0.25)'
    : dark
      ? '0 6px 28px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)'
      : '0 6px 28px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
        border: dark ? '1px solid #30363d' : 'none',
        boxShadow: shadow,
        transition: 'box-shadow 0.3s ease, background 0.3s ease',
        background: hovered ? cardHover : cardBase,
      }}
    >
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#2563EB', marginBottom: '1.2rem' }}>
        {group.category}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
        {group.items.map((item) => (
          <SkillChip key={item.name} item={item} dark={dark} />
        ))}
      </div>
    </div>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, dark }: { project: typeof PROJECTS[0]; dark: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)

  const cardBg = dark ? '#0d1117' : '#ffffff'
  const imgBg   = dark ? '#0d1117' : '#f1f5f9'
  const titleColor = dark ? '#f1f5f9' : '#111827'
  const descColor  = dark ? '#94a3b8' : '#6b7280'
  const labelColor = dark ? '#cbd5e1' : '#374151'
  const featBg     = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'
  const featBorder = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)'
  const featColor  = dark ? '#94a3b8' : '#4b5563'
  const btnBorder  = dark ? 'rgba(255,255,255,0.18)' : '#d1d5db'
  const btnBg      = dark ? 'rgba(255,255,255,0.06)' : '#f9fafb'
  const btnColor   = dark ? '#f1f5f9' : '#374151'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card-h"
      style={{
        backgroundColor: cardBg,
        borderRadius: 20,
        overflow: 'hidden',
        border: dark ? '1px solid #30363d' : '1px solid #e2e8f0',
        boxShadow: hovered
          ? '0 0 0 2px rgba(6,182,212,0.5), 0 0 28px rgba(6,182,212,0.18), 0 24px 56px rgba(0,0,0,0.12)'
          : dark ? '0 4px 24px rgba(0,0,0,0.22)' : '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.35s ease',
        display: 'grid',
        gridTemplateColumns: '42% 1fr',
      }}
    >
      {/* Left — image */}
      <div
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: imgBg, minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', margin: '10px 0 10px 10px', boxShadow: dark ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 12px rgba(0,0,0,0.08)' }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        {project.image ? (
          <img
            src={project.image as string}
            alt={project.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'contain', objectPosition: 'center',
              transition: 'transform 0.45s ease',
              transform: imgHovered ? 'scale(1.05)' : 'scale(1)',
              display: 'block',
              borderRadius: '14px',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%', minHeight: 280,
            background: dark ? 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)' : 'linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
            flexWrap: 'wrap', padding: '2rem',
          }}>
            <svg width="56" height="56" viewBox="0 0 32 32"><path d="M13.9 2L4 12l4.2 4.2 14-14H13.9z" fill="#54C5F8"/><path d="M4 12l9.9 9.9-4.2 4.2L4 20.4V12z" fill="#01579B"/><path d="M13.9 21.9L18.1 26.1H27.9L18.1 16.1l-4.2 5.8z" fill="#29B6F6"/><path d="M13.9 21.9l4.2-5.8 4.2 4.2-4.2 5.8-4.2-4.2z" fill="#01579B" opacity=".4"/></svg>
            <svg width="44" height="44" viewBox="0 0 24 24" fill={dark ? '#fff' : '#374151'}><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </div>
        )}

        {/* Overlay on image hover */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.52)',
          opacity: imgHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }} />

        {/* Tag pills appear on image hover */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          display: 'flex', flexWrap: 'wrap', gap: 7,
          opacity: imgHovered ? 1 : 0,
          transform: imgHovered ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>
          {project.tagLabels.map((tag, i) => (
            <span key={i} style={{
              backgroundColor: i === 0 ? '#06b6d4' : i === 1 ? '#7c3aed' : '#ec4899',
              color: '#fff', fontSize: 11.5, fontWeight: 700,
              padding: '4px 10px', borderRadius: 20, letterSpacing: '0.02em',
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Right — content */}
      <div style={{ padding: '2rem 2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: 0 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: titleColor, marginBottom: 10 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: descColor, marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Key Features */}
        <p style={{ fontSize: 13, fontWeight: 700, color: labelColor, marginBottom: 10, letterSpacing: '0.04em' }}>Key Features:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {project.features.map((f, i) => (
            <span key={i} style={{
              fontSize: 12.5, color: featColor, fontWeight: 500,
              padding: '5px 12px', borderRadius: 20,
              border: `1px solid ${featBorder}`,
              backgroundColor: featBg,
            }}>{f}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 'auto' }}>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 20px', borderRadius: 10,
              border: `1.5px solid ${btnBorder}`,
              backgroundColor: btnBg,
              color: btnColor, fontSize: 13.5, fontWeight: 600,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#06b6d4'; e.currentTarget.style.color = '#06b6d4' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = btnBorder; e.currentTarget.style.color = btnColor }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Project
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 20px', borderRadius: 10,
              border: `1.5px solid ${btnBorder}`,
              backgroundColor: btnBg,
              color: btnColor, fontSize: 13.5, fontWeight: 600,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.color = '#7c3aed' }}
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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [photoHovered, setPhotoHovered] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  function validateForm() {
    const errors = { name: '', email: '', message: '' }
    if (!formData.name.trim()) errors.name = 'Name is required.'
    if (!formData.email.trim()) errors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Enter a valid email address.'
    if (!formData.message.trim()) errors.message = 'Message is required.'
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
    return errors
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)
    if (!errors.name && !errors.email && !errors.message) {
      setFormSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormSubmitted(false), 4000)
    }
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const bg = dark ? '#0d1117' : '#f3f4f6'
  const sectionWhite = dark ? '#161b22' : '#ffffff'
  const cardBg = dark ? '#161b22' : '#ffffff'
  const textPrimary = dark ? '#f1f5f9' : '#111827'
  const textSecondary = dark ? '#94a3b8' : '#6b7280'
  const borderColor = dark ? '#30363d' : '#e2e8f0'

  // Shared section styles
  const secGray = { backgroundColor: dark ? '#0d1117' : '#f3f4f6' } as const
  const secWhite = { backgroundColor: sectionWhite } as const

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: bg, color: textPrimary, minHeight: '100vh', transition: 'background-color 0.3s, color 0.3s' }}>

      {/* ── Navbar ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: dark ? 'rgba(13,17,23,0.5)' : 'rgba(255,255,255,0.25)',
        backdropFilter: 'blur(18px) saturate(180%)',
        WebkitBackdropFilter: 'blur(18px) saturate(180%)',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          width: '100%', height: 60,
          display: 'flex', alignItems: 'center',
          paddingLeft: 'calc((100vw - 80vw) / 2)',
          paddingRight: 'calc((100vw - 80vw) / 2)',
        }}>
          {/* Logo */}
          <a href="#about" style={{ textDecoration: 'none', fontSize: 26, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1 }}>
            <span style={{ color: '#06b6d4' }}>Ramit </span>
            <span style={{ color: '#7c3aed' }}>Sonar</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
            {[
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="nav-link"
                style={{ fontSize: 17, fontWeight: 500, color: textSecondary, transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#06b6d4' }}
                onMouseLeave={e => { e.currentTarget.style.color = textSecondary }}
              >{label}</a>
            ))}
          </nav>

          {/* Desktop dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="hidden-mobile theme-toggle"
            aria-label="Toggle theme"
            style={{
              position: 'absolute', right: '1.5rem',
              width: 42, height: 42, borderRadius: '50%',
              border: `1.5px solid ${borderColor}`,
              background: dark ? '#161b22' : '#fff',
              color: dark ? '#f59e0b' : '#4f46e5', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile controls — right-aligned, vertically centered */}
          <div className="show-mobile" style={{
            marginLeft: 'auto',
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', gap: 8,
          }}>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="theme-toggle"
              style={{
                width: 36, height: 36, borderRadius: '50%',
                border: `1.5px solid ${borderColor}`,
                background: dark ? '#161b22' : '#f1f5f9',
                color: dark ? '#f59e0b' : '#4f46e5', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
              style={{
                width: 36, height: 36, borderRadius: 8,
                border: `1.5px solid ${borderColor}`,
                background: dark ? '#161b22' : '#f1f5f9',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 4,
                flexShrink: 0, padding: 0,
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 16, height: 2,
                  backgroundColor: textPrimary, borderRadius: 2,
                  transition: 'all 0.25s',
                  transform: mobileOpen
                    ? i === 0 ? 'translateY(6px) rotate(45deg)' : i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'scaleX(0)'
                    : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in drawer — right side glass panel */}
      <>
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className="mobile-drawer"
          style={{
            position: 'fixed', inset: 0, zIndex: 98,
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: mobileOpen ? 'blur(2px)' : 'none',
            WebkitBackdropFilter: mobileOpen ? 'blur(2px)' : 'none',
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* Drawer */}
        <div
          className="mobile-drawer mobile-drawer-panel"
          style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 99,
            width: 220,
            backgroundColor: dark ? 'rgba(15,23,42,0.88)' : 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            borderLeft: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
            borderRadius: '20px 0 0 20px',
            padding: '80px 28px 40px',
            flexDirection: 'column', gap: 8,
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#06b6d4', marginBottom: 8 }}>Navigation</p>
          {['Projects', 'Blog', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 17, fontWeight: 600, color: textPrimary,
                textDecoration: 'none', padding: '12px 16px',
                borderRadius: 12,
                backgroundColor: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}`,
                transition: 'background 0.2s',
                display: 'block',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = dark ? 'rgba(6,182,212,0.15)' : 'rgba(6,182,212,0.08)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'}
            >
              {link}
            </a>
          ))}
        </div>
      </>

      <main style={{ paddingTop: 61 }}>

        {/* ── About ── */}
        <section id="about" style={{ backgroundColor: dark ? '#0d1117' : '#f3f4f6', paddingTop: 0, paddingBottom: '2rem', marginTop: 0 }}>
          <div className="about-outer">

            {/* Background card */}
            <div className="about-bg-card" style={{
              backgroundColor: dark ? '#161b22' : '#ffffff',
              borderRadius: '0 0 28px 28px',
              borderTop: 'none',
              borderLeft: dark ? '1px solid #334155' : 'none',
              borderRight: dark ? '1px solid #334155' : 'none',
              borderBottom: dark ? '1px solid #334155' : 'none',
              boxShadow: dark
                ? '0 0 6px rgba(0,0,0,0.22), 0 24px 32px -8px rgba(0,0,0,0.55)'
                : '0 0 5px rgba(0,0,0,0.06), 0 24px 32px -8px rgba(0,0,0,0.22)',
            }}>

              {/* About Me card */}
              <div className="about-card" style={{
                backgroundColor: dark ? '#161b22' : '#ffffff',
                borderRadius: 28,
                border: dark ? '1px solid #334155' : 'none',
                display: 'grid',
                alignItems: 'center',
                boxShadow: '0 0 4px rgba(0,0,0,0.05), 0 20px 28px -8px rgba(0,0,0,0.18)',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                {/* Text */}
                <div>
                  <h1 className="about-h1" style={{ fontWeight: 800, color: '#06b6d4', lineHeight: 1.1 }}>
                    About Me
                  </h1>
                  <p className="about-body" style={{ lineHeight: 1.8, color: textPrimary, marginBottom: '1rem' }}>
                    Hey there! I'm{' '}
                    <a href="#contact" style={{ color: '#06b6d4', fontWeight: 600, textDecoration: 'none' }}>Ramit Sonar</a>
                    , a passionate <strong>full-stack developer</strong> and <strong>Computer Engineering student</strong>. I love creating <strong>modern digital experiences</strong>, whether it's a powerful web application or a smooth mobile interface.
                  </p>
                  <p className="about-body" style={{ lineHeight: 1.8, color: textPrimary, marginBottom: '1rem' }}>
                    My stack includes <strong>HTML, CSS, JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, and Tailwind CSS</strong>.
                  </p>
                  <p className="about-body" style={{ lineHeight: 1.8, color: textPrimary, marginBottom: '2rem' }}>
                    I love writing <strong>clean, scalable code</strong> and solving <strong>real-world challenges</strong> through tech.
                  </p>
                  <a
                    href="#contact"
                    className="about-cta"
                    style={{ backgroundColor: '#06b6d4', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Get in Touch
                  </a>
                </div>

                {/* Photo */}
                <div
                  className="about-photo-wrap"
                  style={{ borderRadius: 16, transition: 'box-shadow 0.35s ease', boxShadow: photoHovered ? '0 0 0 3px rgba(6,182,212,0.55), 0 0 28px rgba(6,182,212,0.35), 0 8px 32px rgba(0,0,0,0.18)' : '0 8px 28px rgba(0,0,0,0.13)' }}
                  onMouseEnter={() => setPhotoHovered(true)}
                  onMouseLeave={() => setPhotoHovered(false)}
                >
                  <img
                    src={profilePhoto}
                    alt="Ramit Sonar"
                    className="about-photo"
                    style={{
                      objectFit: 'cover', objectPosition: 'center 30%',
                      borderRadius: 14,
                      transition: 'transform 0.35s ease',
                      transform: photoHovered ? 'scale(1.025)' : 'scale(1)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── My Projects ── */}
        <section id="projects" className="section-pad" style={{ ...secGray }}>
          <div className="section-container">
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <h2 className="h-section-lg" style={{ marginBottom: 14 }}>
                <span style={{ color: '#06b6d4' }}>My </span>
                <span style={{ color: '#ec4899' }}>Projects</span>
              </h2>
              <p style={{ fontSize: 15, color: textSecondary, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
                Here are some of my featured projects. Each one was built to solve real problems and showcase different technical skills.
              </p>
            </div>

            {/* 1-col horizontal cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginTop: '3rem', marginBottom: '3rem' }}>
              {PROJECTS.map(p => <ProjectCard key={p.title} project={p} dark={dark} />)}
            </div>

            {/* View All */}
            <div style={{ textAlign: 'center' }}>
              <a
                href="https://github.com/Ramit-Sonar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 13.5, fontWeight: 600, color: textSecondary,
                  padding: '10px 24px', borderRadius: 8,
                  border: `1.5px solid ${borderColor}`,
                  backgroundColor: cardBg, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#06b6d4'; e.currentTarget.style.color = '#06b6d4' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = textSecondary }}
              >
                <GitHubIcon size={16} />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ── My Tech Stack ── */}
        <section id="skills" className="section-pad" style={{ ...secGray }}>
          <div className="section-container">
            <h2 className="h-section-lg" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: '#06b6d4' }}>My </span>
              <span style={{ color: dark ? '#94a3b8' : '#9ca3af' }}>Tech </span>
              <span style={{ color: '#f87171' }}>Stack</span>
            </h2>
            <div className="grid-3">
              {TECH_STACK.map(group => <SkillCard key={group.category} group={group} dark={dark} />)}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="section-pad" style={{ ...secGray }}>
          <div className="section-container">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#06b6d4', marginBottom: 10 }}>LET'S CONNECT</p>
              <h2 className="h-section-lg" style={{ marginBottom: 14 }}>
                <span style={{ color: '#06b6d4' }}>Get In </span>
                <span style={{ color: '#ec4899' }}>Touch</span>
              </h2>
              <p style={{ fontSize: 16, color: textSecondary, maxWidth: 520, margin: '0 auto' }}>
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-grid" style={{ alignItems: 'start' }}>
              {/* Left */}
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: textPrimary, marginBottom: 12 }}>Contact Information</h3>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.7, marginBottom: 32 }}>
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>

                {[
                  {
                    bg: 'rgba(6,182,212,0.12)', iconColor: '#06b6d4',
                    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: 'Email Me', value: 'shapkotaramit47@gmail.com', href: 'mailto:shapkotaramit47@gmail.com',
                  },
                  {
                    bg: 'rgba(6,182,212,0.12)', iconColor: '#06b6d4',
                    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                    label: 'Call Me', value: '+977 9813965138', href: 'tel:+9779813965138',
                  },
                  {
                    bg: 'rgba(124,58,237,0.12)', iconColor: '#7c3aed',
                    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="#7c3aed"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                    label: 'Linkedin', value: 'ramitsonar', href: 'https://www.linkedin.com/in/ramitsonar',
                  },
                ].map(({ bg, icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: textPrimary, marginBottom: 3 }}>{label}</p>
                      <a href={href} style={{ fontSize: 14.5, color: '#06b6d4', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                      >{value}</a>
                    </div>
                  </div>
                ))}

                {/* Follow me on */}
                <p style={{ fontSize: 15, fontWeight: 600, color: textPrimary, marginTop: 8, marginBottom: 16 }}>Follow me on</p>
                <div style={{ display: 'flex', gap: 14 }}>
                  <a href="https://github.com/Ramit-Sonar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: '#24292f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <GitHubIcon size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/ramitsonar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <LinkedInIcon size={24} />
                  </a>
                </div>
              </div>

              {/* Right — Send a Message card */}
              <div style={{ backgroundColor: dark ? '#161b22' : '#ffffff', borderRadius: 20, border: 'none', padding: '2.5rem', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: textPrimary, marginBottom: 28 }}>Send a Message</h3>

                {formSubmitted && (
                  <div style={{ background: 'rgba(6,182,212,0.12)', border: '1.5px solid rgba(6,182,212,0.4)', borderRadius: 10, padding: '14px 18px', marginBottom: 20, color: '#06b6d4', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Message sent! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {/* Name */}
                  <div>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input type="text" placeholder="Your Name" value={formData.name}
                        onChange={e => { setFormData(p => ({ ...p, name: e.target.value })); setFormErrors(p => ({ ...p, name: '' })) }}
                        style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 10, border: `1.5px solid ${formErrors.name ? '#ef4444' : borderColor}`, backgroundColor: dark ? '#0d1117' : '#f9fafb', fontSize: 15, color: textPrimary, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = formErrors.name ? '#ef4444' : '#06b6d4'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.12)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = formErrors.name ? '#ef4444' : borderColor; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    {formErrors.name && <p style={{ color: '#ef4444', fontSize: 13, marginTop: 5, marginLeft: 4 }}>{formErrors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </span>
                      <input type="email" placeholder="Your Email" value={formData.email}
                        onChange={e => { setFormData(p => ({ ...p, email: e.target.value })); setFormErrors(p => ({ ...p, email: '' })) }}
                        style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 10, border: `1.5px solid ${formErrors.email ? '#ef4444' : borderColor}`, backgroundColor: dark ? '#0d1117' : '#f9fafb', fontSize: 15, color: textPrimary, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = formErrors.email ? '#ef4444' : '#06b6d4'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.12)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = formErrors.email ? '#ef4444' : borderColor; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    {formErrors.email && <p style={{ color: '#ef4444', fontSize: 13, marginTop: 5, marginLeft: 4 }}>{formErrors.email}</p>}
                  </div>
                  {/* Message */}
                  <div>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 16, top: 16, color: '#9ca3af' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </span>
                      <textarea rows={6} placeholder="Your Message" value={formData.message}
                        onChange={e => { setFormData(p => ({ ...p, message: e.target.value })); setFormErrors(p => ({ ...p, message: '' })) }}
                        style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 10, border: `1.5px solid ${formErrors.message ? '#ef4444' : borderColor}`, backgroundColor: dark ? '#0d1117' : '#f9fafb', fontSize: 15, color: textPrimary, outline: 'none', resize: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                        onFocus={e => { e.currentTarget.style.borderColor = formErrors.message ? '#ef4444' : '#06b6d4'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.12)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = formErrors.message ? '#ef4444' : borderColor; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    {formErrors.message && <p style={{ color: '#ef4444', fontSize: 13, marginTop: 5, marginLeft: 4 }}>{formErrors.message}</p>}
                  </div>
                  <button type="submit"
                    style={{ width: '100%', padding: '15px', borderRadius: 10, border: 'none', background: 'linear-gradient(90deg, #06b6d4, #ec4899)', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'opacity 0.2s, transform 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: dark ? '#0a1120' : '#f3f4f6', paddingBottom: '1.5rem' }}>
        <div className="section-container">
          <div style={{ borderTop: `1px solid ${borderColor}`, marginBottom: '1.5rem' }} />
        </div>
        <div className="section-container footer-content">
          <a
            href="#"
            style={{ display: 'inline-block', padding: '10px 24px', borderRadius: 8, backgroundColor: '#4f46e5', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Download CV
          </a>
          <p style={{ fontSize: 13.5, color: textSecondary }}>© 2026 Ramit Sonar</p>
        </div>
      </footer>
    </div>
  )
}

// ─── Sub-components (defined after App to avoid hoisting issues) ──────────────
