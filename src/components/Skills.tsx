import type { FC } from "react"
import { motion } from "framer-motion"
import { Shield, Code, Wrench, Target, TrendingUp } from "lucide-react"

interface Skill {
  name: string
  level: number // percentage
}

interface SkillCategory {
  title: string
  icon: any
  skills: Skill[]
  gradient: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cyber Security",
    icon: Shield,
    skills: [
      { name: "Red Teaming", level: 80 },
      { name: "Penetration Testing", level: 82 },
      { name: "Web & API Security", level: 88 },
      { name: "OWASP Top 10", level: 90 },
      { name: "Data Security", level: 95 },
    ],
    gradient: "from-[#46AE62] to-emerald-500"
  },
  {
    title: "Software Engineering",
    icon: Code,
    skills: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "React / React Native", level: 90 },
      { name: "MERN Stack", level: 94 },
      { name: "Node.js / Express", level: 90 },
      { name: "Core PHP", level: 70 },
    ],
    gradient: "from-[#46AE62] to-emerald-400"
  },
  {
    title: "Languages & Tools",
    icon: Wrench,
    skills: [
      { name: "Python", level: 92 },
      { name: "Rust", level: 70 },
      { name: "MongoDB / SQL", level: 85 },
      { name: "Linux", level: 90 },
      { name: "Git", level: 88 },
    ],
    gradient: "from-[#46AE62] to-emerald-500"
  },
]

const Skills: FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-[#101622] to-[#0c1220] py-20 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#46AE62]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      
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
            <Target className="w-4 h-4 text-[#46AE62]" />
            <span className="text-sm font-medium text-[#46AE62]">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & <span className="text-[#46AE62]">Proficiency</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A blend of offensive security expertise and modern software engineering skills, 
            focused on building and breaking systems securely.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#46AE62]/20 to-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl p-6 md:p-8 backdrop-blur-sm hover:border-[#46AE62]/30 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
                    <category.icon className="w-6 h-6 text-[#46AE62]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#46AE62] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-xs text-gray-400">Advanced Skills</div>
                      <div className="w-2 h-2 bg-[#46AE62] rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-5 md:space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      {/* Skill Info */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm md:text-base font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#46AE62]">
                            {skill.level}%
                          </span>
                          <TrendingUp className="w-4 h-4 text-emerald-400 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        {/* Background Track */}
                        <div className="absolute inset-0 bg-gray-800/30 rounded-full" />
                        
                        {/* Animated Progress */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            ease: "easeOut",
                            delay: index * 0.05
                          }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${category.gradient} shadow-lg shadow-emerald-500/20`}
                        />
                        
                        {/* Glow Effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 }}
                          className="absolute h-full w-4 bg-white/20 blur-sm"
                          style={{ 
                            left: `${skill.level}%`,
                            transform: 'translateX(-100%)'
                          }}
                        />
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="flex justify-between mt-1">
                        <div className="text-xs text-gray-500">Beginner</div>
                        <div className="text-xs text-gray-500">Expert</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 md:mt-8 pt-6 border-t border-gray-800/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Average proficiency</span>
                    <span className="font-semibold text-white">
                      {Math.round(category.skills.reduce((acc, s) => acc + s.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend / Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 max-w-2xl">
              <span className="text-[#46AE62] font-medium">Note:</span> Skills are rated based on professional experience, 
              certifications, and real-world application in security projects and software development.
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#46AE62] to-emerald-500" />
                <span className="text-xs text-gray-400">Current Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-800" />
                <span className="text-xs text-gray-400">Target Growth</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills