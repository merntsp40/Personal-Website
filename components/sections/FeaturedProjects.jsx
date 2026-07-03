'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeader from '@/components/ui/SectionHeader';
import { featuredProjects } from '@/lib/data/projects';

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 px-6 sm:px-12 bg-secondary-50 dark:bg-secondary-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Highlighted work — deep dives into my best full-stack and frontend projects."
        />

        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-3xl overflow-hidden border border-secondary-200 dark:border-secondary-700 shadow-2xl group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={420}
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{project.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Problem</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Solution</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span><strong className="text-gray-700 dark:text-gray-300">Role:</strong> {project.role}</span>
                  <span><strong className="text-gray-700 dark:text-gray-300">Duration:</strong> {project.duration}</span>
                </div>

                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {project.features?.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-primary-500">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-secondary-200 dark:border-secondary-700 text-gray-700 dark:text-gray-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors text-sm font-medium"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
