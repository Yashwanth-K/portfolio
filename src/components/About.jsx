'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-lg mb-4 font-medium"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Yashwanth{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Krishna
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-[#a0a0a0] mb-6"
        >
          Backend Software Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#a0a0a0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build scalable distributed systems — payments, orders, inventory —
          that work under pressure. 4+ years of turning complex backend
          problems into reliable, production-grade solutions.
        </motion.p>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', 'AWS', 'PostgreSQL', 'Docker'].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#a0a0a0]"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#2a2a2a] rounded-lg font-medium hover:border-blue-500 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/Yashwanth-K"
            target="_blank"
            className="text-[#a0a0a0] hover:text-white transition-colors"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-[#a0a0a0] hover:text-white transition-colors"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="mailto:yashwanthkrishne@gmail.com"
            className="text-[#a0a0a0] hover:text-white transition-colors"
          >
            <FiMail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FiArrowDown className="text-[#a0a0a0]" size={20} />
      </motion.div>
    </section>
  );
}