'use client';

import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiExpress,
  SiGraphql, SiMongodb, SiPostgresql, SiRedis, SiGithubactions,
  SiVercel, SiAmazon, SiPostman, SiFigma,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SectionHeader from '@/components/ui/SectionHeader';
import { skillCategories } from '@/lib/data/skills';

const iconMap = {
  React: <FaReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  'Node.js': <FaNodeJs className="text-[#339933]" />,
  Express: <SiExpress className="text-gray-800 dark:text-gray-200" />,
  'REST APIs': <SiGraphql className="text-[#E10098]" />,
  GraphQL: <SiGraphql className="text-[#E10098]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  'GitHub Actions': <SiGithubactions className="text-gray-800 dark:text-white" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  AWS: <SiAmazon className="text-[#FF9900]" />,
  Git: <FaGitAlt className="text-[#F05032]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  'VS Code': <VscVscode className="text-[#007ACC]" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="A curated stack of modern technologies I use to build scalable, performant applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-secondary-800/50 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-white/5 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary-500 to-accent" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{iconMap[skill.name]}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
