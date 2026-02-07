'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Microservices Platform',
    description:
      'Full-scale microservices-based e-commerce system with event-driven order processing, multi-tenant payment orchestration across 3 PSPs, distributed saga workflows, and real-time inventory management using Redis distributed locks.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'Elasticsearch'],
    github: 'https://github.com/Yashwanth-K',
    live: null,
    featured: true,
    highlights: [
      'Saga orchestration across 5–6 microservices',
      'Redis-based idempotency for payment deduplication',
      '99.5% payment success rate',
    ],
  },
  {
    title: 'Real-Time Chat Processing Pipeline',
    description:
      'High-throughput backend system processing 50K+ daily chat transcripts with NLP-based classification, intelligent advisor routing via message queues, and end-to-end observability with ELK Stack.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Redis', 'Spark', 'Airflow', 'ELK'],
    github: null,
    live: null,
    featured: true,
    highlights: [
      'Sub-second API latency at 10K requests/hour',
      'Advisor routing reducing response time by 35%',
      '2M+ daily messages processed',
    ],
  },
  {
    title: 'URL Shortener at Scale',
    description:
      'System-design-driven URL shortener with custom aliases, click analytics, rate limiting, and auto-expiry. Built to demonstrate end-to-end system design implementation.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS'],
    github: 'https://github.com/Yashwanth-K',
    live: null,
    featured: true,
    highlights: [
      'Sub-50ms redirect latency with Redis caching',
      'Async analytics via Kafka consumers',
      'Token bucket rate limiting',
    ],
  },
  {
    title: 'Employee Management System',
    description:
      'Role-based employee management platform with secure CRUD operations, JWT authentication, and containerized deployment.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT'],
    github: 'https://github.com/Yashwanth-K',
    live: null,
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-medium mb-2">
            // projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Things I&apos;ve{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              built
            </span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                    Featured Project
                  </span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-[#a0a0a0] hover:text-white transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-[#a0a0a0] hover:text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Highlights */}
              {project.highlights && (
                <div className="mb-4 space-y-1">
                  {project.highlights.map((h, i) => (
                    <p key={i} className="text-xs text-[#a0a0a0] flex items-center gap-2">
                      <span className="text-green-400">✓</span> {h}
                    </p>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-[#2a2a2a] rounded text-blue-400 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-6 text-[#a0a0a0]">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <FiFolder className="text-blue-400" size={24} />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="text-[#a0a0a0] hover:text-white transition-colors"
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">{project.title}</h4>
                  <p className="text-[#a0a0a0] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[#a0a0a0] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}