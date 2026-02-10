'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(60px, 10vw, 120px) 20px', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '600', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Contact
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: 'bold', marginBottom: '20px' }}>
            Let&apos;s{' '}
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              connect
            </span>
          </h2>
          <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '40px', fontSize: 'clamp(14px, 3.5vw, 16px)', padding: '0 8px' }}>
            I&apos;m always open to conversations around challenging engineering
            problems and impactful product work. Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '36px',
          }}
        >
          <a
            href="mailto:yashwanthkrishne@gmail.com"
            style={{
              display: 'flex', alignItems: 'center', gap: '14px', padding: '16px',
              backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px',
              textDecoration: 'none', transition: 'border-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
          >
            <FiMail style={{ color: '#3b82f6', flexShrink: 0 }} size={22} />
            <div style={{ textAlign: 'left', overflow: 'hidden' }}>
              <p style={{ color: '#666', fontSize: '11px', marginBottom: '3px' }}>Email</p>
              <p style={{ color: '#a0a0a0', fontSize: 'clamp(11px, 2.8vw, 13px)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>yashwanthkrishne@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/yashwanth-k/"
            target="_blank"
            style={{
              display: 'flex', alignItems: 'center', gap: '14px', padding: '16px',
              backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px',
              textDecoration: 'none', transition: 'border-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
          >
            <FiLinkedin style={{ color: '#3b82f6', flexShrink: 0 }} size={22} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: '#666', fontSize: '11px', marginBottom: '3px' }}>LinkedIn</p>
              <p style={{ color: '#a0a0a0', fontSize: 'clamp(11px, 2.8vw, 13px)' }}>Yashwanth Krishna</p>
            </div>
          </a>

          <a
            href="https://github.com/Yashwanth-K"
            target="_blank"
            style={{
              display: 'flex', alignItems: 'center', gap: '14px', padding: '16px',
              backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px',
              textDecoration: 'none', transition: 'border-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
          >
            <FiGithub style={{ color: '#3b82f6', flexShrink: 0 }} size={22} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: '#666', fontSize: '11px', marginBottom: '3px' }}>GitHub</p>
              <p style={{ color: '#a0a0a0', fontSize: 'clamp(11px, 2.8vw, 13px)' }}>Yashwanth-K</p>
            </div>
          </a>

          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '14px', padding: '16px',
              backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px',
            }}
          >
            <FiMapPin style={{ color: '#3b82f6', flexShrink: 0 }} size={22} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: '#666', fontSize: '11px', marginBottom: '3px' }}>Location</p>
              <p style={{ color: '#a0a0a0', fontSize: 'clamp(11px, 2.8vw, 13px)' }}>Bengaluru, India</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="mailto:yashwanthkrishne@gmail.com"
          style={{
            display: 'inline-block', padding: '12px 32px',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            borderRadius: '8px', fontWeight: '500', fontSize: 'clamp(14px, 3.5vw, 16px)',
            color: '#ffffff', textDecoration: 'none',
          }}
        >
          Say Hello 👋
        </motion.a>
      </div>
    </section>
  );
}