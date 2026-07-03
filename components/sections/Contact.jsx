'use client';

import { useState } from 'react';
import { HiOutlineMail, HiOutlinePaperAirplane, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';

const initialForm = { name: '', email: '', message: '' };

const contactInfo = [
  { icon: HiOutlineMail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'usman-khalid', href: siteConfig.social.linkedin },
  { icon: FaGithub, label: 'GitHub', value: siteConfig.githubUsername, href: siteConfig.social.github },
  { icon: HiOutlineLocationMarker, label: 'Location', value: siteConfig.location },
  { icon: HiOutlineClock, label: 'Response Time', value: siteConfig.responseTime },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, honeypot }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message.');

      setForm(initialForm);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Failed to send message. Please try again.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all';

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-500 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 text-primary-500 mb-4">
                  <HiOutlineMail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button type="button" onClick={() => setStatus('idle')} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input type="text" name="honeypot" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} disabled={status === 'submitting'} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} disabled={status === 'submitting'} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} disabled={status === 'submitting'} />
                </div>

                {status === 'error' && <p className="text-sm text-red-500 dark:text-red-400" role="alert">{error}</p>}

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : (<><HiOutlinePaperAirplane className="mr-3 w-6 h-6" />Send Message</>)}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
