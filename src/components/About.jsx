'use client';

import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiServer size={28} />,
    title: 'Distributed Systems',
    desc: 'Event-driven architectures, saga orchestration, microservices at scale',
  },
  {
    icon: <FiDatabase size={28} />,
    title: 'Data & Storage',
    desc: 'PostgreSQL, Redis, Elasticsearch, Kafka — right tool for the job',
  },
  {
    icon: <FiCloud size={28} />,
    title: 'Cloud & DevOps',
    desc: 'AWS, Docker, Kubernetes, CI/CD — shipping code reliably',
  },
  {
    icon: <FiCpu size={28} />,
    title: 'System Design',
    desc: 'Trade-offs, latency budgets, failure modes — thinking beyond features',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '600', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            About Me
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.3' }}>
            Give me a problem,  
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {' '}I&apos;ll{' '} figure it out
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ maxWidth: '700px', margin: '0 auto 60px auto', textAlign: 'center' }}
        >
          <p style={{ color: '#a0a0a0', lineHeight: '1.9', marginBottom: '20px', fontSize: '16px' }}>
          I&apos;m a backend engineer with 4+ years of experience, currently focused on
          building reliable systems that solve real business problems. I&apos;ve worked
          at TCS on Apple&apos;s enterprise platform and at Winon Wings building
          e-commerce infrastructure — each role teaching me something new about
          writing software that holds up in production.
          </p>
          <p style={{ color: '#a0a0a0', lineHeight: '1.9', marginBottom: '20px', fontSize: '16px' }}>
          I&apos;m someone who genuinely enjoys the challenge of breaking down complex
          problems — whether it&apos;s designing a system from scratch, debugging
          something at 2 AM, or figuring out how to make AI work within existing
          workflows. I like staying close to both the technical depth and the
          business impact of what I build. For me, the best code is the one that
          turns into a working product someone actually uses.
          </p>
          <p style={{ color: '#a0a0a0', lineHeight: '1.9', fontSize: '16px' }}>
          Outside of work, I spend my time playing cricket and chess, participating
          in coding challenges, and exploring how AI can be integrated into
          everyday engineering. I&apos;m always looking for the next problem worth solving.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '28px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                textAlign: 'center',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              <div style={{ color: '#3b82f6', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>{item.title}</h3>
              <p style={{ color: '#a0a0a0', fontSize: '13px', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}