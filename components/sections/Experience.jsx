'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { experience } from '@/lib/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 bg-secondary-50 dark:bg-secondary-900 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="My Journey"
          subtitle="A timeline of growth — from first lines of code to building full-stack applications."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500 to-primary-500/50 md:-translate-x-px" />

          {experience.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-white dark:border-secondary-900 -translate-x-1/2 mt-2 z-10 shadow-lg shadow-primary-500/30" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/10 transition-all"
                >
                  <span className="inline-block px-3 py-1 text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
