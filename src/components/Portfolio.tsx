import type{ FC } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Shield, Eye, Terminal, Lock } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  category: string
  live?: string
  github?: string
  icon: any
}

const projects: Project[] = [
  {
    title: "Secure MERN Authentication System",
    description:
      "Designed and implemented a secure authentication system with JWT, role-based access control, and common attack mitigations.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Security"],
    image: "/projects/auth-system.png",
    category: "Security Engineering",
    github: "#",
    icon: Shield
  },
  {
    title: "Web Application Penetration Testing",
    description:
      "Performed full-scope penetration testing on a production-like web application following OWASP Top 10 methodology.",
    tech: ["Burp Suite", "OWASP", "Pentesting", "Reports"],
    image: "/projects/pentest.png",
    category: "Red Teaming",
    icon: Eye
  },
  {
    title: "Rust-Based Security Tool",
    description:
      "Built a high-performance security scanning tool in Rust for identifying misconfigurations and weak endpoints.",
    tech: ["Rust", "Security", "CLI", "Automation"],
    image: "/projects/rust-tool.png",
    category: "Security Tooling",
    github: "#",
    icon: Terminal
  },
  {
    title: "Cyber-Themed Portfolio Website",
    description:
      "A modern animated portfolio showcasing cybersecurity and software engineering expertise with responsive design.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.png",
    category: "Frontend Development",
    live: "#",
    github: "#",
    icon: Lock
  },
]

const Portfolio: FC = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-b from-[#101622] to-[#0c1220] py-20 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#46AE62]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#46AE62]/10 border border-[#46AE62]/30 mb-4">
            <Eye className="w-4 h-4 text-[#46AE62]" />
            <span className="text-sm font-medium text-[#46AE62]">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Project <span className="text-[#46AE62]">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Selected projects demonstrating real-world cybersecurity expertise, 
            secure engineering practices, and modern software development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#46AE62]/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#46AE62]/30 transition-all duration-300 h-full">
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  {/* Image */}
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&fit=crop&ixid=${index}`
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700/50">
                    <project.icon className="w-4 h-4 text-[#46AE62]" />
                    <span className="text-xs font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#46AE62] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 text-gray-300 font-medium"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-4">
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </motion.a>
                      )}

                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white hover:border-[#46AE62]/30 transition-all duration-300"
                        >
                          <Github size={16} />
                          View Code
                        </motion.a>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-[#46AE62] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={18} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-[#46AE62] to-emerald-500">
            <div className="bg-gray-900 rounded-2xl px-8 py-6">
              <p className="text-gray-300 mb-4">
                Want to see more security projects or discuss custom solutions?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <Shield size={18} />
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio