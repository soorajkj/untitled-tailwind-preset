import type { Config } from "tailwindcss";

export const preset = {
  content: [],
  theme: {
    fontFamily: {
      "family-manrope": ["var(--font-family-manrope)"],
      "family-calsans": ["var(--font-family-calsans)"],
    },
    extend: {},
  },
} satisfies Config;
