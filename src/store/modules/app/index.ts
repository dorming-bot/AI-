//这个文件定义了一个使用 Pinia 状态管理库的 app-store，用于管理应用程序的全局设置，如侧边栏是否折叠、主题和语言。
import { defineStore } from 'pinia'
import type { AppState, Language, Theme } from './helper'
import { getLocalSetting, setLocalSetting } from './helper'
import { store } from '@/store/helper'

export const useAppStore = defineStore('app-store', {
  state: (): AppState => getLocalSetting(),
  actions: {
    setSiderCollapsed(collapsed: boolean) {
      this.siderCollapsed = collapsed
      this.recordState()
    },

    setTheme(theme: Theme) {
      this.theme = theme
      this.recordState()
    },

    setLanguage(language: Language) {
      if (this.language !== language) {
        this.language = language
        this.recordState()
      }
    },

    recordState() {
      setLocalSetting(this.$state)
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
