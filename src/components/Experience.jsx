import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Server, Shield, Sparkles, ShoppingBag, MessageSquare } from "lucide-react";

const Experience = () => {
  const theme = useSelector((state) => state.theme.theme);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Metasense Technologies",
      period: "July 2025 – Present",
      type: "Full-Time • Professional Experience",
      description:
        "Leading full-stack engineering initiatives across high-impact mobile and web applications, focusing on scalable backend architectures, real-time communication, enterprise security, and AI innovations.",
      achievements: [
        {
          title: "Core Backend & Payment Ecosystems",
          desc: "Architected high-concurrency backend services for mobile applications, integrating bi-directional live chat via Socket.io and automated payment gateway workflows. Containerized the entire backend ecosystem using Docker and Docker Compose, managing reliable multi-service deployments and scaling across Azure Virtual Machines.",
          icon: <Server className="w-5 h-5 text-cyan-400" />,
          tags: ["Node.js", "Socket.io", "Docker", "Docker Compose", "Azure VM"],
        },
        {
          title: "Enterprise SAML 2.0 Authentication",
          desc: "Engineered an enterprise identity authentication boundary for a Computer Telephony Integration (CTI) project, entirely eliminating manual user credential provisioning. Implemented a passwordless Single Sign-On (SSO) architecture utilizing SAML 2.0 and OIDC protocols integrated directly with Microsoft Entra ID.",
          icon: <Shield className="w-5 h-5 text-cyan-400" />,
          tags: ["SAML 2.0", "OIDC", "Microsoft Entra ID", "Enterprise IAM", "CTI Systems"],
        },
        {
          title: "LookAtlas (AI Photoshoot Platform)",
          desc: "Engineered full-stack product features using React and Next.js, backed by asynchronous catalog ingestion pipelines that import large-scale inventories from external E-stores into LookAtlas. This automated AI photoshoot workflow reduced manual photography and processing workloads by ~25 hours per week while integrating custom Discord support bots for real-time customer engagement.",
          icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
          tags: ["Next.js", "React", "Data Pipelines", "Discord Bot API", "LookAtlas AI"],
        },
        {
          title: "Shopify Embedded Apps & A/B Testing",
          desc: "Engineered dynamic A/B testing frameworks for embedded Shopify applications that programmatically rotate AI-generated product images across end-user cohorts. This data-driven optimization engine directly boosted client revenue, driving a 15-20% average increase in store conversion rates.",
          icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
          tags: ["Shopify Apps", "A/B Testing", "Cohort Analysis", "Conversion Optimization", "Revenue Growth"],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-50"
      }`}
    >
      {/* Background Glows */}
      {theme === "dark" && (
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
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
            <Briefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Work </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 pl-6 md:pl-12 space-y-16">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[37px] md:-left-[60px] top-0 w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 border-4 border-[#0a0a0a] shadow-lg shadow-cyan-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </div>

              {/* Company & Role Header */}
              <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                    {exp.type}
                  </span>
                  <h3 className={`text-3xl font-extrabold mt-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                  </h3>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className={`text-lg mb-8 max-w-3xl leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {exp.description}
              </p>

              {/* Key Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.achievements.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      theme === "dark"
                        ? "bg-[#121212] border-gray-800/80 hover:border-cyan-500/50 glow-blue-sm"
                        : "bg-white border-gray-200 hover:border-cyan-500 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                          {item.icon}
                        </div>
                        <h4 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          {item.title}
                        </h4>
                      </div>

                      <p className={`text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/40">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
