'use client';

import { motion } from 'framer-motion';

export default function SplitText({ children, className, delay = 0 }) {
  const text = children.toString();
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <div key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
