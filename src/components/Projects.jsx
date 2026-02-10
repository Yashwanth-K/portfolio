'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Microservices Platform',
    description:
      'A microservices-based e-commerce backend designed around domain-driven boundaries — separating order, payment, inventory, and notification concerns into independently deployable services ',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Redis', 'Docker'],
    github: 'https://github.com/Yashwanth-K',
    featured: false,
    highlights: [
      'Saga pattern for multi-service transactions with automatic rollback on payment or inventory failures',
      'Redis-based inventory locking to prevent overselling during concurrent purchases',
      'Dockerized multi-service setup with docker-compose for single-command local deployment',
    ]
  },
  {
    title: 'Distributed API Gateway with Rate Limiting',
    description:
      'A Spring Boot-based API gateway designed to sit in front of microservices — handling authentication, traffic shaping, caching, and observability as a single entry point with enforced SLA compliance.',
    tech: ['Java', 'Spring Boot', 'Redis', 'Nginx', 'Prometheus', 'Grafana'],
    github: "https://github.com/Yashwanth-K",
    featured: false,
    highlights: [
      'Token bucket & sliding window rate limiters with Redis-backed distributed counters',
      'Circuit breaker with configurable thresholds and automatic recovery',
      'Request/response caching with cache invalidation strategies',
    ],
  },
  {
    title: 'Employee Management System',
    description:
      'REST API with proper auth, role-based permissions, and clean project structure following standard Spring Boot production patterns.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT'],
    github: 'https://github.com/Yashwanth-K/employee-management-system',
    featured: false,
     highlights: [
      'JWT authentication with role-based access — Admin, Manager, and Employee permission levels',
      'Standardized API responses with validation, error handling, and paginated endpoints',
      'Docker-compose setup — one command starts both the application and MySQL database',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px', borderTop: '1px solid #1a1a1a' }}>
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
            Projects
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>
            Things I&apos;ve{' '}
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              built
            </span>
          </h2>
        </motion.div>

        {/* All Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '32px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              {/* Title Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  {project.featured && (
                    <span style={{
                      fontSize: '11px',
                      color: '#3b82f6',
                      fontWeight: '600',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      ★ Featured Project
                    </span>
                  )}
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{project.title}</h3>
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" style={{ color: '#a0a0a0', textDecoration: 'none' }}>
                    <FiGithub size={20} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div style={{ marginBottom: '16px' }}>
                  {project.highlights.map((h, i) => (
                    <p key={i} style={{
                      color: '#a0a0a0',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '8px',
                      lineHeight: '1.6',
                    }}>
                      <span style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}>✓</span> {h}
                    </p>
                  ))}
                </div>
              )}

              {/* Tech */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '4px',
                    color: '#3b82f6',
                    fontFamily: 'monospace',
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