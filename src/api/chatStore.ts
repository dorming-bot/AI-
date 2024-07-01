// src/store/chatStore.ts

import { defineStore } from 'pinia'
import type { gptConfigType } from '@/store'
import { ss } from '@/utils/storage'

export const useChatStore = defineStore('chat-store', {
  state: () => ({
    chats: [] as { uuid: number, config: gptConfigType }[],
  }),

  actions: {
    addChat(uuid: number, config: gptConfigType) {
      this.chats.push({ uuid, config })
    },

    updateChatConfig(uuid: number, config: Partial<gptConfigType>) {
      const chat = this.chats.find(chat => chat.uuid === uuid)
      if (chat) {
        chat.config = { ...chat.config, ...config }
      }
    },

    getChatConfig(uuid: number): gptConfigType | undefined {
      const chat = this.chats.find(chat => chat.uuid === uuid)
      return chat?.config
    },

    removeChat(uuid: number) {
      this.chats = this.chats.filter(chat => chat.uuid !== uuid)
    },
  },
})
