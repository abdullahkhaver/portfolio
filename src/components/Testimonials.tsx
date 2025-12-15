import { FC } from "react"
import { motion } from "framer-motion"
import { Quote, Star, MessageSquare, Users } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company?: string
  message: string
  rating?: number
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Chen",
    role: "Security Team Lead",
    company: "Enterprise Organization",
    message:
      "A highly skilled security engineer with strong red team expertise. His approach to penetration testing is methodical, realistic, and highly effective at identifying real-world vulnerabilities.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Senior Software Architect",
    company: "Tech Company",
    message:
      "Combines deep security knowledge with excellent software engineering skills. Delivers clean, secure, and scalable solutions that withstand rigorous security testing.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Security Startup",
    message:
      "Professional, reliable, and security-focused. A valuable contributor who bridges the gap between development teams and security requirements effectively.",
    rating: 5
  },
]

const Testimonials: FC = () => {
  return (
    <section
      id="testimonial"
      className="relative bg-gradient-to-b from-[#101622] to-[#0c1220] py-20 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#46AE62]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      
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
            <MessageSquare className="w-4 h-4 text-[#46AE62]" />
            <span className="text-sm font-medium text-[#46AE62]">Client Feedback</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-[#46AE62]">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Feedback from professionals and clients across cybersecurity audits, 
            software engineering projects, and security consulting engagements.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-[#46AE62]/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-700'}`}
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  "{testimonial.message}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-800/50">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#46AE62] to-emerald-500 flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#46AE62] rounded-full border-2 border-gray-900 flex items-center justify-center">
                      <Quote className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h4 className="text-sm md:text-base font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <div className="text-xs md:text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    {testimonial.company && (
                      <div className="text-xs text-[#46AE62] font-medium mt-1">
                        {testimonial.company}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "20+", label: "Projects Completed", icon: Users },
              { value: "100%", label: "Client Satisfaction", icon: Star },
              { value: "50+", label: "Vulnerabilities Found", icon: MessageSquare },
              { value: "2+", label: "Years Experience", icon: Quote },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#46AE62]/20 to-emerald-500/20 mb-4">
                  <stat.icon className="w-7 h-7 text-[#46AE62]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to discuss your security needs or software project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          >
            <MessageSquare size={18} />
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials