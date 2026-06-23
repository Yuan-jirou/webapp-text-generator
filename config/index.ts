import type { AppInfo } from '@/types/app'

export const APP_INFO: AppInfo = {
  // 1. 名字采用现代极简的双语/斜杠设计
  title: '求职深研社',

  // 2. 现代简约风描述，直奔主题，并在末尾打上高冷却明确的开发者烙印
  description: '只看客观事实,对齐底层内核。Designed and Developed by 袁积柔.',

  // 3. 极简版权声明
  copyright: '© 2026 Yuan Jirou. All rights reserved.',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'