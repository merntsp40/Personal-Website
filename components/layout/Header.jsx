'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from '@/components/ui/DarkModeToggle';
import { siteConfig } from '@/lib/site-config';
import { scrollToSection } from '@/lib/scroll';

function NavLink({ to, children, onNavigate }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) {
    return (
      <button
        type="button"
        onClick={() => {
          scrollToSection(to);
          onNavigate?.();
        }}
        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium cursor-pointer transition-colors text-sm"
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={`/#${to}`}
      onClick={onNavigate}
      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium cursor-pointer transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent"
        >
          {siteConfig.shortName}
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {isHomePage ? (
            siteConfig.navLinks.map((link) => (
              <NavLink key={link.name} to={link.to}>
                {link.name}
              </NavLink>
            ))
          ) : (
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
            >
              Home
            </Link>
          )}

          <Link
            href="/photography"
            className={`font-medium transition-colors ${
              pathname === '/photography'
                ? 'text-primary-500 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
            }`}
          >
            Photography
          </Link>

          <DarkModeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button
            type="button"
            className="text-2xl text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 shadow-xl md:hidden">
            <div className="flex flex-col p-6 gap-4">
              {isHomePage ? (
                siteConfig.navLinks.map((link) => (
                  <NavLink key={link.name} to={link.to} onNavigate={closeMenu}>
                    {link.name}
                  </NavLink>
                ))
              ) : (
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  Home
                </Link>
              )}
              <Link
                href="/photography"
                onClick={closeMenu}
                className={`font-medium transition-colors ${
                  pathname === '/photography'
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                Photography
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
