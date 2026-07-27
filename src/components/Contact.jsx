import React from "react";
import { Send, Mail, User, MessageSquare, Phone, MapPin, Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useSelector((state) => state.theme.theme);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_bivx47o",
        "template_t6aznal",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "6H6QtnmRclwx2iBwW"
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      className={`relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-50"
      }`}
      id="contact"
    >
      {/* Background Glows */}
      {theme === "dark" && (
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Contact </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className={`max-w-2xl mx-auto mt-6 text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Have an exciting project, a complex backend challenge, or an opportunity to collaborate? Let's connect and build something remarkable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`max-w-5xl mx-auto rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#121212] border-gray-800/80 glow-blue-sm"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="grid md:grid-cols-12">
            {/* Contact Info Banner */}
            <div className="md:col-span-5 bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Let's Connect</h3>
                <p className="text-cyan-100 text-sm sm:text-base mb-8 leading-relaxed">
                  Whether you have an idea for a web app or need consulting on scalable system design, I'm always ready to discuss new opportunities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Email</h4>
                      <p className="text-sm font-medium">aryan.cs.uet@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Phone</h4>
                      <p className="text-sm font-medium">+92 315 9420360</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Location</h4>
                      <p className="text-sm font-medium">Pakistan • Remote Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 mt-8 border-t border-white/20">
                <p className="text-xs text-cyan-100 uppercase tracking-widest font-semibold mb-3">
                  Social Networks
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/AryanKhan10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl transition-all border border-white/20 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aryan-ahmad-khan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl transition-all border border-white/20 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`md:col-span-7 p-8 sm:p-12 ${theme === "dark" ? "bg-[#121212]" : "bg-white"}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className={`block w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          theme === "dark"
                            ? "bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500"
                            : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                        }`}
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        className={`block w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          theme === "dark"
                            ? "bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500"
                            : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                        }`}
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                        })}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`block w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      theme === "dark"
                        ? "bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                    }`}
                    placeholder="Project Inquiry / Consultation"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1.5">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    className={`block w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      theme === "dark"
                        ? "bg-[#0a0a0a] border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                    }`}
                    placeholder="Tell me about your project requirements or questions..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl shadow-lg text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 glow-blue-sm disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
