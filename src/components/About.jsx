import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const theme = useSelector(state=>state.theme.theme);
  return (
    <section
      id="about"
      className={`relative py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-20 items-center">
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-sky-500">About Me</h1>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                <span className="text-sky-600">Developer</span> & Designer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate and detail-oriented Computer Science student with hands-on experience 
              in both frontend and backend development. Proficient in building scalable, 
              secure, and high-performance backend applications using Node.js, Express.js, 
              and MongoDB. Experienced in designing and developing dynamic, responsive user 
              interfaces with React.js, Tailwind CSS, and Bootstrap. Strong problem-solving 
              abilities and a collaborative mindset, eager to apply my skills in full-stack 
              development.
            </p>

            <button className="group relative px-8 py-3 bg-sky-500 text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;