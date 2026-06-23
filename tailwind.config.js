/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts,jsx,tsx}',
    './i18n/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        // 现代简约风的核心：冷峻的太空冷灰矩阵
        gray: {
          50: '#F8FAFC',   // 冰川白
          100: '#F1F5F9',  // 浅冷灰
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',  // 石墨灰
          700: '#334155',
          800: '#1E293B',  // 深邃灰
          900: '#0F172A',  // 极夜黑
        },
        // 重点：将原来的 Dify 亮蓝彻底替换为极简主义的“深石墨黑”与“现代浅灰”
        primary: {
          50: '#F8FAFC',   // 极淡背景
          100: '#F1F5F9',  // 悬浮态浅灰
          200: '#E2E8F0',
          300: '#CBD5E1',
          600: '#0F172A',  // 主按钮色：高冷石墨黑（深邃、克制）
          700: '#020617',  // 主按钮点击态：极致纯黑
        },
        // 降低其他彩色系的饱和度，防止界面穿帮
        blue: {
          500: '#F1F5F9',
        },
        green: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          800: '#334155',
        },
        yellow: {
          100: '#F1F5F9',
          800: '#334155',
        },
        purple: {
          50: '#F8FAFC',
        },
        indigo: {
          25: '#F8FAFC',
          100: '#F1F5F9',
          600: '#0F172A',
        },
      },
      // 保持你原本优秀的极简响应式断点设计
      screens: {
        mobile: '100px',
        tablet: '640px',
        pc: '769px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}