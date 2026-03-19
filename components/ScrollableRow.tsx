'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { Feature } from '@/components/feature-section-with-hover-effects';

/* ================= ANIMATION VARIANTS ================= */

const rowVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

/* ================= COMPONENT ================= */

export function ScrollableFeatureRow({
  features,
}: {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  }[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  /* ================= SCROLL LOGIC ================= */

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();

    el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  /* ================= RENDER ================= */

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      {features.length > 4 && canScrollLeft && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('left')}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10
                     bg-neutral-900 border border-neutral-700 hover:border-indigo-500
                     rounded-full p-2 shadow"
        >
          <IconArrowLeft size={18} className="text-white" />
        </motion.button>
      )}

      {/* RIGHT ARROW */}
      {features.length > 4 && canScrollRight && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('right')}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10
                     bg-neutral-900 border border-neutral-700 hover:border-indigo-500
                     rounded-full p-2 shadow"
        >
          <IconArrowRight size={18} className="text-white" />
        </motion.button>
      )}

      {/* SCROLL ROW */}
      <motion.div
        ref={scrollRef}
        variants={rowVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex overflow-x-auto space-x-4 px-10 py-10
                   no-scrollbar scroll-smooth"
      >
        {/* CARDS */}
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={feature.link} className="contents">
              <Feature {...feature} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
