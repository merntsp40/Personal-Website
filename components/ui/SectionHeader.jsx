'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16 md:mb-20"
    >
      <h2
        id={id}
        className="text-4xl md:text-5xl font-bold mb-6 scroll-mt-28"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
