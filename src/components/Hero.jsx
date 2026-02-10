'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const techTags = ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', 'AWS', 'PostgreSQL', 'Docker'];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '80px 20px 40px 20px',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          width: 'min(400px, 60vw)',
          height: 'min(400px, 60vw)',
          background: 'rgba(59, 130, 246, 0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '10%',
          width: 'min(400px, 60vw)',
          height: 'min(400px, 60vw)',
          background: 'rgba(139, 92, 246, 0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      ></div>

      <div style={{ width: '100%', maxWidth: '700px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#3b82f6', fontSize: 'clamp(15px, 3.5vw, 18px)', marginBottom: '12px', fontWeight: '500' }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(32px, 9vw, 56px)', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.1' }}
        >
          Yashwanth{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Krishna
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(17px, 4.5vw, 24px)', color: '#a0a0a0', marginBottom: '20px', fontWeight: '400' }}
        >
          Backend Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            color: '#a0a0a0',
            fontSize: 'clamp(14px, 3.5vw, 17px)',
            lineHeight: '1.8',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto',
            padding: '0 8px',
          }}
        >
          Backend engineer who cares about both the code and the business 
          outcome. 4+ years of building systems that don&apos;t just work — 
          they scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '32px',
            padding: '0 8px',
          }}
        >
          {techTags.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '5px 12px',
                fontSize: 'clamp(11px, 2.8vw, 13px)',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '20px',
                color: '#a0a0a0',
                whiteSpace: 'nowrap',
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              padding: '10px 24px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              fontWeight: '500',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 3vw, 15px)',
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              padding: '10px 24px',
              border: '1px solid #2a2a2a',
              borderRadius: '8px',
              fontWeight: '500',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 3vw, 15px)',
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}
        >
          <a href="https://github.com/Yashwanth-K" target="_blank" style={{ color: '#a0a0a0', textDecoration: 'none' }}>
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/yashwanth-k/" target="_blank" style={{ color: '#a0a0a0', textDecoration: 'none' }}>
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:yashwanthkrishne@gmail.com" style={{ color: '#a0a0a0', textDecoration: 'none' }}>
            <FiMail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <FiArrowDown style={{ color: '#a0a0a0' }} size={18} />
      </motion.div>
    </section>
  );
}