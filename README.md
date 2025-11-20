# Портфолио кейсов — Catherine Moon

Одностраничный минималистичный сайт с коллекцией кейсов в формате S/T/A/R.
Стек: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + react-swipeable.

## Требования

- Node.js 18+ (рекомендуется 18 LTS или 20)
- npm / pnpm / yarn — на выбор

## Установка

```bash
# установить зависимости
npm install
# или
pnpm install
# или
yarn
```

## Запуск в режиме разработки

```bash
npm run dev
# затем открыть в браузере http://localhost:3000
```

## Продакшн-сборка

```bash
npm run build
npm start
```

## Шрифты

Используется шрифт **Manrope** с поддержкой кириллицы через `next/font`:

- Подключение — в `app/layout.tsx`:
  - `Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope' })`
- Font family применён к `<html>` и `body` через CSS-переменную `--font-manrope`.

## Основные библиотеки

- **next** — фреймворк для React
- **react / react-dom** — UI-библиотека
- **tailwindcss** — быстрая верстка и адаптивный дизайн
- **framer-motion** — анимации появления и перелистывания карточек
- **react-swipeable** — поддержка свайпов по кейсам (desktop + mobile)

## Структура данных кейсов

Кейсы описаны в `lib/cases.ts`:

- `title` — заголовок кейса.
- `tldr` — краткое резюме на 1–2 предложения.
- `star` — массив блоков S / T / A / R с абзацами текста.
- `whyStrong` — массив абзацев для блока «Почему кейс сильный`.
