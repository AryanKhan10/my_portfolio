import { BookUp, Database, FileJson, Layers, Phone, Repeat, Server } from "lucide-react"
import { useSelector } from "react-redux";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { LiaNodeJs } from "react-icons/lia";


import SkillCard from "./SkillCard"
const skills = [
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="w-12 h-12" />,
    progress: 78,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-12 h-12" />,
    progress: 76,
    color: "from-sky-500 to-sky-600",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-12 h-12" />,
    progress: 73,
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "React.js",
    icon: <SiReact className="w-12 h-12" />,
    progress: 77,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "MySQL",
    icon: <GrMysql className="w-12 h-12" />,
    progress: 75,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12" />,
    progress: 77,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Python",
    icon: <FaPython className="w-12 h-12" />,
    progress: 69,
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Node.js & Express.js",
    icon: <LiaNodeJs className="w-12 h-12" />,
    progress: 74,
    color: "from-green-600 to-emerald-600",
  },
]


const Skills = () => {
    const theme = useSelector((state) => state.theme.theme);

  return (
    <section id="skills" className={`${theme === "dark" ?'bg-gradient-to-b from-gray-900 to-gray-800`' : 'bg-white  from-gray-50 to-white'} py-20 px-4 md:px-8   `}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full mb-4">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 mb-4">
            Technical Proficiency
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A showcase of my technical skills and expertise developed through years of practice and real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;

