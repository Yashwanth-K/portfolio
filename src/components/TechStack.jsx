'use client';

import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaJs, FaDocker, FaAws, FaGitAlt, FaLinux,
} from 'react-icons/fa';
import {
  SiSpringboot, SiPostgresql, SiMongodb, SiRedis, SiElasticsearch,
  SiApachekafka, SiRabbitmq, SiKubernetes, SiReact, SiHibernate,
  SiGithubactions, SiGradle, SiApachemaven, SiJsonwebtokens,
} from 'react-icons/si';

const iconSize = 'clamp(22px, 5vw, 30px)';

const techCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Hibernate', icon: <SiHibernate /> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'Caching & Search',
    items: [
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch /> },
    ],
  },
  {
    title: 'Messaging & Streaming',
    items: [
      { name: 'Apache Kafka', icon: <SiApachekafka /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq /> },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
    ],
  },
  {
    title: 'Security',
    items: [
      { name: 'JWT', icon: <SiJsonwebtokens /> },
      { name: 'Spring Security', icon: <SiSpringboot /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Gradle', icon: <SiGradle /> },
      { name: 'Maven', icon: <SiApachemaven /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" style={{ padding: 'clamp(60px, 10vw, 120px) 20px', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vw, 60px)' }}
        >
          <p style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '600', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Tech Stack
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: 'bold' }}>
            Technologies I{' '}
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              work with
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '16px',
          }}
        >
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              style={{
                padding: 'clamp(20px, 4vw, 28px)',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600', color: '#3b82f6', marginBottom: 'clamp(12px, 3vw, 20px)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {category.title}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: category.items.length <= 2 ? 'repeat(2, 1fr)' : `repeat(${Math.min(category.items.length, 3)}, 1fr)`,
                  gap: '8px',
                }}
              >
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 'clamp(8px, 2vw, 12px) 4px',
                      borderRadius: '8px',
                      transition: 'background-color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2a2a2a')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span style={{ color: '#a0a0a0', fontSize: iconSize, display: 'flex' }}>{tech.icon}</span>
                    <span style={{ fontSize: 'clamp(9px, 2.2vw, 11px)', color: '#a0a0a0' }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}