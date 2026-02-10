'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Winon Wings',
    role: 'Software Engineer',
    period: 'Aug 2022 — Jan 2026',
    type: 'Full-time',
    highlights: [
      'Built event-driven order processing system supporting 100–150 orders/min with 99.5% uptime',
      'Designed multi-tenant payment orchestration across Razorpay, Stripe & PayU — $100K+ monthly',
      'Implemented distributed saga orchestration coordinating 5–6 microservices with <300ms latency',
      'Built real-time inventory reservation using Redis distributed locks for 1,200 concurrent requests',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Redis', 'Elasticsearch'],
  },
  {
    company: 'TCS (Client: Apple)',
    role: 'Software Developer & ML Engineer',
    period: 'Mar 2021 — Aug 2022',
    type: 'Full-time',
    highlights: [
      'Built backend service processing 50K+ daily chat transcripts with sub-second latency',
      'Designed advisor-assignment engine routing 15K+ daily requests, improving response time by 35%',
      'Contributed to data pipeline handling 2M+ daily messages using Airflow, HDFS, and Spark',
      'Developed issue detection service analyzing 100K+ monthly VOC case notes with ELK Stack',
    ],
    tech: ['Java', 'Spring Boot', 'Python', 'RabbitMQ', 'Spark', 'Redis'],
  },
  {
    company: 'Applied AI',
    role: 'Software Developer Intern',
    period: 'Jun 2020 — Nov 2020',
    type: 'Internship',
    highlights: [
      'Developed AWS-based tagging and forecasting utilities using Python and Lambda/S3',
      'Automated grading workflows, saving 8–10 hours/week for instructors',
    ],
    tech: ['Python', 'AWS Lambda', 'S3', 'Selenium'],
  },
  {
    company: 'Big Basket',
    role: 'Data Analyst Intern',
    period: 'Feb 2019 — Apr 2019',
    type: 'Internship',
    highlights: [
      'Built customer churn prediction model using SVM on 1M+ records with ~80% accuracy',
      'Automated data extraction and reporting, reducing manual effort by ~40%',
    ],
    tech: ['Python', 'SVM', 'BeautifulSoup', 'SQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'clamp(60px, 10vw, 120px) 20px', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vw, 60px)' }}
        >
          <p style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '600', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Experience
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: 'bold' }}>
            Where I&apos;ve{' '}
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              worked
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: 'clamp(20px, 4vw, 32px)',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                borderLeft: '3px solid #3b82f6',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a2a2a';
                e.currentTarget.style.borderLeftColor = '#3b82f6';
              }}
            >
              {/* Company Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 'bold', marginBottom: '4px' }}>{exp.company}</h3>
                  <p style={{ color: '#a0a0a0', fontSize: 'clamp(13px, 3vw, 15px)' }}>{exp.role}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', padding: '3px 10px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    {exp.type}
                  </span>
                  <p style={{ color: '#666', fontSize: 'clamp(11px, 2.5vw, 13px)', marginTop: '6px', whiteSpace: 'nowrap' }}>{exp.period}</p>
                </div>
              </div>

              {/* Highlights */}
              <ul style={{ margin: '16px 0', paddingLeft: '0', listStyle: 'none' }}>
                {exp.highlights.map((point, i) => (
                  <li key={i} style={{
                    color: '#a0a0a0',
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    lineHeight: '1.7',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <span style={{ color: '#3b82f6', marginTop: '2px', flexShrink: 0 }}>▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                    padding: '3px 8px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '4px',
                    color: '#a0a0a0',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}