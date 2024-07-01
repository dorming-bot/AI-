//src/views/chat/layout/sider/index.vue 
<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider, useDialog } from 'naive-ui'
import List from './List.vue'
import Footer from './Footer.vue'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore, SvgIcon } from '@/components/common'
import { t } from '@/locales'

// 获取应用状态管理和聊天状态管理的实例
const appStore = useAppStore()
const chatStore = useChatStore()

// 获取对话框实例
const dialog = useDialog()

// 获取是否为移动设备的状态
const { isMobile } = useBasicLayout()
const show = ref(false)

// 计算属性，获取侧边栏的折叠状态
const collapsed = computed(() => appStore.siderCollapsed)

// 处理添加新聊天记录的函数
function handleAdd() {
  chatStore.addHistory({ title: 'New Chat', uuid: Date.now(), isEdit: false })
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

// 处理侧边栏折叠状态更新的函数
function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}

// 处理清除所有聊天记录的函数
function handleClearAll() {
  dialog.warning({
    title: t('chat.deleteMessage'),
    content: t('chat.clearHistoryConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      chatStore.clearHistory()
      if (isMobile.value)
        appStore.setSiderCollapsed(true)
    },
  })
}

// 计算属性，获取移动设备样式
const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      position: 'fixed',
      zIndex: 50,
      height: '100%',
    }
  }
  return {}
})

// 计算属性，获取移动设备安全区域样式
const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }
  }
  return {}
})

// 监听 isMobile 状态变化，并更新侧边栏折叠状态
watch(
  isMobile,
  (val) => {
    appStore.setSiderCollapsed(val)
  },
  {
    immediate: true,
    flush: 'post',
  },
)
</script>


<template>
  <!-- 侧边栏布局组件 -->
  <NLayoutSider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    bordered
    :style="getMobileClass"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <!-- 新建聊天按钮 -->
        <div class="p-4">
          <NButton dashed block @click="handleAdd">
            {{ $t('chat.newChatButton') }}
          </NButton>
        </div>
        <!-- 聊天记录列表 -->
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <!-- 设置按钮和清除按钮 -->
        <div class="flex items-center p-4 space-x-4">
          <div class="flex-1">
            <NButton block @click="show = true">
              {{ $t('store.siderButton') }}
            </NButton>
          </div>
          <NButton @click="handleClearAll">
            <SvgIcon icon="ri:close-circle-line" />
          </NButton>
        </div>
      </main>
      <!-- 页脚 -->
      <Footer />
    </div>
  </NLayoutSider>
  <!-- 移动设备遮罩层 -->
  <template v-if="isMobile">
    <div v-show="!collapsed" class="fixed inset-0 z-40 w-full h-full bg-black/40" @click="handleUpdateCollapsed" />
  </template>
  <!-- 提示存储组件 -->
  <PromptStore v-model:visible="show" />
</template>

