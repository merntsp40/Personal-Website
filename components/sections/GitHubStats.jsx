'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaFolder, FaStar } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb } from 'react-icons/si';
import SectionHeader from '@/components/ui/SectionHeader';
import { siteConfig } from '@/lib/site-config';

const fallbackStats = {
  publicRepos: 40,
  followers: 10,
  following: 15,
};

const focusLanguages = [
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
];

export default function GitHubStats() {
  const [stats, setStats] = useState(fallbackStats);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${siteConfig.githubUsername}`),
          fetch(`https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=4`),
        ]);

        if (userRes.ok) {
          const user = await userRes.json();
          setStats({
            publicRepos: user.public_repos,
            followers: user.followers,
            following: user.following,
          });
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData.slice(0, 4));
        }
      } catch {
        // Use fallback data
      }
    }

    fetchGitHub();
  }, []);

  const statCards = [
    { icon: FaFolder, value: `${stats.publicRepos}+`, label: 'Repositories' },
    { icon: FaCodeBranch, value: '25+', label: 'Projects' },
    { icon: FaStar, value: `${stats.followers}+`, label: 'Followers' },
    { icon: FaGithub, value: 'Active', label: 'Open Source' },
  ];

  return (
    <section id="github" className="py-24 px-6 sm:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="GitHub Activity"
          subtitle="Live stats and recent repositories from my open-source work."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-center"
            >
              <stat.icon className="text-2xl text-primary-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Current Focus</h3>
            <div className="grid grid-cols-2 gap-4">
              {focusLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700"
                >
                  <span className="text-2xl">{lang.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{lang.name}</span>
                </div>
              ))}
            </div>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              <FaGithub /> View GitHub Profile
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Recent Repositories</h3>
            <div className="space-y-3">
              {(repos.length > 0 ? repos : [
                { name: 'Note-APP-MERN-Stack', html_url: siteConfig.social.github, description: 'MERN note-taking app' },
                { name: 'Food-Recipe-Website', html_url: siteConfig.social.github, description: 'Food ordering platform' },
              ]).map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:border-primary-500/50 transition-colors"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{repo.name}</p>
                  {repo.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{repo.description}</p>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
