'use client';

import React, { useState } from 'react';
import type { CaseItem, StarSection } from '@/lib/cases';

interface CaseCardProps {
  item: CaseItem;
  index: number;
  total: number;
}

type OpenState = Record<string, boolean>;

export const CaseCard: React.FC<CaseCardProps> = ({ item, index, total }) => {
  const [open, setOpen] = useState<OpenState>(() => {
    const initial: OpenState = {};
    item.star.forEach((section) => {
      initial[section.key] = section.key === 'S' || section.key === 'T';
    });
    return initial;
  });

  const toggleSection = (section: StarSection) => {
    setOpen((prev) => ({ ...prev, [section.key]: !prev[section.key] }));
  };

  return (
    <article className="relative w-full max-w-3xl mx-auto rounded-3xl bg-card/90 p-5 shadow-soft-card ring-1 ring-neutral-200/80 backdrop-blur-sm sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3 text-[11px] text-neutral-500">
        <span className="rounded-full border border-neutral-200 px-3 py-1 uppercase tracking-[0.18em]">
          Кейс {index + 1} / {total}
        </span>
        <span className="hidden text-[11px] uppercase tracking-[0.22em] text-neutral-400 sm:inline">
          S · T · A · R · метрики
        </span>
      </div>

      <h2 className="mb-3 text-lg font-semibold leading-snug text-neutral-900 sm:text-xl md:text-[22px]">
        {item.title}
      </h2>

      <p className="mb-6 text-sm text-neutral-700 sm:text-[15px]">{item.tldr}</p>

      <div className="space-y-3">
        {item.star.map((section) => (
          <div
            key={section.key}
            className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute -left-1 -top-3 text-6xl font-black tracking-tight text-neutral-200/70">
              {section.key}
            </div>
            <button
              type="button"
              className="relative z-10 flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5 sm:py-4"
              onClick={() => toggleSection(section)}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-900/60 bg-neutral-900 text-[11px] font-semibold text-white shadow-sm">
                  {section.label}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-700">
                    {section.title}
                  </span>
                  <span className="mt-0.5 text-[11px] text-neutral-500">
                    {section.key === 'S' && 'Контекст и отправная точка'}
                    {section.key === 'T' && 'Что нужно было изменить или достичь'}
                    {section.key === 'A' && 'Какие шаги и инструменты были использованы'}
                    {section.key === 'R' && 'Измеримый эффект и влияние на бизнес'}
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-neutral-500">
                {open[section.key] ? 'Свернуть' : 'Раскрыть'}
              </span>
            </button>
            {open[section.key] && (
              <div className="case-text relative z-10 border-t border-neutral-200 px-4 py-3 sm:px-5 sm:py-4">
                {section.paragraphs.map((p, idx) =>
                  p.trim().length === 0 ? (
                    <div key={idx} className="h-2" />
                  ) : (
                    <p key={idx}>{p}</p>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
          Роль, навыки и инструменты в кейсе
        </div>
        <div className="case-highlight">
          <div className="case-text">
            {item.whyStrong.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
