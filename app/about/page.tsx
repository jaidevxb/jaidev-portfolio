"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { MapPin, Briefcase } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  period: string;
  cgpa: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
}

export default function AboutPage() {
  // Mock data for bio, education, and experience
  const bio = {
    name: "Jaidev B",
    title: "Data Science & GenAI Engineer",
    description: "Focused on building solutions at the intersection of data science and generative AI. With hands-on experience in machine learning and GenAI systems, I turn ideas into practical real-world impact.",
    image: "/placeholder-avatar.jpg", // This would be your actual image
    location: "Coimbatore, Tamil Nadu, IN",
    availability: "Open to new opportunities"
  };

  const education: Education[] = [
    {
      degree: "B.E. in Electrical and Electronics Engineering",
      school: "Govt College Of Technology, Coimbatore",
      period: "Sep 2024 - 2028",
      cgpa: "CGPA: 8.5/10.0",
      description: "Focused on electrical systems and electronics, with strong self-driven learning in modern computational technologies."
    },
    {
      degree: "H.S.C. in Computer Science",
      school: "S.B.O.A. Matriculation & hr. Sec. School, Coimbatore",
      period: "Jun 2022 - May 2024",
      cgpa: "Percentage: 93.5%",
      description: "Early exposure to programming concepts, problem-solving and computer fundamentals."
    }
  ];

  const experience: Experience[] = [
    {
      title: "GenAI Developer",
      company: "PinHead Analytics",
      period: "Jul 2025 - Present",
      type: "Internship",
      location: "Remote",
      description: "Transforming the potential of GenAI into real-world impact by building LLM-driven solutions and intelligent workflows."
    },
    {
      title: "Data Annotator",
      company: "Amazon's Mechanical Turk",
      period: "May 2023 - Present",
      type: "Freelance",
      location: "Remote",
      description: "Working on data annotation tasks including text classification and sentiment analysis, contributing to ML models through high-quality labeled data."
    },
    {
      title: "AI Intern",
      company: "Infosys Springboard",
      period: "Aug 2025 - Oct 2025",
      type: "Internship",
      location: "Remote",
      description: "Developed an end-to-end smart traffic management system using machine learning, ANPR and ATCC."
    }
  ];

  const skills = [
    "Python",
    "ML/DL",
    "Data Science",
    "GenAI & LLMs",
    "Prompt Engineering",
    "Agentic Workflows",
    "Computer Vision",
    "APIs & Integrations",
    "Rapid Prototyping",
    "SQL (Basics)",
    "DSA (Foundational)",
    "Git & GitHub",
    "Cloud (Basics)",
    "HTML,CSS,JS (Basics)",
    "C, C++"
  ];

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center px-4 py-20 mx-auto max-w-4xl">
        {/* Bio Section */}
        <div className="w-full mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">
            About Me
          </h1>
          <Card>
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center text-4xl font-bold text-white">
                    J
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-100">{bio.name}</h2>
                  <h3 className="text-xl text-zinc-300 mb-4">{bio.title}</h3>
                  <p className="text-zinc-400 mb-6 max-w-2xl">{bio.description}</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-zinc-500" />
                      {bio.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} className="text-zinc-500" />
                      {bio.availability}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-6">
            Skills
          </h2>
          <Card>
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Education Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">{edu.degree}</h3>
                      <h4 className="text-lg text-zinc-300">{edu.school}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">{edu.cgpa}</span>
                        <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">{edu.period}</span>
                      </div>
                      <p className="text-zinc-400 mt-3">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">{exp.title}</h3>
                      <h4 className="text-lg text-zinc-300">{exp.company}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">{exp.type}</span>
                        <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">{exp.location}</span>
                        <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">{exp.period}</span>
                      </div>
                      <p className="text-zinc-400 mt-3">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-8">
            Certifications & Achievements
          </h2>
          <Card>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-4">Certifications:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">IBM Data Science Professional Certificate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">Machine Learning Specialization – Andrew Ng</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">Infosys Springboard – AI Internship</span>
                    </li>
                    {/* <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">NPTEL – Introduction to Machine Learning</span>
                    </li>  */}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-4">Achievements:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">Winner – Hackovate Hackathon (SignLink AI)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">Runner-up – COMMENZAR'25 (Technical Symposium)</span>
                    </li>
                    {/* <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span className="text-zinc-400">Notable academic or technical recognition</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}