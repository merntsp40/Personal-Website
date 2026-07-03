'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLayerGroup, FaRocket } from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/lib/data/services';

const icons = [FaCode, FaServer, FaLayerGroup, FaRocket];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Services"
          subtitle="What I can help you build — from polished frontends to complete full-stack solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
