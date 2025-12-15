import type { FC } from "react"
import { motion } from "framer-motion"
import { Award, ShieldCheck, Star, Trophy, Target, Zap } from "lucide-react"

interface AwardItem {
  title: string
  organization: string
  year: string
  description: string
  icon: any
  gradient: string
}

const awards: AwardItem[] = [
  {
    title: "Top Red Team Performer",
    organization: "Offline Cyber Security Lab",
    year: "2024",
    description:
      "Recognized for outstanding performance in red team operations and real-world attack simulations.",
    icon: ShieldCheck,
    gradient: "from-[#46AE62] to-emerald-500"
  },
  {
    title: "Outstanding Security Researcher",
    organization: "Security Community",
    year: "2023",
    description:
      "Awarded for vulnerability research, exploit analysis, and responsible disclosure contributions.",
    icon: Award,
    gradient: "from-[#46AE62] to-emerald-400"
  },
  {
    title: "Senior Software Engineering Excellence",
    organization: "Devonix Tech",
    year: "2025",
    description:
      "Recognized for building secure, scalable applications and mentoring engineers in security practices.",
    icon: Star,
    gradient: "from-[#46AE62] to-emerald-500"
  },
]

const Awards: FC = () => {
  return (
    <section
      id="award"
      className="relative bg-gradient-to-b from-[#101622] to-[#0c1220] py-20 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#46AE62]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
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
            <Trophy className="w-4 h-4 text-[#46AE62]" />
            <span className="text-sm font-medium text-[#46AE62]">Honors & Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Awards & <span className="text-[#46AE62]">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Professional recognition for excellence in cybersecurity research, 
            software engineering, and security leadership.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#46AE62]/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-[#46AE62]/30 transition-all duration-300 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
                    <award.icon className="w-8 h-8 text-[#46AE62]" />
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className="px-3 py-1 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {award.year}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#46AE62] transition-colors duration-300">
                  {award.title}
                </h3>

                {/* Organization */}
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400 font-medium">
                    {award.organization}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {award.description}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#46AE62]/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#46AE62]/20 to-emerald-500/20">
                  <Zap className="w-8 h-8 text-[#46AE62]" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Continuous Security Learning & Contributions
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Actively participating in bug bounty programs, open-source security projects, 
                    and security conferences to stay at the forefront of cybersecurity trends.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {[
                      "Bug Bounty Hunter",
                      "Open Source Contributor",
                      "Security Conference Speaker",
                      "CTF Participant"
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800/50"
        >
          <div className="text-center">
            <p className="text-sm text-gray-400">
              <span className="text-[#46AE62] font-medium">Note:</span> 
              {" "}All achievements are verified and supported by certificates, 
              awards, or official recognition from respective organizations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards