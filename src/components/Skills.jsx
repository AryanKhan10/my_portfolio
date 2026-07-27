import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaPython, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiSocketdotio,
  SiNextdotjs,
  SiFastapi,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiVercel,
  SiRailway,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { LiaNodeJs } from "react-icons/lia";
import { VscAzure } from "react-icons/vsc";
import { ShieldCheck, Cpu, Code2, Workflow } from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  // Group 1: Languages & Frontend
  {
    name: "JavaScript (ES6+)",
    category: "Languages",
    icon: <SiJavascript className="w-6 h-6" />,
    color: "from-yellow-400 to-amber-600",
  },
  {
    name: "Python",
    category: "Languages",
    icon: <FaPython className="w-6 h-6" />,
    color: "from-blue-500 to-sky-600",
  },
  {
    name: "Next.js",
    category: "Frameworks & UI",
    icon: <SiNextdotjs className="w-6 h-6" />,
    color: "from-neutral-700 to-neutral-950",
  },
  {
    name: "React.js",
    category: "Frameworks & UI",
    icon: <SiReact className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-600",
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks & UI",
    icon: <RiTailwindCssFill className="w-6 h-6" />,
    color: "from-sky-400 to-cyan-600",
  },

  // Group 2: Backend & Real-Time
  {
    name: "Node.js & Express",
    category: "Backend & Runtime",
    icon: <LiaNodeJs className="w-7 h-7" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "FastAPI",
    category: "Backend & Runtime",
    icon: <SiFastapi className="w-6 h-6" />,
    color: "from-teal-500 to-emerald-600",
  },
  {
    name: "Socket.io",
    category: "Real-Time Systems",
    icon: <SiSocketdotio className="w-6 h-6" />,
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "BullMQ",
    category: "Queues & Background Jobs",
    icon: <Workflow className="w-6 h-6" />,
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Redis",
    category: "Caching & Queues",
    icon: <SiRedis className="w-6 h-6" />,
    color: "from-red-600 to-amber-600",
  },

  // Group 3: Data, Security & AI
  {
    name: "PostgreSQL",
    category: "Databases & Storage",
    icon: <SiPostgresql className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "MongoDB",
    category: "Databases & Storage",
    icon: <SiMongodb className="w-6 h-6" />,
    color: "from-green-600 to-emerald-700",
  },
  {
    name: "MySQL",
    category: "Databases & Storage",
    icon: <GrMysql className="w-6 h-6" />,
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Supabase",
    category: "Cloud & Backend",
    icon: <SiSupabase className="w-6 h-6" />,
    color: "from-emerald-500 to-green-700",
  },
  {
    name: "SAML 2.0 & Auth",
    category: "Security & IAM",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "AI Integrations",
    category: "AI & Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600",
  },

  // Group 4: Cloud, DevOps & Deployment
  {
    name: "Docker",
    category: "Cloud & DevOps",
    icon: <FaDocker className="w-6 h-6" />,
    color: "from-blue-500 to-sky-600",
  },
  {
    name: "Azure",
    category: "Cloud Infrastructure",
    icon: <VscAzure className="w-6 h-6" />,
    color: "from-sky-500 to-blue-700",
  },
  {
    name: "Vercel",
    category: "Cloud & Deployment",
    icon: <SiVercel className="w-6 h-6" />,
    color: "from-neutral-700 to-neutral-950",
  },
  {
    name: "Railway",
    category: "Cloud & Deployment",
    icon: <SiRailway className="w-6 h-6" />,
    color: "from-purple-600 to-indigo-900",
  },
];

const Skills = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <section
      id="skills"
      className={`relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* Background Glows */}
      {theme === "dark" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-3">
            <Code2 className="w-4 h-4" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Skills & </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">
              Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className={`max-w-2xl mx-auto mt-6 text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            A curated showcase of my core technical arsenal, organized across 4 architectural clusters and refined through building enterprise systems and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* 4-Column Balanced Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
