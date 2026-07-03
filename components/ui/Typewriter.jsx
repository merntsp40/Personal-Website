'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Typewriter({
  children,
  speed = 'fast',
  variance = 0.8,
  cursorBlinkSpeed = 1.0,
  loop = true,
  delay = 2000,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = speed === 'fast' ? 50 : speed === 'slow' ? 150 : typeof speed === 'number' ? speed : 50;
  const deleteSpeed = typeSpeed / 2;

  useEffect(() => {
    let timeoutId;
    const text = typeof children === 'string' ? children : '';

    const handleTyping = () => {
      const currentLength = displayedText.length;

      if (!isDeleting) {
        if (currentLength < text.length) {
          setDisplayedText(text.slice(0, currentLength + 1));
          const randomVariance = (Math.random() * 2 - 1) * variance * typeSpeed;
          const nextDelay = Math.max(10, typeSpeed + randomVariance);
          timeoutId = setTimeout(handleTyping, nextDelay);
        } else if (loop) {
          timeoutId = setTimeout(() => setIsDeleting(true), delay);
        }
      } else if (currentLength > 0) {
        setDisplayedText(text.slice(0, currentLength - 1));
        timeoutId = setTimeout(handleTyping, deleteSpeed);
      } else {
        setIsDeleting(false);
        timeoutId = setTimeout(handleTyping, 500);
      }
    };

    timeoutId = setTimeout(handleTyping, 100);
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, children, typeSpeed, variance, loop, delay, deleteSpeed]);

  return (
    <span className="inline-flex items-center min-h-[1.5em]">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: cursorBlinkSpeed / 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  );
}
