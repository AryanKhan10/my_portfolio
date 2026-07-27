"use client";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index = 0 }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className={`${
        theme === "dark"
          ? "bg-[#121212] border border-gray-800/80 hover:border-cyan-500/50 glow-blue-sm"
          : "bg-white border border-gray-200 hover:border-cyan-500 shadow-sm"
      } relative overflow-hidden rounded-2xl p-5 transition-all duration-300 group flex items-center space-x-4`}
    >
      {/* Icon container */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} text-white p-2.5 shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0`}
      >
        {skill.icon}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className={`text-base font-bold truncate ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          {skill.name}
        </h3>
        {skill.category && (
          <span className={`text-xs font-medium block mt-0.5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            {skill.category}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;
