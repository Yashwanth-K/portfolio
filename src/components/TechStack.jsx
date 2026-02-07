'use client';

import { motion } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiApachekafka,
  SiRabbitmq,
  SiKubernetes,
  SiReact,
  SiHibernate,
  SiGithubactions,
  SiGradle,
  SiApachemaven,
} from 'react-icons/si';

const techCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: <FaJava size={28} /> },
      { name: 'Python', icon: <FaPython size={28} /> },
      { name: 'JavaScript', icon: <FaJs size={28} /> },
    ],
  },
  {
    title: 'Backend & Frameworks',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot size={28} /> },
      { name: 'Hibernate', icon: <SiHibernate size={28} /> },
      { name: 'React', icon: <SiReact size={28} /> },
    ],
  },
  {
    title: 'Databases & Search',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} /> },
      { name: 'MongoDB', icon: <SiMongodb size={28} /> },
      { name: 'Redis', icon: <SiRedis size={28} /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch size={28} /> },
    ],
  },
  {
    title: 'Messaging & Streaming',
    items: [
      { name: 'Kafka', icon: <SiApachekafka size={28} /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq size={28} /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: <FaAws size={28} /> },
      { name: 'Docker', icon: <FaDocker size={28} /> },
      { name: 'Kubernetes', icon: <SiKubernetes size={28} /> },
      { name: 'GitHub Actions', icon: <SiGithubactions size={28} /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt size={28} /> },
      { name: 'Linux', icon: <FaLinux size={28} /> },
      { name: 'Gradle', icon: <SiGradle size={28} /> },
      { name: 'Maven', icon: <SiApachemaven size={28} /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 px-6 bg-[#111111]">
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
            // tech stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              work with
            </span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl"
            >
              <h3 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors group cursor-default"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-blue-400 transition-colors">
                      {tech.icon}
                    </span>
                    <span className="text-sm text-[#a0a0a0] group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
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