import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Zap, Award, Cpu } from "lucide-react";

const About = () => {
  const theme = useSelector((state) => state.theme.theme);

  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: "Backend & Systems Architecture",
      description:
        "Designing high-concurrency REST APIs and real-time communication engines with Node.js, Express, Python FastAPI, and bi-directional Socket.io channels. Skilled in orchestrating asynchronous worker queues via BullMQ and Redis for heavy data processing.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Enterprise Security & Auth",
      description:
        "Architecting hardened Identity and Access Management (IAM) infrastructures. Experienced in implementing organizational boundaries, Single Sign-On (SSO) workflows using SAML 2.0 and OIDC, and role-based permission hierarchies for enterprise clients.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "AI & E-Commerce Innovations",
      description:
        "Engineering automated AI catalog ingestion pipelines and dynamic A/B testing cohort algorithms for Shopify embedded apps. Built high-availability database layers utilizing PostgreSQL and MongoDB to handle large-scale transaction volumes.",
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Full Stack & Cloud DevOps",
      description:
        "Managing the complete application lifecycle from reactive Next.js and modern JavaScript (ES6+) frontends down to containerized infrastructure using Docker and Docker Compose, with production service orchestration on Azure Virtual Machines.",
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* Background Decorative Glows */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        </>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-3">
            <Award className="w-4 h-4" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Experience Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>
                Architecting Modern Web Applications &{" "}
              </span>
              <span className="text-cyan-400">Distributed Cloud Systems.</span>
            </h3>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am a full-stack systems engineer with professional industry experience at <strong className="text-cyan-400 font-semibold">Metasense Technologies</strong>, specializing in the end-to-end design of distributed web applications, enterprise security architectures, and multi-tenant SaaS platforms. My engineering approach centers on owning the complete application lifecycle by architecting reactive client interfaces, building high-throughput backend services, and orchestrating robust cloud deployments from the ground up.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Whether building multi-tenant infrastructure for platforms like <strong className="text-gray-200 font-semibold">Saasify</strong>, engineering asynchronous AI image processing workflows for <strong className="text-gray-200 font-semibold">LookAtlas</strong> that reduced manual workload by <span className="text-cyan-400 font-mono bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">25 hrs/wk</span>, or deploying organizational authentication boundaries, I focus on system resilience and scalability. I thrive on translating intricate business rules into reliable code, optimizing database performance, and designing architectures that drive measurable business growth, such as A/B testing cohorts that increased Shopify conversion rates by <span className="text-cyan-400 font-mono bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">15-20%</span>.
            </p>

            {/* Upgraded Professional Engineering Metrics */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-gray-800/60 mt-6">
              <div className="border-l-2 border-cyan-400 pl-3 sm:pl-4">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400">1+</span>
                <span className={`text-xs sm:text-sm block mt-1 font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Year Industry Experience
                </span>
              </div>
              <div className="border-l-2 border-cyan-400 pl-3 sm:pl-4">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">20%</span>
                <span className={`text-xs sm:text-sm block mt-1 font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Shopify CTR Increase (A/B Tests)
                </span>
              </div>
              <div className="border-l-2 border-cyan-400 pl-3 sm:pl-4">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">200+</span>
                <span className={`text-xs sm:text-sm block mt-1 font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Daily Background Jobs Processed
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  theme === "dark"
                    ? "bg-[#121212]/80 border-gray-800/80 hover:border-cyan-500/50 hover:box-shadow-glow"
                    : "bg-gray-50 border-gray-200 hover:border-cyan-500 shadow-sm"
                }`}
              >
                <div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 w-fit mb-4 border border-cyan-500/20">
                    {item.icon}
                  </div>
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;