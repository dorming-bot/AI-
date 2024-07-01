//src/views/chat/hooks/useUsingContext.ts
import { computed } from 'vue'
import { useMessage } from 'naive-ui'
import { t } from '@/locales'
import { useChatStore } from '@/store'

// 定义 useUsingContext 钩子函数
export function useUsingContext() {
  // 获取消息提示实例
  const ms = useMessage()
  
  // 获取 chatStore 实例
  const chatStore = useChatStore()
  
  // 定义计算属性，返回当前的上下文使用状态
  const usingContext = computed<boolean>(() => chatStore.usingContext)

  // 定义切换上下文使用状态的方法
  function toggleUsingContext() {
    // 切换上下文使用状态
    chatStore.setUsingContext(!usingContext.value)
    
    // 根据新的上下文使用状态显示不同的消息提示
    if (usingContext.value)
      ms.success(t('chat.turnOnContext'))
    else
      ms.warning(t('chat.turnOffContext'))
  }

  // 返回包含计算属性和切换方法的对象
  return {
    usingContext,
    toggleUsingContext,
  }
}

