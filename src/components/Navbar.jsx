import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Code2, Github, Linkedin, Sparkles, Terminal, Code } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import Aryan from "../assets/img/profile.jpeg"
import { toggleTheme } from "../slice/themeSlice"

function Navbar() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    if (sectionId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsMenuOpen(false)
      return
    }
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="min-h-screen relative overflow-hidden">
      {/* Background Glows for Dark Theme */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
        </>
      )}

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? `${
                theme === "dark"
                  ? "bg-[#0a0a0a]/80 border-b border-cyan-500/10 glow-blue-sm"
                  : "bg-white/80 border-b border-gray-200"
              } backdrop-blur-md py-4`
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
              onClick={(e) => scrollToSection(e, "/")}
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <Terminal className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="ml-3 text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                ARYAN.DEV
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-cyan-600"
                  } font-medium tracking-wide transition-colors duration-300 relative group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => dispatch(toggleTheme())}
                className={`${
                  theme === "dark"
                    ? "bg-[#121212] border border-gray-800 hover:border-cyan-500/50 text-cyan-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } p-2.5 rounded-full transition-all duration-300`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-cyan-400" />
                )}
              </motion.button>
            </div>

            {/* Mobile menu buttons */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`${
                  theme === "dark"
                    ? "bg-[#121212] border border-gray-800 text-cyan-400"
                    : "bg-gray-100 text-gray-700"
                } p-2 rounded-full transition-colors`}
              >
                {theme === "light" ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-cyan-400" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                } p-2 rounded-lg hover:bg-gray-800/20 transition-colors`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${
              theme === "dark"
                ? "bg-[#0a0a0a]/95 border-b border-cyan-500/20"
                : "bg-white/95 border-b border-gray-200"
            } md:hidden absolute top-full left-0 w-full backdrop-blur-xl shadow-2xl py-6 px-6`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${
                    theme === "dark"
                      ? "text-gray-200 hover:text-cyan-400"
                      : "text-gray-700 hover:text-cyan-600"
                  } font-medium text-lg py-2 transition-colors border-b border-gray-800/50`}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 px-4 py-16 max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center md:text-left md:col-span-7"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-2">
              <Code className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: "3s" }} />
              <span>Full Stack Engineer • 1+ Year Professional Experience</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                Hi, I'm <br />
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent text-glow">
                Aryan Khan
              </span>
            </h1>

            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } text-lg md:text-xl max-w-2xl leading-relaxed`}
            >
              I architect and engineer scalable backend ecosystems, AI-powered integrations, and
              high-performance web applications. Turning complex problems into sleek, responsive software experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 glow-blue flex items-center justify-center shadow-lg"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Let's Work Together
              </motion.button>

              <div className="flex justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/AryanKhan10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    theme === "dark"
                      ? "bg-[#121212] border border-gray-800 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  } p-4 rounded-xl transition-all duration-300 flex items-center justify-center`}
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.linkedin.com/in/aryan-ahmad-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    theme === "dark"
                      ? "bg-[#121212] border border-gray-800 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  } p-4 rounded-xl transition-all duration-300 flex items-center justify-center`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image with Glows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-500/30 bg-[#121212] shadow-2xl">
                <img
                  src={Aryan}
                  alt="Aryan Khan - Full Stack Developer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Tech Badge */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-card px-4 py-3 rounded-xl border border-cyan-500/40 shadow-xl flex items-center space-x-3"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-sm font-semibold text-white">Full Stack Engineer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
