//src/views/chat/hooks/useChat.ts
import { useChatStore } from '@/store'

// 定义自定义钩子函数 useChat
export function useChat() {
  // 获取 chatStore 实例
  const chatStore = useChatStore()

  // 根据 uuid 和索引获取聊天记录
  const getChatByUuidAndIndex = (uuid: number, index: number) => {
    return chatStore.getChatByUuidAndIndex(uuid, index)
  }

  // 向指定 uuid 的聊天记录中添加一条新记录
  const addChat = (uuid: number, chat: Chat.Chat) => {
    chatStore.addChatByUuid(uuid, chat)
  }

  // 更新指定 uuid 和索引的聊天记录
  const updateChat = (uuid: number, index: number, chat: Chat.Chat) => {
    chatStore.updateChatByUuid(uuid, index, chat)
  }

  // 部分更新指定 uuid 和索引的聊天记录
  const updateChatSome = (uuid: number, index: number, chat: Partial<Chat.Chat>) => {
    chatStore.updateChatSomeByUuid(uuid, index, chat)
  }

  // 返回包含所有操作函数的对象
  return {
    addChat,
    updateChat,
    updateChatSome,
    getChatByUuidAndIndex,
  }
}

