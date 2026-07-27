import { Heart, ArrowUp, Github, Linkedin, Mail, Phone, Terminal } from "lucide-react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <footer
      className={`relative border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0a0a0a] text-white border-cyan-500/10"
          : "bg-gray-100 text-gray-800 border-gray-200"
      }`}
      id="footer"
    >
      {/* Subtle background glow */}
      {theme === "dark" && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      )}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
                <Terminal className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ARYAN KHAN
              </span>
            </div>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} max-w-md leading-relaxed`}>
              Full Stack Developer with professional experience architecting scalable backend systems, AI-driven solutions, and responsive modern web applications.
            </p>
            <div className="flex space-x-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/AryanKhan10"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === "dark"
                    ? "bg-[#121212] border border-gray-800 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400"
                    : "bg-white border border-gray-200 hover:border-cyan-500 text-gray-700"
                } p-3 rounded-xl transition-all duration-300 shadow-sm`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/aryan-ahmad-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === "dark"
                    ? "bg-[#121212] border border-gray-800 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400"
                    : "bg-white border border-gray-200 hover:border-cyan-500 text-gray-700"
                } p-3 rounded-xl transition-all duration-300 shadow-sm`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "about", "experience", "skills", "work", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => (item === "Home" ? scrollToTop() : scrollToSection(item))}
                    className={`${
                      theme === "dark" ? "text-gray-400 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600"
                    } transition-colors capitalize text-left flex items-center group cursor-pointer`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item === "work" ? "Projects" : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 tracking-wide">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-sm`}>
                  aryan.cs.uet@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-sm`}>
                  +92 315 9420360
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`border-t ${theme === "dark" ? "border-gray-900" : "border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"} text-sm text-center md:text-left`}>
              © {new Date().getFullYear()} Aryan Khan.{/*  Crafted with{" "} */}
              {/* <Heart className="inline h-4 w-4 text-red-500 mx-1 animate-pulse" /> using React, Vite & Tailwind CSS. */}
            </p>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black p-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg glow-blue-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 font-bold" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
