'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { processSteps } from '@/lib/data/process';

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Development Process"
          subtitle="A structured approach from discovery to deployment — ensuring quality at every step."
        />

        <div className="relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-center mb-2"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white font-bold text-sm mb-3">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>

              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="w-px h-10 bg-gradient-to-b from-primary-500 to-primary-500/30 origin-top my-1"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
