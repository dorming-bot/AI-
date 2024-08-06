//src/views/chat/layout/Layout.vue
<script setup lang='ts'>
import { computed } from 'vue'
import { NLayout, NLayoutContent, useMessage } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import Sider from './sider/index.vue'
import Permission from './Permission.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { gptConfigStore, homeStore, useAppStore, useAuthStore, useChatStore } from '@/store'
import { aiSider, aiFooter } from '@/views/mj' 
import aiMobileMenu from '@/views/mj/aiMobileMenu.vue'; 
import { t } from '@/locales'
import { mlog, openaiSetting } from '@/api'
import { isObject } from '@/utils/is'

// 获取路由和消息实例
const router = useRouter()
const route = useRoute()
const ms = useMessage()

// 获取应用状态管理实例
const appStore = useAppStore()
const chatStore = useChatStore()
const authStore = useAuthStore()

// 初始化 OpenAI 设置
openaiSetting(route.query)

// 根据不同的路由名称执行相应操作
if (route.name === 'GPTs') { 
  const model = `gpt-3.5-${route.params.gid.toString()}`
  gptConfigStore.setMyData({ model })
  ms.success(`GPTs ${t('mj.modleSuccess')}`)
} else if (route.name === 'Setting') { 
  openaiSetting(route.query)
  if (isObject(route.query)) ms.success(t('mj.setingSuccess'))
} else if (route.name === 'Model') { 
  const model = `${route.params.gid.toString()}`
  gptConfigStore.setMyData({ model })
  ms.success(t('mj.modleSuccess'))
}

// 替换路由为 'Chat' 并设置 homeStore 数据
router.replace({ name: 'Chat', params: { uuid: chatStore.active } })
homeStore.setMyData({ local: 'Chat' })

// 获取是否为移动设备的状态
const { isMobile } = useBasicLayout()

// 计算属性，获取侧边栏的折叠状态
const collapsed = computed(() => appStore.siderCollapsed)

// 计算属性，判断是否需要权限
const needPermission = computed(() => {
  return !!authStore.session?.auth && !authStore.token
})

// 计算属性，获取移动设备样式类
const getMobileClass = computed(() => {
  if (isMobile.value) return ['rounded-none', 'shadow-none']
  return ['shadow-md', 'dark:border-neutral-800']
})

// 计算属性，获取容器样式类
const getContainerClass = computed(() => {
  return ['h-full', { 'abc': !isMobile.value && !collapsed.value }]
}) 
</script>


<template>
  <div class="dark:bg-[#24272e] transition-all p-0" :class="[isMobile ? 'h55' : 'h-full']">
    <div class="h-full overflow-hidden" :class="getMobileClass">
      <!-- 布局组件 -->
      <NLayout class="z-40 transition" :class="getContainerClass" has-sider>
        <!-- 侧边栏组件，桌面设备显示 -->
        <aiSider v-if="!isMobile"/>
        <Sider />
        <!-- 内容区域 -->
        <NLayoutContent class="h-full">
          <RouterView v-slot="{ Component, route }">
            <component :is="Component" :key="route.fullPath" />
          </RouterView>
        </NLayoutContent>
      </NLayout>
    </div>
    <!-- 权限检查组件 -->
    <Permission :visible="needPermission" />
  </div>
  <!-- 移动设备菜单组件 -->
  <aiMobileMenu v-if="isMobile" />
  <!-- 底部组件 -->
  <aiFooter/>
</template>


<style  >
.h55{
  height: calc(100% - 55px);
}
</style>
