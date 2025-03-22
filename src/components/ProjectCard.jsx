// import { Link } from "lucide-react";

import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
      <div className="relative w-[22rem] group proj shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <div className="w-[22rem] h-[16rem]">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover w-full h-full rounded-lg" />
        </div>
  
        {/* Overlay */}
        <div className="absolute inset-0 group-hover:bg-sky-500 opacity-80 transition-all duration-300 ease-in-out rounded-lg"></div>
  
        {/* Content */}
        <div className="absolute top-1/2 -translate-y-1/2 text-white text-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-4">
          <h3 className="font-semibold text-lg my-2 z-10">{project.title}</h3>
          <p className="text-sm text-gray-200 mb-4">{project.description}</p>
          <Link
            to={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl border-2 bg-sky-800 border-sky-800 rounded-lg transition duration-300 hover:bg-transparent hover:text-sky-800 text-white px-3 py-1 inline-block"
          >
            Visit
          </Link>
        </div>
      </div>
    )
  }
  export default ProjectCard;