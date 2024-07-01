//src/views/chat/layout/Permission.vue
<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NButton, NInput, NModal, useMessage } from 'naive-ui'
import { fetchVerify } from '@/api'
import { useAuthStore } from '@/store'
import Icon403 from '@/icons/403.vue'

// 定义传入的属性接口
interface Props {
  visible: boolean
}

// 获取传入的属性
defineProps<Props>()

// 获取 authStore 实例
const authStore = useAuthStore()

// 获取消息提示实例
const ms = useMessage()

// 定义 loading 状态和 token 输入框的值
const loading = ref(false)
const token = ref('')

// 计算属性，判断按钮是否禁用
const disabled = computed(() => !token.value.trim() || loading.value)

// 处理验证函数
async function handleVerify() {
  const secretKey = token.value.trim()

  if (!secretKey)
    return

  try {
    loading.value = true
    await fetchVerify(secretKey)
    authStore.setToken(secretKey)
    ms.success('success')
    window.location.reload()
  }
  catch (error: any) {
    ms.error(error.message ?? 'error')
    authStore.removeToken()
    token.value = ''
  }
  finally {
    loading.value = false
  }
}

// 处理按键事件，当按下 Enter 键时触发验证
function handlePress(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleVerify()
  }
}
</script>


<template>
  <!-- 弹出窗口组件 -->
  <NModal :show="visible" style="width: 90%; max-width: 640px">
    <div class="p-10 bg-white rounded dark:bg-slate-800">
      <div class="space-y-4">
        <!-- 头部部分，显示 403 图标和提示信息 -->
        <header class="space-y-2">
          <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200">
            403
          </h2>
          <p class="text-base text-center text-slate-500 dark:text-slate-500">
            {{ $t('common.unauthorizedTips') }}
          </p>
          <Icon403 class="w-[200px] m-auto" />
        </header>
        <!-- 输入框，用于输入令牌 -->
        <NInput v-model:value="token" type="password" placeholder="" @keypress="handlePress" />
        <!-- 验证按钮 -->
        <NButton
          block
          type="primary"
          :disabled="disabled"
          :loading="loading"
          @click="handleVerify"
        >
          {{ $t('common.verify') }}
        </NButton>
      </div>
    </div>
  </NModal>
</template>

