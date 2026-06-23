import type { AppInfo } from '@/types/app'

// 1. 完美保留你高冷的现代简约视觉文案
export const APP_INFO: AppInfo = {
  title: '求职深研社',
  description: '只看客观事实,对齐底层内核。Designed and Developed by 袁积柔.',
  copyright: '© 2026 Yuan Jirou. All rights reserved.',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

// 2. 补回底层运行时必需的系统暗号（从 Vercel 环境变量中读取，确保安全不报错）
// @ts-ignore
export const APP_ID = typeof process !== 'undefined' ? `${process.env.NEXT_PUBLIC_APP_ID}` : ''
// @ts-ignore
export const API_KEY = typeof process !== 'undefined' ? `${process.env.NEXT_PUBLIC_APP_KEY}` : ''
// @ts-ignore
export const API_URL = typeof process !== 'undefined' ? `${process.env.NEXT_PUBLIC_API_URL || 'https://api.dify.ai/v1'}` : 'https://api.dify.ai/v1'
// 3. 补回 Dify 前端骨架所要求的核心系统常量（必须导出，否则前端组件会报错）
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 160
export const IS_WORKFLOW = false // 保持与你选用的文本生成应用相匹配