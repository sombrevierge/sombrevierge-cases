import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f4f4f5',
        card: '#ffffff',
        ink: '#050505'
      },
      boxShadow: {
        'soft-card': '0 24px 60px rgba(15, 23, 42, 0.16)'
      },
      borderRadius: {
        '3xl': '1.75rem'
      }
    }
  },
  plugins: []
};

export default config;
