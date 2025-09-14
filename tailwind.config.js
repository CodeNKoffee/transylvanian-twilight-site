import { defineConfig } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default defineConfig({
  content: [
    './src/**/*.{html,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["EB Garamond", "Cinzel", "serif"],
      },
      colors: {
        carpathian: {
          midnight: '#0B1220',
          depths: '#0E1628',
          shadow: '#111A2E',
          cave: '#141E36',
          bluehour: '#1A2442',
        },
        cluj: { snow: '#E6EDF3' },
        sibiu: { moonlight: '#B8C4D9' },
        bucharest: { mist: '#8FA1BF' },
        brasov: { slate: '#6C7A96' },
        inkwell: '#0B1220',
        danube: { cyan: '#7FE9FF', depths: '#0E1628' },
        constanta: { blue: '#4FC3F7' },
        apuseni: { teal: '#2EE6A6' },
        transylvanian: { purple: '#B69CFF' },
        mures: { lavender: '#C4B5FD' },
        doina: { magenta: '#FF6AD5' },
        pine: '#6EE7B7',
        gold: '#F5C542',
        coral: '#F97070',
        dobrogea: { blue: '#60A5FA' },
      },
    },
  },
  plugins: [forms, typography],
});
