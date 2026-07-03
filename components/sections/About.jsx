'use client';

import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';
import { siteConfig } from '@/lib/site-config';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="More than just code — a problem solver, designer, and lifelong learner passionate about building meaningful digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                <FaCode />
              </span>
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">{siteConfig.bio}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in the MERN stack and modern frontend tooling, turning ideas into polished,
              production-ready applications that users love.
            </p>
          </motion.div>

          {/* Side highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: FaLightbulb, title: 'Creative Thinker', desc: 'Design-driven approach to every project.' },
              { icon: FaRocket, title: 'Fast Learner', desc: 'Always adapting to new tools and technologies.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
              >
                <item.icon className="text-primary-500 text-xl mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent/5 border border-primary-500/20">
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">Status</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">Available for Freelance</p>
            </div>
          </motion.div>
        </div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8"
        >
          {siteConfig.aboutCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center"
            >
              <span className="text-2xl">{card.icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
