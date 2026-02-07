'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-sm font-medium mb-2">
            // contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              connect
            </span>
          </h2>
          <p className="text-[#a0a0a0] leading-relaxed mb-10">
            I&apos;m currently open to backend / SDE roles where engineering
            depth is valued. Whether you have an opportunity, a question, or
            just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <a
            href="mailto:yashwanthkrishne@gmail.com"
            className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-blue-500/50 transition-colors group"
          >
            <FiMail
              className="text-blue-400 group-hover:scale-110 transition-transform"
              size={24}
            />
            <div className="text-left">
              <p className="text-xs text-[#666]">Email</p>
              <p className="text-sm text-[#a0a0a0] group-hover:text-white transition-colors">
                yashwanthkrishne@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-blue-500/50 transition-colors group"
          >
            <FiLinkedin
              className="text-blue-400 group-hover:scale-110 transition-transform"
              size={24}
            />
            <div className="text-left">
              <p className="text-xs text-[#666]">LinkedIn</p>
              <p className="text-sm text-[#a0a0a0] group-hover:text-white transition-colors">
                Yashwanth Krishna
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Yashwanth-K"
            target="_blank"
            className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-blue-500/50 transition-colors group"
          >
            <FiGithub
              className="text-blue-400 group-hover:scale-110 transition-transform"
              size={24}
            />
            <div className="text-left">
              <p className="text-xs text-[#666]">GitHub</p>
              <p className="text-sm text-[#a0a0a0] group-hover:text-white transition-colors">
                Yashwanth-K
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
            <FiMapPin className="text-blue-400" size={24} />
            <div className="text-left">
              <p className="text-xs text-[#666]">Location</p>
              <p className="text-sm text-[#a0a0a0]">Bengaluru, India</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="mailto:yashwanthkrishne@gmail.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
        >
          Say Hello 👋
        </motion.a>
      </div>
    </section>
  );
}