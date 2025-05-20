import React from "react";
import { motion } from "framer-motion";
 "react-icons/fa";
  
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaPhp,
  FaWindowMaximize,
  FaBug,
  FaNetworkWired,
  FaShieldAlt,
  FaUserSecret,
  FaLock,
  FaTerminal,
  FaEye,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiWordpress,
  SiShadcnui,
  SiFramer,
} from "react-icons/si";


const PRIMARY_COLOR = "#C27AFF";

const techStacks = {
    frontend: [
      { icon: <FaHtml5 size={36} color="#e34c26" />, name: "HTML5" },
      { icon: <FaCss3Alt size={36} color="#1572b6" />, name: "CSS3" },
      { icon: <FaJsSquare size={36} color="#f7df1e" />, name: "JavaScript" },
      { icon: <FaReact size={36} color="#61dafb" />, name: "React" },
      { icon: <SiNextdotjs size={36} color="white" />, name: "Next.js" },
      { icon: <SiTailwindcss size={36} color="#38b2ac" />, name: "Tailwind CSS" },
      { icon: <FaWindowMaximize size={36} color="#0081CB" />, name: "Material UI" },
      { icon: <SiBootstrap size={36} color="#563d7c" />, name: "Bootstrap" },
      { icon: <SiShadcnui size={36} color="#c27aff" />, name: "ShadCN UI" },
    ],
    backend: [
      { icon: <FaPhp size={36} color="#8892be" />, name: "PHP" },
      { icon: <FaNodeJs size={36} color="#68a063" />, name: "Node.js" },
      { icon: <SiExpress size={36} color="white" />, name: "Express.js" },
    ],
    database: [
      { icon: <SiMongodb size={36} color="#47a248" />, name: "MongoDB" },
      { icon: <SiMysql size={36} color="#4479A1" />, name: "MySQL" },
    ],
    gui: [
      { icon: <FaPython size={36} color="#3776AB" />, name: "Python" },
      { icon: <FaWindowMaximize size={36} color="#FFDE57" />, name: "Tkinter" },
      { icon: <FaWindowMaximize size={36} color="#41CD52" />, name: "PyQt5" },
      { icon: <FaWindowMaximize size={36} color="#00C49F" />, name: "Flet" },
    ],
    tools: [
      { icon: <FaGitAlt size={36} color="#f05032" />, name: "Git" },
      { icon: <SiWordpress size={36} color="#21759B" />, name: "WordPress" },
      { icon: <SiFramer size={36} color="#e100ff" />, name: "Framer Motion" },
    ],
    cybersecurity: [
        { icon: <FaBug size={36} color="#FF5722" />, name: "Burp Suite" },
        { icon: <FaNetworkWired size={36} color="#4CAF50" />, name: "Nmap" },
        { icon: <FaShieldAlt size={36} color="#00BFA5" />, name: "TLS/SSL" },
        { icon: <FaUserSecret size={36} color="#6C63FF" />, name: "TryHackMe" },
        { icon: <FaLock size={36} color="#9C27B0" />, name: "Encryption" },
        { icon: <FaTerminal size={36} color="#607D8B" />, name: "Metasploit" },
        { icon: <FaEye size={36} color="#FFC107" />, name: "OSINT" },
        { icon: <FaWindowMaximize size={36} color="#268bd2" />, name: "Wireshark" },
        { icon: <FaUserSecret size={36} color="#ff4757" />, name: "Kali Linux" },
        { icon: <FaUserSecret size={36} color="#2ed573" />, name: "Parrot OS" },
      ],
      
  };
  

const TechCategory = ({ title, stack }) => (
  <div className="mb-10">
    <h4 className="text-xl font-semibold mb-4 text-center">{title}</h4>
    <div className="flex flex-wrap justify-center gap-6">
      {stack.map(({ icon, name }) => (
        <div
          key={name}
          className="relative group cursor-default w-12 h-12 flex items-center justify-center"
        >
          {icon}
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#C27AFF] text-black text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-24 text-gray-300 mt-16">

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-[#C27AFF]">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hey, I’m Abdullah — a passionate developer on a mission to craft
          powerful and beautiful digital experiences. I blend clean code with
          creative design, aiming to build tech that just works — fast, smooth,
          and seamless.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {[
          { icon: <FaJsSquare size={40} />, label: "JavaScript" },
          { icon: <FaReact size={40} />, label: "React & Next.js" },
          { icon: <FaPhp size={40} />, label: "Full Stack PHP" },
          { icon: <FaGitAlt size={40} />, label: "Version Control" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="hover:text-[#C27AFF] transition-colors cursor-default"
          >
            <div className="mb-3">{icon}</div>
            <p className="text-lg font-semibold">{label}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-3xl font-bold mb-10 text-center text-[#C27AFF]">
          Tech Stack
        </h3>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <TechCategory title="Frontend" stack={techStacks.frontend} />
          <TechCategory title="Backend" stack={techStacks.backend} />
          <TechCategory title="Database" stack={techStacks.database} />
          <TechCategory title="GUI Frameworks" stack={techStacks.gui} />
          <TechCategory title="Tools" stack={techStacks.tools} />
          <TechCategory title="Cybersecurity" stack={techStacks.cybersecurity} />

        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center bg-[#1A1A1A] border border-[#333] rounded-xl p-8 max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-3 text-[#C27AFF]">My Mission</h3>
        <p className="text-gray-400 text-lg italic leading-relaxed">
          To innovate, design, and deliver full-stack experiences that merge technology, security
          and creativity — empowering people, projects, and progress.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
