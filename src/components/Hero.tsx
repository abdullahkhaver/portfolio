import type{ FC } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Lock,
  Bug,
  Terminal,
  Cpu,
  Database,
  Key,
  Fingerprint
} from "lucide-react"

const Hero: FC = () => {
  // Assuming 'will-change-transform' is a custom utility class defined in Tailwind config:
  // { 'will-change-transform': { 'will-change': 'transform' } }
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0d1117] via-[#171C28] to-[#1a1f2e] flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      {/* Floating Icons - Added will-change-transform for performance */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-16 left-4 md:top-20 md:left-16 will-change-transform" // ADDED
      >
        <ShieldCheck className="text-[#46AE62]/30 w-8 h-8 md:w-10 md:h-10" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
        className="absolute bottom-24 left-4 md:bottom-32 md:left-32 will-change-transform" // ADDED
      >
        <Lock className="text-[#46AE62]/20 w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
      
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-24 right-4 md:top-40 md:right-40 will-change-transform" // ADDED
      >
        <Bug className="text-[#46AE62]/25 w-7 h-7 md:w-9 md:h-9" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-16 right-4 md:bottom-24 md:right-24 will-change-transform" // ADDED
      >
        <Terminal className="text-[#46AE62]/30 w-9 h-9 md:w-11 md:h-11" />
      </motion.div>

      {/* Additional floating icons for mobile - Added will-change-transform */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.1 }}
        className="absolute top-1/3 left-8 md:hidden will-change-transform" // ADDED
      >
        <Cpu className="text-[#46AE62]/15 w-6 h-6" />
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-8 md:hidden will-change-transform" // ADDED
      >
        <Database className="text-[#46AE62]/15 w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#46AE62]/10 border border-[#46AE62]/30 mb-6"
            >
              <Key className="w-4 h-4 text-[#46AE62]" />
              <span className="text-sm text-[#46AE62] font-medium">
                Red Team Specialist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-bold tracking-tight"
              style={{
                color: "rgb(70, 174, 98)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.2"
              }}
            >
              Cyber Security{" "}
              <span className="text-white block mt-2">
                & Software Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I build secure modern applications by identifying vulnerabilities,
              simulating real-world attacks, and building resilient systems
              using secure development practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#portfolio"
                role="button" 
                className="cursor-pointer z-999 px-8 py-3 bg-gradient-to-r from-[#46AE62] to-emerald-500 text-[#101622]
                           font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/25
                           transition-all duration-300 transform hover:-translate-y-1
                           flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5" />
                View Projects
              </a>
              
              <a
                href="#contact"
                role="button" // IMPROVED UX/A11Y
                className="z-999 px-8 py-3 border-2 border-[#46AE62] text-[#46AE62]
                           font-semibold rounded-lg hover:bg-[#46AE62]/10
                           transition-all duration-300 transform hover:-translate-y-1
                           flex items-center justify-center gap-2 cursor-pointer"
              >
                <Fingerprint className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>

          </motion.div>

{/* Right Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
>
  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
    
    {/* Animated Glowing Orbs */}
    <div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full bg-gradient-to-r from-[#46AE62] to-emerald-500 blur-xl will-change-transform`} // ADDED
          style={{
            width: `${60 + i * 20}%`,
            height: `${60 + i * 20}%`,
            top: `${i * 10}%`,
            left: `${i * 10}%`,
          }}
        />
      ))}
    </div>

    {/* Rotating Tech Ring - Added will-change-transform */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="absolute inset-0 will-change-transform" // ADDED
    >
      <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#46AE62]/30" />
    </motion.div>

    {/* Outer Dots Ring - Added will-change-transform */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      className="absolute inset-0 will-change-transform" // ADDED
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#46AE62] rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-130px)`,
          }}
        />
      ))}
    </motion.div>

    {/* Main Image Container */}
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Floating Card Effect */}
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15 
        }}
        className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden group will-change-transform" // ADDED
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        
        {/* Card Border Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#46AE62] via-emerald-500 to-[#46AE62] rounded-2xl blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Card Content */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#46AE62]/50 bg-gradient-to-br from-gray-900 to-black">
          
          {/* Binary Code Overlay - Keep as-is */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono text-[#46AE62] whitespace-nowrap"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                {Array.from({ length: 8 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
              </div>
            ))}
          </div>
          
          {/* Main Image - Improved alt text and onError alt text */}
          <img
            src="/profile.png"
            alt="Abdullah Khaver's Profile Portrait" // IMPROVED ALT TEXT
            className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://avatars.githubusercontent.com/u/203943488?v=4";
              (e.currentTarget as HTMLImageElement).alt =
                "Fallback profile image for Abdullah Khaver"; // ADDED FALLBACK ALT TEXT
            }}
          />
          
          {/* Glossy Overlay - Keep as-is */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
          
          {/* Scan Line Effect - Added will-change-transform */}
          <motion.div
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#46AE62]/80 to-transparent will-change-transform" // ADDED
          />
          
        </div>

        {/* Corner Accents - Keep as-is */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#46AE62]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#46AE62]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#46AE62]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#46AE62]" />

      </motion.div>

      {/* Floating Tech Icons Around Image */}
      {[
        { Icon: ShieldCheck, delay: 0, size: "w-6 h-6 md:w-8 md:h-8" },
        { Icon: Lock, delay: 0.2, size: "w-5 h-5 md:w-7 md:h-7" },
        { Icon: Bug, delay: 0.4, size: "w-6 h-6 md:w-8 md:h-8" },
        { Icon: Terminal, delay: 0.6, size: "w-5 h-5 md:w-7 md:h-7" },
      ].map(({ Icon, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + delay }}
          className={`absolute ${size} text-[#46AE62]`}
          style={{
            top: `${25 + Math.sin(index * (Math.PI / 2)) * 35}%`,
            left: `${25 + Math.cos(index * (Math.PI / 2)) * 35}%`,
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 2 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
            className="will-change-transform" // ADDED
          >
            <Icon className="w-full h-full drop-shadow-lg" />
          </motion.div>
        </motion.div>
      ))}

      {/* Certification Badge - Added will-change-transform */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: 1.2 
        }}
        className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 will-change-transform" // ADDED
      >
        <div className="relative">
          {/* Badge Shadow - Keep as-is */}
          <div className="absolute inset-0 bg-emerald-900/50 blur-md rounded-xl" />
          
          {/* Badge Content - Keep as-is */}
          <div className="relative bg-gradient-to-br from-[#46AE62] to-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-400/30">
            <div className="flex items-center gap-2">
              <div className="relative">
                <ShieldCheck className="w-5 h-5" />
                <div className="absolute inset-0 bg-emerald-400/20 blur-sm" />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold tracking-wider">CEH v12</div>
                <div className="text-[10px] opacity-90">Certified</div>
              </div>
            </div>
            
            {/* Shine Effect - Keep as-is */}
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </div>
        </div>
      </motion.div>

      {/* Data Points - Keep as-is */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -left-4 top-1/4 hidden lg:block"
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border-l-2 border-[#46AE62] px-3 py-2 rounded-r-lg">
          <div className="text-xs text-gray-300">Pentesting</div>
          <div className="text-sm font-bold text-white">Expert</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute -right-4 bottom-1/4 hidden lg:block"
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border-r-2 border-emerald-500 px-3 py-2 rounded-l-lg">
          <div className="text-xs text-gray-300">Red Team</div>
          <div className="text-sm font-bold text-white">Specialist</div>
        </div>
      </motion.div>

    </div>
  </div>
</motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero