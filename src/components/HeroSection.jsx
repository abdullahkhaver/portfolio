import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import yourPhoto from "../assets/your-photo.png";
import HeroParticles from "./HeroParticles";
import { Link } from "react-router-dom";

const phrases = [
  "Full Stack Developer",
  "Web Security Specialist",
  "UI/UX Wizard",
  "Python Programmer",
];

const HeroSection = () => {
  return (
<section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-4 sm:px-6 overflow-hidden pt-24">

      <HeroParticles />

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 py-12 z-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Hey, I'm <span className="text-[#C27AFF]">Abdullah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl min-h-[40px]"
          >
            <Typewriter
              words={phrases}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              to="/about"
              className="inline-block px-6 py-3 rounded-lg bg-[#C27AFF] text-white font-medium hover:bg-[#a758e5] transition magnetic"
            >
              Discover More
            </Link>
          </motion.div>
        </div>

        {/* Animated Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-1 max-w-[250px] sm:max-w-xs md:max-w-sm lg:max-w-md mt-10 md:mt-0"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px #C27AFF",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full aspect-square rounded-full overflow-hidden mx-auto border-4 border-[#C27AFF] shadow-[0_0_30px_#C27AFF] bg-gradient-to-br from-[#C27AFF] via-transparent to-black"
          >
            <img
              src={yourPhoto}
              alt="Muhammad Abdullah"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 rounded-full blur-3xl bg-[#C27AFF]/30 animate-pulse-slow z-[-1]" />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
