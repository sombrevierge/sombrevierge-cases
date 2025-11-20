import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import React from 'react';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Портфолио кейсов — Catherine',
  description: 'Одностраничная коллекция продуктовых и e-com кейсов в формате S/T/A/R.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-20 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
            <div className="section-shell flex items-center justify-between py-3">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  Портфолио кейсов
                </span>
                <span className="text-sm font-medium text-neutral-900">
                  Catherine · Product / Growth / E-com
                </span>
              </div>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-neutral-400 sm:inline">
                in-depth · by users & numbers
              </span>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-neutral-200/70 py-4 text-center text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            По всем вопросам можно обратиться в TG · sombrevierge
          </footer>
        </div>
      </body>
    </html>
  );
}
