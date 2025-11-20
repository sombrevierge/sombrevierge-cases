'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { cases } from '@/lib/cases';
import { CaseCard } from './CaseCard';

export const CasesCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = cases.length;

  const paginate = (newDirection: 1 | -1) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const variants = {
    enter: (dir: 1 | -1) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 1 | -1) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0
    })
  };

  const progress = ((index + 1) / total) * 100;

  return (
    <section id="cases" className="pb-16 pt-4 sm:pb-20 sm:pt-6">
      <div className="section-shell flex flex-col gap-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-600">
              Case stack
            </h2>
            <p className="text-sm text-neutral-600 sm:text-[15px]">
              Листайте карточки свайпами или стрелками. Каждый кейс — отдельный слой с контекстом,
              действиями и результатом.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div className="text-xs text-neutral-500">
              Кейс {index + 1} / {total}
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-neutral-200/80">
              <div
                className="h-full rounded-full bg-neutral-900 transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="relative mt-2 flex items-stretch justify-center">
          <button
            type="button"
            aria-label="Предыдущий кейс"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-sm text-neutral-700 shadow-sm backdrop-blur transition hover:bg-neutral-100 sm:inline-flex"
            onClick={() => paginate(-1)}
          >
            ‹
          </button>

          <div
            className="mx-0 flex-1 touch-pan-y px-0 sm:mx-4 sm:px-2"
            {...handlers}
          >
            <div className="relative flex items-stretch justify-center">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={cases[index].id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 260, damping: 26 },
                    opacity: { duration: 0.16 }
                  }}
                  className="w-full"
                >
                  <CaseCard item={cases[index]} index={index} total={total} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            aria-label="Следующий кейс"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-sm text-neutral-700 shadow-sm backdrop-blur transition hover:bg-neutral-100 sm:inline-flex"
            onClick={() => paginate(1)}
          >
            ›
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              aria-label={`Перейти к кейсу ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-neutral-900' : 'w-2 bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
