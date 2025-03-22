import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Code2, Github, Linkedin } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import Aryan from "../assets/img/aryan.png"
import { toggleTheme } from "../slice/themeSlice";
function Navbar() {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle dark mode function
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode)
  //   // Toggle the 'dark' class on the document element
  //   document.documentElement.classList.toggle("dark")
  // }

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()

    // Handle the home case differently
    if (sectionId === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
      return
    }

    // For other sections, find the element and scroll to it
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="min-h-screen">
      <nav
        id="/"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? `${theme === 'dark'? 'bg-gray-900/80':'bg-white/80' }   backdrop-blur-md py-4 ` : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-sky-500" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Aryan Khan
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`${theme === 'dark' ? "text-gray-400 hover:text-sky-400": " text-gray-700  hover:text-sky-500"}  transition-colors duration-300`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`${theme === 'dark' ? "hover:bg-gray-800": "hover:bg-gray-100"} p-2 rounded-full  transition-colors duration-300`}
              >
                {theme === "light" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`${theme === 'dark' ? "hover:bg-gray-800": "hover:bg-gray-100"} p-2 rounded-full  transition-colors duration-300`}
              >
                {theme === "light" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${theme === 'dark' ? "hover:bg-gray-800": "hover:bg-gray-100"} p-2 rounded-full  transition-colors duration-300`}
              >
                {isMenuOpen ? (
                  <X className={`${theme === 'dark' ? "text-gray-20": "text-gray-700"}  h-6 w-6`} />
                ) : (
                  <Menu className={` ${theme === 'dark' ? "text-gray-200": "text-gray-700 "} h-6 w-6 `} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`${theme === 'dark'? "bg-gray-900": " bg-white"} md:hidden absolute top-full left-0 w-full  shadow-lg py-4`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${theme === 'dark'? "text-gray-200 hover:bg-gray-800": "text-gray-700 hover:bg-gray-100"} block px-4 py-2  `}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className={`pt-32 px-4 py-10 max-w-7xl mx-auto min-h-screen flex items-center`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className={`${theme === 'dark'? ' text-gray-400': 'text-gray-900'}`}>Aryan Ahmad </span>
              <span className="text-sky-500">Khan</span>
            </h1>
            <p className={`${theme === 'dark'? ' text-gray-400': 'text-gray-600'} text-xl md:text-2xl `}>
              I'm a <span className="text-sky-500 font-semibold">Full Stack Developer</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="px-8 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get in touch
              </button>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark'? 'bg-gray-800 hover:bg-gray-700': 'hover:bg-gray-200 bg-gray-100'} p-3 rounded-full  transition-colors duration-300`}
                >
                  <Github className={`${theme==='dark'?'text-gray-200 ':'text-gray-700'} h-6 w-6  `} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark'? 'bg-gray-800 hover:bg-gray-700': 'hover:bg-gray-200 bg-gray-100'} p-3 rounded-full  transition-colors duration-300`}
                >
                  <Linkedin className={`${theme==='dark'?'text-gray-200 ':'text-gray-700'} h-6 w-6  `} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-[500px] relative rounded-2xl shadow-2xl overflow-hidden">
              <img
              src={Aryan} 
              alt="Profile"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-blue-500/30 rounded-2xl transform rotate-3 scale-105 -z-10" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

