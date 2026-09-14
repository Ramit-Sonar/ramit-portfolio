import communicationTrainingImage from "@/assets/certificate-photo/5-Day Skill Development and Communication Training - Certificate of Participation.jpg"
import namasteJavaScriptImage from "@/assets/certificate-photo/js certificate.jpg"
import learnCppBasicsImage from "@/assets/certificate-photo/Learn c++ Basics - Certification of Completion.jpg"
import sparkEecHackathonImage from "@/assets/certificate-photo/SparkEEC 1.o Hackathon-2nd Runner Up.jpg"
import practiceCppBasicsImage from "@/assets/certificate-photo/Practice C++ basic.jpg"

export type Certificate = {
  title: string
  issuer: string
  type: string
  issued: string
  credentialId: string
  credentialUrl: string
  image: string
}

export const certificates: Certificate[] = [
  {
    title: "5-Day Skill Development & Communication Training Program",
    issuer: "Hult Prize - Everest Engineering College",
    type: "Certificate of Participation",
    issued: "Poush 21-24 & 28, 2082 (BS)",
    credentialId: "",
    credentialUrl: "",
    image: communicationTrainingImage,
  },
  {
    title: "Namaste JavaScript",
    issuer: "NamasteDev.com",
    type: "Certificate of Completion",
    issued: "Jun 10, 2025",
    credentialId: "899B066C354CD3E29F4B6A6384B",
    credentialUrl: "https://namastedev.com/shapkotaramit47/certificates/namaste-javascript",
    image: namasteJavaScriptImage,
  },
  {
    title: "Learn C++ Basics",
    issuer: "Programiz",
    type: "Certificate of Completion",
    issued: "May 17, 2025",
    credentialId: "C7798456E2C7",
    credentialUrl: "https://programiz.pro/certificates/C7798456E2C7",
    image: learnCppBasicsImage,
  },
  {
    title: "SparkEEC 1.0 Hackathon - 2nd Runner Up",
    issuer: "SOCISE-EEC, Everest Engineering College",
    type: "Certificate of Achievement",
    issued: "July 17-18, 2026",
    credentialId: "",
    credentialUrl: "",
    image: sparkEecHackathonImage,
  },
  {
    title: "Practice: C++ Basics",
    issuer: "Programiz",
    type: "Certificate of Completion",
    issued: "April 10, 2025",
    credentialId: "A8F1B9196C5B",
    credentialUrl: "https://programiz.pro/certificates/A8F1B9196C5B",
    image: practiceCppBasicsImage,
  },
]
