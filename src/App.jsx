import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.className = "bg-[#0a0a0a] text-gray-100 transition-colors duration-300";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.className = "bg-gray-50 text-gray-900 transition-colors duration-300";
    }
  }, [theme]);

  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
