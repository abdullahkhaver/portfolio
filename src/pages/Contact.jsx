import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope size={28} className="text-[#C27AFF]" />,
    label: "Email",
    value: "muhammadabdullahkhaver@gmail.com",
    link: "mailto:muhammadabdullahkhaver@gmail.com",
  },
  {
    icon: <FaPhone size={28} className="text-[#C27AFF]" />,
    label: "Phone",
    value: "+92 329 4171505",
    link: "tel:+923294171505",
  },
];

const socials = [
  {
    icon: <FaWhatsapp size={28} />,
    label: "WhatsApp",
    link: "https://wa.me/923294171505",
  },
  {
    icon: <FaInstagram size={28} />,
    label: "Instagram",
    link: "https://instagram.com/abdullahkhaver", 
  },
  {
    icon: <FaLinkedin size={28} />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/muhammadabdullahkhaver/",
  },
  {
    icon: <FaGithub size={28} />,
    label: "GitHub",
    link: "https://github.com/abdullahkhaver",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 flex flex-col justify-center items-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-xl w-full mb-12 px-4"
      >
        <h1 className="text-4xl font-bold text-[#C27AFF] mb-2">Contact Me</h1>
        <p className="text-lg text-gray-400">
          Have an idea, project, or just want to chat? Reach out anytime.
        </p>
      </motion.div>

      <div className="w-full max-w-3xl space-y-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="flex items-center gap-4 bg-[#1f1f1f] p-6 rounded-lg hover:bg-[#292929] transition-shadow shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              <div>
                <h4 className="text-sm font-semibold text-gray-400">{item.label}</h4>
                <p className="text-lg break-all">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#C27AFF] mb-6">Follow Me</h3>
          <div className="flex justify-center gap-10 flex-wrap">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.link}
                className="text-gray-300 hover:text-[#C27AFF] transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
