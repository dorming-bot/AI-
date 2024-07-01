//src/views/chat/hooks/useScroll.ts
import type { Ref } from 'vue'
import { nextTick, ref } from 'vue'

// 定义 ScrollElement 类型，为 HTMLDivElement 或 null
type ScrollElement = HTMLDivElement | null

// 定义 ScrollReturn 接口，包含滚动相关的方法和引用
interface ScrollReturn {
  scrollRef: Ref<ScrollElement>
  scrollToBottom: () => Promise<void>
  scrollToTop: () => Promise<void>
  scrollToBottomIfAtBottom: () => Promise<void>
}

// 定义 useScroll 钩子函数
export function useScroll(): ScrollReturn {
  // 创建 scrollRef 引用，初始化为 null
  const scrollRef = ref<ScrollElement>(null)

  // 定义 scrollToBottom 方法，滚动到元素底部
  const scrollToBottom = async () => {
    // 等待下一次 DOM 更新循环
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = scrollRef.value.scrollHeight
  }

  // 定义 scrollToTop 方法，滚动到元素顶部
  const scrollToTop = async () => {
    // 等待下一次 DOM 更新循环
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = 0
  }

  // 定义 scrollToBottomIfAtBottom 方法，如果滚动条接近底部则滚动到底部
  const scrollToBottomIfAtBottom = async () => {
    // 等待下一次 DOM 更新循环
    await nextTick()
    if (scrollRef.value) {
      // 定义阈值，表示滚动条到底部的距离阈值
      const threshold = 100
      // 计算距离底部的距离
      const distanceToBottom = scrollRef.value.scrollHeight - scrollRef.value.scrollTop - scrollRef.value.clientHeight
      // 如果距离小于等于阈值，则滚动到底部
      if (distanceToBottom <= threshold)
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight
    }
  }

  // 返回包含引用和方法的对象
  return {
    scrollRef,
    scrollToBottom,
    scrollToTop,
    scrollToBottomIfAtBottom,
  }
}

