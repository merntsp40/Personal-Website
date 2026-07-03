'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeader from '@/components/ui/SectionHeader';
import { moreProjects } from '@/lib/data/projects';

export default function MoreProjects() {
  return (
    <section id="more-projects" className="py-24 px-6 sm:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="More Projects"
          subtitle="Additional builds showcasing versatility across frontend and full-stack development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {moreProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden border border-secondary-100 dark:border-secondary-700 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 dark:bg-secondary-900/90 backdrop-blur rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 hover:text-primary-500 transition-colors">
                      <FiGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo" className="p-2 rounded-lg bg-primary-500/10 text-primary-600 hover:bg-primary-500/20 transition-colors">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
