//src/views/chat/layout/sider/Footer.vue 
<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { HoverButton, SvgIcon, UserAvatar } from '@/components/common'

// 异步加载设置组件
const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

// 定义一个布尔值，用于控制设置组件的显示
const show = ref(false)
</script>


<template>
  <!-- 页脚，包含用户头像和设置按钮 -->
  <footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
    <!-- 用户头像部分 -->
    <div class="flex-1 flex-shrink-0 overflow-hidden">
      <UserAvatar />
    </div>

    <!-- 设置按钮 -->
    <HoverButton @click="show = true">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="ri:settings-4-line" />
      </span>
    </HoverButton>

    <!-- 设置组件，点击按钮时显示 -->
    <Setting v-if="show" v-model:visible="show" />
  </footer>
</template>

