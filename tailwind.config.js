/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#4285F4",
          'blue-dark': "#1A73E8",
          'blue-light': "#8AB4F8",
          red: "#EA4335",
          'red-dark': "#D93025",
          yellow: "#FBBC04",
          'yellow-dark': "#F29900",
          green: "#34A853",
          'green-dark': "#1E8E3E",
          gray: {
            50: "#F8F9FA",
            100: "#F1F3F4",
            200: "#E8EAED",
            300: "#DADCE0",
            400: "#BDC1C6",
            500: "#9AA0A6",
            600: "#80868B",
            700: "#5F6368",
            800: "#3C4043",
            900: "#202124",
          }
        },
        brand: {
          dark: "#0F1115",
          darker: "#090A0D",
          surface: "#181A20",
          'surface-card': "#1E2028",
          'surface-border': "#2B2E38",
        }
      },
      fontFamily: {
        sans: [
          '"Google Sans"',
          '"Google Sans Display"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Inter',
          'sans-serif',
        ],
        mono: [
          '"Google Sans Mono"',
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'spin 40s linear infinite',
        'orbit-reverse': 'spin 50s linear infinite reverse',
        'flow-data': 'flow 3s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateX(0%)', opacity: '0.2' },
          '50%': { transform: 'translateX(100%)', opacity: '1' },
        }
      },
      boxShadow: {
        'google-subtle': '0 1px 3px 0 rgba(60,64,67,0.1), 0 4px 8px 3px rgba(60,64,67,0.06)',
        'google-card': '0 4px 12px 0 rgba(60,64,67,0.12), 0 1px 3px 0 rgba(60,64,67,0.08)',
        'google-elevated': '0 8px 24px -4px rgba(60,64,67,0.18), 0 2px 6px -1px rgba(60,64,67,0.12)',
        'glow-blue': '0 0 25px -3px rgba(66, 133, 244, 0.35)',
        'glow-green': '0 0 25px -3px rgba(52, 168, 83, 0.35)',
        'glow-yellow': '0 0 25px -3px rgba(251, 188, 4, 0.35)',
        'glow-red': '0 0 25px -3px rgba(234, 67, 53, 0.35)',
        'glow-multi': '0 0 35px -5px rgba(66, 133, 244, 0.25), 0 0 20px -2px rgba(52, 168, 83, 0.2)',
      }
    },
  },
  plugins: [],
}
