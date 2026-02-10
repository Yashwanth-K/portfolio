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

const techCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: <FaJava size={30} /> },
      { name: 'Python', icon: <FaPython size={30} /> },
      { name: 'JavaScript', icon: <FaJs size={30} /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot size={30} /> },
      { name: 'React', icon: <SiReact size={30} /> },
      { name: 'Hibernate', icon: <SiHibernate size={30} /> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={30} /> },
      { name: 'MySQL', icon: <SiPostgresql size={30} /> },
      { name: 'MongoDB', icon: <SiMongodb size={30} /> },
    ],
  },
  {
    title: 'Caching & Search',
    items: [
      { name: 'Redis', icon: <SiRedis size={30} /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch size={30} /> },
    ],
  },
  {
    title: 'Messaging & Streaming',
    items: [
      { name: 'Apache Kafka', icon: <SiApachekafka size={30} /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq size={30} /> },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: <FaAws size={30} /> },
      { name: 'Docker', icon: <FaDocker size={30} /> },
      { name: 'Kubernetes', icon: <SiKubernetes size={30} /> },
    ],
  },
  {
    title: 'Security',
    items: [
      { name: 'JWT', icon: <SiJsonwebtokens size={30} /> },
      { name: 'Spring Security', icon: <SiSpringboot size={30} /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt size={30} /> },
      { name: 'GitHub Actions', icon: <SiGithubactions size={30} /> },
      { name: 'Linux', icon: <FaLinux size={30} /> },
      { name: 'Gradle', icon: <SiGradle size={30} /> },
      { name: 'Maven', icon: <SiApachemaven size={30} /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" style={{ padding: '120px 24px', borderTop: '1px solid #1a1a1a' }}>
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
            Tech Stack
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
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
                padding: '28px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#3b82f6', marginBottom: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {category.title}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: category.items.length <= 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                  gap: '12px',
                }}
              >
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 8px',
                      borderRadius: '8px',
                      transition: 'background-color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2a2a2a')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span style={{ color: '#a0a0a0' }}>{tech.icon}</span>
                    <span style={{ fontSize: '11px', color: '#a0a0a0' }}>{tech.name}</span>
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