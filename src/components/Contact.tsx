import { FC, useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  Send, 
  MapPin, 
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react"

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "muhammadabdullahkhaver@gmail.com",
      link: "mailto:muhammadabdullahkhaver@gmail.com",
      color: "text-[#46AE62]"
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+92 3294171505",
      link: "tel:+923294171505",
      color: "text-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      color: "text-emerald-300"
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Available for projects",
      color: "text-emerald-200"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammadabdullahkhaver/",
      color: "hover:bg-blue-600 hover:border-blue-600",
      iconColor: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/abdullahkhaver",
      color: "hover:bg-gray-800 hover:border-gray-800",
      iconColor: "text-gray-300"
    },
    {
      icon: Twitter,
      label: "X",
      url: "https://x.com/abdullahkhaver",
      color: "hover:bg-blue-400 hover:border-blue-400",
      iconColor: "text-blue-300"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/abdullahkhaver",
      color: "hover:bg-pink-600 hover:border-pink-600",
      iconColor: "text-pink-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/+923294171505",
      color: "hover:bg-green-500 hover:border-green-500",
      iconColor: "text-green-400"
    }
  ]

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#101622] to-[#0c1220] py-20 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#46AE62]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
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
            <span className="text-sm font-medium text-[#46AE62]">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact <span className="text-[#46AE62]">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Reach out for cybersecurity collaborations, freelance projects, security audits,
            or software development inquiries. I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-xl p-4 hover:border-[#46AE62]/30 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gray-800/50 ${info.color}`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-medium hover:text-[#46AE62] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect with me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-4 border border-gray-800 rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:scale-105 transition-all duration-300 ${social.color}`}
                  >
                    <div className="mb-2">
                      <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                    </div>
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#46AE62]/10 to-emerald-500/10 border border-[#46AE62]/20 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#46AE62] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    For urgent security matters, please mention "URGENT" in your subject line
                    or use the phone contact for immediate response.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-[#46AE62] to-emerald-500 mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#46AE62] focus:ring-1 focus:ring-[#46AE62] transition-all"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#46AE62] focus:ring-1 focus:ring-[#46AE62] transition-all"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#46AE62] focus:ring-1 focus:ring-[#46AE62] transition-all"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="security">Security Audit / Pentesting</option>
                      <option value="development">Software Development</option>
                      <option value="consulting">Security Consulting</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project or inquiry..."
                      rows={5}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#46AE62] focus:ring-1 focus:ring-[#46AE62] transition-all resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
            
            {/* Response Time */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-[#46AE62] rounded-full animate-pulse" />
                <span>Average response time: 12-24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact