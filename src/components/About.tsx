import { FC } from "react"
import { motion } from "framer-motion"
import { Shield, Code, Terminal, Palette, Zap, Target } from "lucide-react"

const About: FC = () => {
  const skills = [
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Red Teaming, penetration testing, vulnerability research, and threat modeling.",
      gradient: "from-[#46AE62] to-emerald-500",
      delay: 0
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Senior JavaScript, MERN stack, backend APIs, and scalable systems.",
      gradient: "from-[#46AE62] to-emerald-400",
      delay: 0.1
    },
    {
      icon: Terminal,
      title: "Low-Level & Security",
      description: "Python automation, Rust tooling, exploit analysis, scripting.",
      gradient: "from-[#46AE62] to-emerald-500",
      delay: 0.2
    },
    {
      icon: Palette,
      title: "Design & UI",
      description: "Graphic design, UI/UX, and clean cyber-themed interfaces.",
      gradient: "from-[#46AE62] to-emerald-400",
      delay: 0.3
    },
  ]

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0d1117] to-[#101622] py-20 md:py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#46AE62]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#46AE62]/10 border border-[#46AE62]/30 mb-4">
            <Target className="w-4 h-4 text-[#46AE62]" />
            <span className="text-sm font-medium text-[#46AE62]">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-[#46AE62]">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bridging cybersecurity expertise with modern software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I am a <span className="text-white font-semibold">Cyber Security Engineer</span> 
                specializing in <span className="text-white font-semibold">Red Teaming</span>, 
                penetration testing, and secure <span className="text-white font-semibold">Software Development.</span>,
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                My focus is on identifying real-world vulnerabilities and helping
                organizations build resilient, secure systems against modern threats.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                With extensive experience in modern JavaScript ecosystems, backend
                development, and low-level languages, I bridge the critical gap between
                <span className="text-white font-semibold"> offensive security</span> and 
                <span className="text-white font-semibold"> secure engineering</span>.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I believe in proactive security measures, combining cutting-edge tools
                with fundamental principles to create robust defenses.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "20+", label: "Security Audits" },
                { value: "20+", label: "Projects Secured" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skill.delay }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#46AE62]/20 to-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/50 border border-gray-800 rounded-xl p-5 md:p-6 backdrop-blur-sm hover:border-[#46AE62]/30 transition-all duration-300">
                  {/* Icon Container */}
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 mb-4">
                    <skill.icon className={`w-6 h-6 md:w-7 md:h-7 text-[#46AE62]`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#46AE62] transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#46AE62]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:col-span-2 relative"
            >
              <div className="relative bg-gradient-to-br from-[#0c1220] to-[#0d1525] border border-[#46AE62]/20 rounded-xl p-6 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
                </div>
                
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-[#46AE62]/20">
                      <Zap className="w-6 h-6 text-[#46AE62]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Ready to Secure Your Systems?
                      </h3>
                      <p className="text-sm text-gray-400">
                        Let's discuss how I can help protect your infrastructure.
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 whitespace-nowrap"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About