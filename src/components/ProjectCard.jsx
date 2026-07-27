import React from "react";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index = 0 }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className={`flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 group ${
        theme === "dark"
          ? "bg-[#121212] border-gray-800/80 hover:border-cyan-500/50 glow-blue-sm"
          : "bg-white border-gray-200 hover:border-cyan-500 shadow-lg"
      } ${!project.image && theme === "dark" ? "bg-gradient-to-br from-[#121212] via-[#10141f] to-[#121212]" : ""}`}
    >
      {/* Top Media Header ONLY if project has an image */}
      {project.image && (
        <div className="relative w-full h-64 overflow-hidden bg-[#0a0a0a]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

          {/* Status / Confidential Pill */}
          <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-white/10 text-xs font-medium text-white shadow-md">
            {project.isConfidential ? (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-400" />
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-200">{project.status || "Live Project"}</span>
              </>
            )}
          </div>

          {/* Project Type Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300 shadow-md">
            {project.type}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row for non-image cards */}
          {!project.image && (
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-800/60">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                {project.type}
              </span>
              {project.isConfidential ? (
                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold" title="Confidential">
                  <Lock className="w-3.5 h-3.5" />
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{project.status || "Live Project"}</span>
                </div>
              )}
            </div>
          )}

          <h3
            className={`text-2xl font-extrabold tracking-tight mb-3 transition-colors group-hover:text-cyan-400 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-sm sm:text-base leading-relaxed mb-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          {/* Key Contributions List if available */}
          {project.highlights && (
            <div className="mb-6 space-y-2 bg-cyan-500/5 p-4 rounded-xl border border-cyan-500/10">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Key Engineering Feats:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                {project.highlights.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-2 shrink-0">⚡</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-800/40">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                #{item}
              </span>
            ))}
          </div>

          {/* Action Links / Status Footer */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.url && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md glow-blue-sm"
              >
                <span>Visit Platform</span>
                <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            )}

            {project.github && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md ${
                  theme === "dark"
                    ? "bg-gray-800/80 hover:bg-gray-700 border border-gray-700/80 text-white"
                    : "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800"
                }`}
              >
                <FaGithub className="mr-2 w-4 h-4" />
                <span>GitHub Repo</span>
              </motion.a>
            )}

            {!project.url && !project.github && (
              <div className="w-full py-2.5 px-4 rounded-xl bg-gray-800/40 border border-gray-800 text-gray-400 text-xs font-medium text-center flex items-center justify-center space-x-2">
                <Lock className="w-3.5 h-3.5 text-gray-500" />
                <span>Internal Production Architecture</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;