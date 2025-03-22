import ProjectCard from "./ProjectCard"
import One from "../assets/img/4.png"
import Two from "../assets/img/5.png"
import Three from "../assets/img/6.png"
import Four from "../assets/img/e.png"
import Five from "../assets/img/2.png"
import Six from "../assets/img/reflexcms.png"
import Learn from '../assets/img/learn.png'
import { useSelector } from "react-redux"

const projects = [
  {
    id: 1,
    title: "An E-learning platform.",
    description: "A secure and scalable platform using React.js, Node.js, Express.js, MongoDB",
    image: `${Learn}?height=400&width=600`,
    url: "https://aryankhan10.github.io/Travel_Goals/",
  },
  {
    id: 2,
    title: "A Complaint Management System.",
    description: "A modern complaint management system using React.js, Node.js, Express.js, MongoDB",
    image: `${Six}?height=400&width=600`,
    url: "https://github.com/AryanKhan10/ComplaintResolver-Suite",
  },
  {
    id: 3,
    title: "Theadly.",
    description: "A modern discussion platform. Utilized local storage for data persistence and React.js.",
    image: `${One}?height=400&width=600`,
    url: "https://main--threadly.netlify.app/",
  },
  {
    id: 4,
    title: "Manage added items of cart page.",
    description: "E-commerce cart management system using React.js",
    image: `${Two}?height=400&width=600`,
    url: "https://ecoflux.netlify.app/",
  },
  {
    id: 5,
    title: "Fetch blogs dynamically.",
    description: "Dynamic blog content platform using React.js",
    image: `${Three}?height=400&width=600`,
    url: "https://aryankhan10.github.io/React_Blogs/",
  },
  
  
  {
    id: 6,
    title: "E-Commerce Landing page.",
    description: "Modern e-commerce storefront, Made with pure Bootstrap",
    image: `${Four}?height=400&width=600`,
    url: "https://aryankhan10.github.io/E-Commerce-/",
  },
 
]

const MyWork = () => {

  const theme = useSelector(state=>state.theme.theme)
  return (
    <section className={`py-16  ${theme === "light" ? 'text-black bg-white' :'text-white bg-slate-800'} `} id="work">
      <div className="flex flex-col mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold py-3 text-sky-400">My Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWork

