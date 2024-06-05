import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }:PluginAPI) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #A01122, #ECB54E)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
      });
    }),
  ],
};
export default config;
