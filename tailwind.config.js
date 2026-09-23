/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas, #fafaf9)",
        surface: "var(--surface, #ffffff)",
        ink: "var(--ink, #111215)",
        muted: "var(--muted, #64676f)",
        line: "var(--line, #e7e8eb)",
        'line-subtle': "var(--line-subtle, #f0f1f3)",
        accent: {
          DEFAULT: '#c81e1e',
          hover: '#b51a1a',
          light: '#fdf2f2',
        },
        dark: {
          DEFAULT: '#0c0e12',
          surface: '#15181f',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xs': '2px',
        'sm': '3px',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
