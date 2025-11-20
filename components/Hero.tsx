'use client';

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="section-shell relative z-10 flex flex-col gap-8 sm:flex-row sm:items-end">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              User & business in-depth
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-[40px] md:leading-tight">
              Продуктовые, e-com и growth-кейсы,
              <br />
              собранные в одну коллекцию.
            </h1>
          </div>
          <p className="text-sm text-neutral-700 sm:text-[15px]">
            Здесь — 5 реальных историй: от оптимизации портфеля 20 000+ SKU и роста x10 до
            автоматизации маркетплейсов и исследований поведения пользователей. Формат S/T/A/R
            помогает быстро считывать контекст, действия и результат.
          </p>
          <p className="text-sm text-neutral-700 sm:text-[15px]">
            Каждый кейс разворачивается как отдельный экран: ситуация, задача, действия, метрики и
            роль, которую я на себя брала в этой истории.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
            >
              Смотреть кейсы
            </a>
            <span className="text-xs text-neutral-500 sm:text-sm">
              5 кейсов · mobile-first · swipe навигация
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs text-neutral-500 sm:text-[11px] sm:text-right">
          <div className="inline-flex flex-col items-start rounded-3xl border border-neutral-200 bg-white/80 px-4 py-3 shadow-soft-card backdrop-blur sm:items-end">
            <span className="uppercase tracking-[0.26em]">Focus</span>
            <span className="mt-1 text-[13px] font-medium text-neutral-900">
              Marketplace · Automation · Research
            </span>
          </div>
          <div className="hidden flex-col gap-1 sm:flex">
            <span className="uppercase tracking-[0.26em]">Format</span>
            <span>STAR-структура · роли · стек · метрики</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[-120px] h-[260px] bg-gradient-to-b from-white/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-48 w-48 rounded-full border border-neutral-200/60 bg-white/70 blur-2xl sm:block" />
    </section>
  );
};
