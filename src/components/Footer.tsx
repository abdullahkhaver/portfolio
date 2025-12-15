import { FC } from "react"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

const Footer: FC = () => {
  return (
    <footer className="bg-[#101622] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Abdullah Khaver. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/muhammadabdullahkhaver/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#46AE62] transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/abdullahkhaver"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#46AE62] transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://x.com/abdullahkhaver"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#46AE62] transition"
          >
            <Twitter size={20} />
          </a>

          <a
            href="mailto:muhammadabdullahkhaver@gmail.com"
            className="text-gray-400 hover:text-[#46AE62] transition"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
