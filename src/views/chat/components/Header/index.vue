//src/views/chat/components/Header/index.vue
//聊天应用的头部组件，包含了侧边栏折叠、滚动到顶部、导出和清除功能，并可以选择 AI 模型。


<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { HoverButton, SvgIcon } from '@/components/common'
import { gptConfigStore, homeStore, useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { NModal } from "naive-ui"
import aiModel from "@/views/mj/aiModel.vue"
import { chatSetting, mlog } from '@/api'
import { debounce } from '@/utils/functions/debounce'

// 使用自定义的布局钩子
const { isMobile } = useBasicLayout()

// 定义传入的属性接口
interface Props {
  usingContext: boolean
}

// 定义事件接口
interface Emit {
  (ev: 'export'): void
  (ev: 'handleClear'): void
}

// 使用 defineProps 和 defineEmits 定义组件的 props 和 emits
defineProps<Props>()
const emit = defineEmits<Emit>()

// 使用应用和聊天的状态管理
const appStore = useAppStore()
const chatStore = useChatStore()

// 计算属性，侧边栏是否折叠
const collapsed = computed(() => appStore.siderCollapsed)
// 计算属性，当前聊天历史记录
const currentChatHistory = computed(() => chatStore.getChatHistoryByCurrentActive)

// 处理折叠侧边栏的函数
function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}

// 滚动到顶部的函数
function onScrollToTop() {
  const scrollRef = document.querySelector('#scrollRef')
  if (scrollRef)
    nextTick(() => scrollRef.scrollTop = 0)
}

// 处理导出的函数
function handleExport() {
  emit('export')
}

// 处理清除的函数
function handleClear() {
  emit('handleClear')
}

// 获取当前聊天的 UUID 和设置聊天配置
const uuid = chatStore.active;
const chatSet = new chatSetting(uuid == null ? 1002 : uuid);
const nGptStore = ref();
nGptStore.value = chatSet.getGptConfig();

// 显示模型选择的状态
const st = ref({ isShow: false });

// 监听 gptConfigStore 的变化，并进行去抖处理
watch(() => gptConfigStore.myData, debounce(() => {
  mlog("toMyuid19", "watch gptConfigStore.myData ", chatStore.active)
  nGptStore.value = chatSet.getGptConfig()
}, 600), { deep: true })

// 监听 homeStore 的变化，并进行去抖处理
watch(() => homeStore.myData.act, debounce((n) => n == 'saveChat' && (nGptStore.value = chatSet.getGptConfig()), 600), { deep: true })
</script>


<template>
  <header class="sticky top-0 left-0 right-0 z-30 border-b dark:border-neutral-800 bg-white/80 dark:bg-black/20 backdrop-blur">
    <div class="relative flex items-center justify-between min-w-0 overflow-hidden h-14" data-tauri-drag-region>
      <div class="flex items-center">
        <!-- 侧边栏折叠按钮，仅在移动端显示 -->
        <button class="flex items-center justify-center w-11 h-11" @click="handleUpdateCollapsed" v-if="isMobile">
          <SvgIcon v-if="collapsed" class="text-2xl" icon="ri:align-justify" />
          <SvgIcon v-else class="text-2xl" icon="ri:align-right" />
        </button>
      </div>
      <!-- 标题，双击时滚动到顶部 -->
      <h1 class="flex-1 px-4 pr-6 overflow-hidden cursor-pointer select-none text-ellipsis whitespace-nowrap" @dblclick="onScrollToTop" data-tauri-drag-region>
        {{ currentChatHistory?.title ?? '' }}
      </h1>
      <div class="flex items-center space-x-2">
        <!-- 导出按钮 -->
        <HoverButton @click="handleExport">
          <span class="text-xl text-[#4f555e] dark:text-white">
            <SvgIcon icon="ri:download-2-line" />
          </span>
        </HoverButton>
        <!-- 清除按钮 -->
        <HoverButton @click="handleClear">
          <span class="text-xl text-[#4f555e] dark:text-white">
            <SvgIcon icon="ri:delete-bin-line" />
          </span>
        </HoverButton>
      </div>
    </div>
    <!-- 模型选择按钮 -->
    <div @click="st.isShow=true" class="absolute left-1/2 top-full -translate-x-1/2 cursor-pointer select-none rounded-b-md border bg-white px-2 dark:border-neutral-800 dark:bg-[#111114]">
      <div class="flex items-center justify-center space-x-1 cursor-pointer hover:text-[#4b9e5f]" v-if="homeStore.myData.local!='draw'">
        <template v-if="nGptStore.gpts">
          <SvgIcon icon="ri:apps-fill" /> 
          <span class="line-clamp-1 overflow-hidden">{{ nGptStore.gpts.name }}</span>
        </template>
        <template v-else>
          <SvgIcon icon="heroicons:sparkles" /> 
          <span>{{ nGptStore.model }}</span>
        </template>
        <SvgIcon icon="icon-park-outline:right" />
      </div>
    </div>
  </header>
  
  <!-- 模型选择的弹窗 -->
  <NModal v-model:show="st.isShow" preset="card" :title="$t('mjchat.modelChange')" class="!max-w-[620px]" @close="st.isShow=false">  
    <aiModel @close="st.isShow=false"/>
  </NModal>
</template>

