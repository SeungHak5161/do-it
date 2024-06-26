import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // 앱 라우터 사용으로 pages 디렉토리 미존재
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {},
      colors: {
        slate100: '#f1f5f9',
        slate200: '#e2e8f0',
        slate300: '#cbd5e1',
        slate400: '#94a3b8',
        slate500: '#64748b',
        slate800: '#1e293b',
        slate900: '#0f172a',
        violate100: '#ede9fe',
        violet600: '#7c3aed',
        rose500: '#f43f5e',
        lime300: '#bef264',
        amber800: '#92400e',
      },
    },
  },
  plugins: [],
}
export default config
