'use client';

import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'Winon Wings',
    role: 'Software Engineer',
    period: 'Aug 2022 — Jan 2026',
    type: 'Full-time',
    highlights: [
      'Built event-driven order processing system supporting 100–150 orders/min with 99.5% uptime, reducing latency by 60%',
      'Designed multi-tenant payment orchestration across Razorpay, Stripe & PayU — processing $100K+ monthly with 99.5% success rate',
      'Implemented distributed saga orchestration coordinating 5–6 microservices with <300ms inter-service latency',
      'Built real-time inventory reservation using Redis distributed locks, handling 800–1,200 concurrent requests',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Redis', 'Elasticsearch', 'Docker'],
  },
  {
    company: 'TCS (Client: Apple)',
    role: 'Software Developer & ML Engineer',
    period: 'Mar 2021 — Aug 2022',
    type: 'Full-time',
    highlights: [
      'Built backend service processing 50K+ daily chat transcripts with NLP-based classification APIs at sub-second latency',
      'Designed advisor-assignment engine routing 15K+ daily support requests via RabbitMQ, improving response time by 35%',
      'Contributed to data pipeline handling 2M+ daily messages using Apache Airflow, HDFS, and Spark',
      'Developed issue detection service analyzing 100K+ monthly VOC case notes with ELK Stack observability',
    ],
    tech: ['Java', 'Spring Boot', 'Python', 'RabbitMQ', 'Spark', 'Airflow', 'Redis'],
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-medium mb-2">
            // experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where I&apos;ve{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              worked
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#2a2a2a]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#0a0a0a]"></div>

              {/* Content Card */}
              <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-blue-500/30 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <FiBriefcase className="text-blue-400" size={18} />
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <p className="text-[#a0a0a0] text-sm mb-1">{exp.role}</p>
                <p className="text-[#666] text-xs mb-4">{exp.period}</p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="text-[#a0a0a0] text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1.5 flex-shrink-0">
                        ▹
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-[#2a2a2a] rounded text-[#a0a0a0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}