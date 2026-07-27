import React from "react";
import ProjectCard from "./ProjectCard";
import Learn from "../assets/img/learn.png";
import Saasify from "../assets/img/saasify.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const projectsData = [
  {
    id: 5,
    title: "Saasify: Multi-Tenant SaaS Marketplace",
    type: "Featured FYP",
    category: "Full Stack",
    status: "Live Cloud Platform",
    isConfidential: false,
    description:
      "A comprehensive multi-tenant SaaS marketplace and developer portal. Enables developers to launch WordPress-powered SaaS products with automated site provisioning and instant customer checkout.",
    highlights: [
      "Automated one-click WordPress site creation and publishing engine",
      "Stripe Connect Express integration with automated 85% developer / 15% platform revenue split",
      "Azure VM production deployment configured with Docker containerization, Nginx & GitHub Actions CI/CD",
      "Real-time developer & admin analytics dashboard tracking MRR and subscriptions",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "Stripe Connect",
      "Azure VM",
      "Docker",
      "Nginx",
      "Supabase",
      "GitHub Actions",
    ],
    image: Saasify,
    url: "https://saassify.tech",
    github: "https://github.com/SohaibKhattak/saas-marketplace",
    badge: "Cloud SaaS Marketplace",
  },
  {
    id: 3,
    title: "LookAtlas: AI Photography & On-Model Shoots",
    type: "AI Powered Photograph",
    category: "Company",
    status: "Live Enterprise Product",
    isConfidential: true,
    description:
      "An AI-powered product photography platform generating on-model shoots. Engineered the background catalog ingestion pipelines from Etsy and Shopify, custom Discord support chatbots, and Stripe billing tiers.",
    highlights: [
      "Shopify embedded app featuring A/B testing cohort algorithms dynamically shifting AI images to optimize CTR & ATC",
      "Large-scale asynchronous catalog ingestion queued via BullMQ and Redis",
      "Integrated custom Discord bot for instant customer support and automated Resend transactional emails",
      "Stripe billing integration with seamless subscription upgrade/downgrade workflows",
    ],
    tech: [
      "Node.js",
      "Fastify",
      "Next.js / React",
      "Supabase",
      "Stripe",
      "BullMQ",
      "Redis",
      "Discord.js",
      "Resend",
    ],
    image: null,
    url: "https://lookatlas.com",
    github: null,
    badge: "AI & E-Commerce",
  },
  {
    id: 2,
    title: "Khatwa: Business & E-Commerce Platform",
    type: "Business Platform",
    category: "Company",
    status: "Production Mobile Backend",
    isConfidential: true,
    description:
      "Architected the core backend ecosystem for a multi-faceted business and boutique mobile application. Integrated MyFatoorah payment gateway, AI design generation worker queues, and custom Business & Admin UI portals.",
    highlights: [
      "Real-time bi-directional live chat for mobile apps and business dashboards using Socket.io",
      "Asynchronous BullMQ & Redis worker queues processing heavy AI design generation jobs",
      "Developed custom Business Dashboard and Admin UI with time-slotted consultation bookings",
      "Multi-cloud production deployment across Heroku and Vercel with AWS S3 asset storage",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Socket.io",
      "BullMQ",
      "Redis",
      "MyFatoorah",
      "AWS S3",
      "Vercel",
    ],
    image: null,
    url: null,
    github: null,
    badge: "Real-Time Systems",
  },
  {
    id: 4,
    title: "CTI: Climate Tracker Initiative",
    type: "Enterprise Security",
    category: "Company",
    status: "Strictly Confidential",
    isConfidential: true,
    description:
      "Designed and engineered a hardened enterprise authentication and access control infrastructure. Implemented SAML 2.0, OpenID Connect (OIDC), and Microsoft Entra ID (Azure AD) for strict organizational identity management.",
    highlights: [
      "Enterprise Single Sign-On (SSO) architecture utilizing SAML 2.0 and OIDC protocols",
      "Microsoft Entra ID (Azure AD) integration enforcing role-based organizational access control",
      "Hardened security boundary implementation protecting sensitive climate tracking data layers",
    ],
    tech: ["SAML 2.0", "OIDC", "Microsoft Entra ID", "Node.js", "Enterprise IAM", "Security"],
    image: null,
    url: null,
    github: null,
    badge: "Identity & Security",
  },
  {
    id: 1,
    title: "The Learner: E-Learning Platform",
    type: "E-Learning Platform",
    category: "Personal",
    status: "Open Source Demo",
    isConfidential: false,
    description:
      "An end-to-end full stack e-learning platform built before entering professional employment. Demonstrates strong foundational knowledge in RESTful APIs, database design, and interactive React user interfaces.",
    highlights: [
      "Complete student course enrollment workflows and interactive curriculum timeline tracking",
      "Dynamic course creation, publishing, and integrated student review management system",
      "Cloudinary cloud asset management for course video modules and instructor thumbnails",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "REST API", "Bootstrap"],
    image: Learn,
    url: null,
    github: "https://github.com/AryanKhan10/Learners",
    badge: "Full Stack Demo",
  },
];

const MyWork = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <section
      id="work"
      className={`relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-50"
      }`}
    >
      {/* Background Decorative Glows */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        </>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Architected </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">
              Projects & Systems
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p
            className={`max-w-3xl mx-auto mt-6 text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my professional evolution, ranging from foundational full-stack e-learning platforms to enterprise SAML 2.0 security infrastructures, AI-powered Shopify A/B testing engines, and multi-tenant cloud marketplaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
