import type { AppInfo } from '@/types/app'

// 1. 你的现代化极简视觉文案
export const APP_INFO: AppInfo = {
  title: 'ValueLens / 职场兼容性指南',
  description: '全网 Facts 数据核查与雇主底层价值观解构工具。Designed and Developed by Yuan Jirou.',
  copyright: '© 2026 Yuan Jirou. All rights reserved.',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

// 2. 绕过所有环境判断，直接做最纯粹的变量导出（打包机绝对挑不出毛病）
export const APP_ID = process?.env?.NEXT_PUBLIC_APP_ID || ''
export const API_KEY = process?.env?.NEXT_PUBLIC_APP_KEY || ''
export const API_URL = process?.env?.NEXT_PUBLIC_API_URL || 'https://api.dify.ai/v1'

// 3. 前端骨架强依赖的常量（必须老老实实挂在这里）
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 160
export const IS_WORKFLOW = false
