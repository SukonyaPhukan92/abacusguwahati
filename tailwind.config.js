/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the SIP Abacus logo supplied by the centre:
        // orange ≈ #F58634 (cap + "SIP"), red ≈ #E23B3B ("success assured"), grey ≈ #3A3A3A ("abacus").
        // Button/text shades are darkened for WCAG AA contrast on white.
        ink: '#2e2b33',
        brand: { 50: '#fff8f2', 100: '#ffeddc', 200: '#fdd3ae', 400: '#f58634', 500: '#ef6c1f', 600: '#c52a2a', 700: '#a11f1f' },
        orange: { logo: '#f58634', deep: '#b8520f' },
        sky: { soft: '#eef2ff' },
        leaf: { 100: '#d1fae5', 600: '#047857' },
      },
      fontFamily: {
        display: ['ui-rounded', '"SF Pro Rounded"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      boxShadow: { card: '0 10px 30px -12px rgba(30,27,75,.22)' },
      keyframes: {
        bead: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(var(--slide,14px))' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: { bead: 'bead 4.5s ease-in-out infinite', floaty: 'floaty 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
