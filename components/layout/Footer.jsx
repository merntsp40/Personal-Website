'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope, FaArrowUp, FaDownload } from 'react-icons/fa';
import { siteConfig } from '@/lib/site-config';
import { scrollToSection } from '@/lib/scroll';

function FooterNavLink({ to, children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const className =
    'text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors';

  if (isHome) {
    return (
      <button type="button" onClick={() => scrollToSection(to)} className={`${className} text-left`}>
        {children}
      </button>
    );
  }

  return (
    <Link href={`/#${to}`} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const socialLinks = [
    { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: FaBehance, href: siteConfig.social.behance, label: 'Behance' },
  ];

  const quickLinks = siteConfig.navLinks.filter((l) =>
    ['Home', 'About', 'Projects', 'Skills', 'Contact'].includes(l.name)
  );

  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Gradient top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />

      <div className="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-8">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block text-2xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">{siteConfig.shortName}</span>
                <span className="text-primary-500">.</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
                {siteConfig.subheadline}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
                  >
                    <social.icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white mb-5">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <FooterNavLink to={link.to}>{link.name}</FooterNavLink>
                  </li>
                ))}
                <li>
                  <Link
                    href="/photography"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    Photography
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white mb-5">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors group"
                  >
                    <FaEnvelope className="text-primary-500 group-hover:scale-110 transition-transform" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-sm text-gray-500 dark:text-gray-400">
                  📍 {siteConfig.location}
                </li>
                <li className="text-sm text-gray-500 dark:text-gray-400">
                  ⏱ {siteConfig.responseTime}
                </li>
              </ul>
            </div>

            {/* CTA card */}
            <div className="lg:col-span-2">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent/5 border border-primary-500/20 dark:border-primary-500/30">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Let&apos;s work together</p>
                <a
                  href="/assets/resume/Usman_Khalid_CV.pdf"
                  download="Usman_Khalid_CV.pdf"
                  className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline mb-3"
                >
                  <FaDownload className="text-xs" />
                  Download Resume
                </a>
                {pathname === '/' ? (
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="w-full py-2.5 text-sm font-semibold rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                  >
                    Get in Touch
                  </button>
                ) : (
                  <Link
                    href="/#contact"
                    className="block w-full py-2.5 text-sm font-semibold text-center rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                  >
                    Get in Touch
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-600">
              Built with Next.js & Tailwind CSS
            </p>
            <motion.button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-primary-500 transition-colors"
              aria-label="Scroll to top"
            >
              Back to top
              <span className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                <FaArrowUp className="text-xs" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
