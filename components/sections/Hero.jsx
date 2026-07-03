'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import GravityBackground from '@/components/ui/GravityBackground';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';
import { siteConfig } from '@/lib/site-config';
import { scrollToSection } from '@/lib/scroll';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24 overflow-hidden"
    >
      <GravityBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
          >
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for freelance work
            </span>
          </motion.div>

          <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-3 tracking-wide">
            {siteConfig.headline}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2">
              <SplitText delay={0.2}>Hi, I&apos;m</SplitText>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent">
              <SplitText delay={0.4}>{siteConfig.name}</SplitText>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
          >
            <MagneticButton>
              <motion.button
                type="button"
                onClick={() => scrollToSection('featured-projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-semibold rounded-2xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all w-full sm:w-auto"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                href="/assets/resume/Usman_Khalid_CV.pdf"
                download="Usman_Khalid_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all w-full sm:w-auto"
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {siteConfig.heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 text-center"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400"
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-accent/10 to-secondary-500/20 rounded-full blur-3xl scale-110 animate-pulse" />

          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[78%] h-[78%] rounded-full opacity-60 dark:opacity-40"
            style={{
              background: 'conic-gradient(from 0deg, var(--color-primary-500), var(--color-accent), transparent, var(--color-primary-400))',
            }}
          />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Blob-shaped portrait */}
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] overflow-hidden drop-shadow-2xl ring-4 ring-white/40 dark:ring-white/10"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              }}
            >
              <Image
                src="/assets/img/profileImage.jpeg"
                alt={siteConfig.name}
                width={420}
                height={420}
                priority
                className="w-full h-full object-cover scale-105"
                style={{ objectPosition: 'center -5%' }}
              />
              {/* Subtle inner shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 px-4 py-2 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-white/30 dark:border-gray-700 shadow-xl"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Open to work</p>
              <p className="text-sm font-bold text-primary-600 dark:text-primary-400">Freelance</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
