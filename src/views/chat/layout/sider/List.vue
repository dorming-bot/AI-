//src/views/chat/layout/sider/List.vue
<script setup lang='ts'>
import { computed, watch, ref } from 'vue'
import { NInput, NPopconfirm, NScrollbar } from 'naive-ui'
import { SvgIcon } from '@/components/common'
import { gptConfigStore, gptConfigType, homeStore, useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { debounce } from '@/utils/functions/debounce'
import { chatSetting, mlog } from '@/api'
import AiListText from '@/views/mj/aiListText.vue'

const { isMobile } = useBasicLayout()

const appStore = useAppStore()
const chatStore = useChatStore()

// 计算属性，获取聊天历史记录
const dataSources = computed(() => chatStore.history)

// 选择聊天记录处理函数
async function handleSelect({ uuid }: Chat.History) {
  if (isActive(uuid)) return

  if (chatStore.active)
    chatStore.updateHistory(chatStore.active, { isEdit: false })
  await chatStore.setActive(uuid)

  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

// 编辑聊天记录处理函数
function handleEdit({ uuid }: Chat.History, isEdit: boolean, event?: MouseEvent) {
  event?.stopPropagation()
  chatStore.updateHistory(uuid, { isEdit })
}

// 删除聊天记录处理函数
function handleDelete(index: number, event?: MouseEvent | TouchEvent) {
  event?.stopPropagation()
  chatStore.deleteHistory(index)
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

// 去抖处理删除聊天记录
const handleDeleteDebounce = debounce(handleDelete, 600)

// 处理按键事件，编辑聊天记录时按下 Enter 键保存
function handleEnter({ uuid }: Chat.History, isEdit: boolean, event: KeyboardEvent) {
  event?.stopPropagation()
  if (event.key === 'Enter')
    chatStore.updateHistory(uuid, { isEdit })
}

// 判断聊天记录是否为当前活动记录
function isActive(uuid: number) {
  return chatStore.active === uuid
}

// 初始化聊天设置对象和 UID 列表
const chatSet = new chatSetting(chatStore.active ?? 1002)
const myuid = ref<gptConfigType[]>([])

// 更新 UID 列表的函数，使用去抖处理避免频繁调用
const toMyuid = debounce(() => {
  mlog('toMyuid7')
  myuid.value = chatSet.getObjs()
}, 600)

toMyuid()

// 判断 UID 是否在对象列表中
const isInObjs = (uuid: number): undefined | gptConfigType => {
  if (!myuid.value.length) return
  const index = myuid.value.findIndex((item: gptConfigType) => {
    return item.uuid == uuid
  })
  if (index == -1) return
  mlog('index 这个地方有bug', uuid, index, myuid.value[index])
  return myuid.value[index]
}

// 监听 homeStore 和 gptConfigStore 数据变化，更新 UID 列表
watch(() => homeStore.myData.act, (n: string) => n == 'saveChat' && toMyuid(), { deep: true })
watch(() => gptConfigStore.myData, toMyuid, { deep: true })

</script>


<template>
  <NScrollbar class="px-4">
    <div class="flex flex-col gap-2 text-sm">
      <!-- 无数据时的显示 -->
      <template v-if="!dataSources.length">
        <div class="flex flex-col items-center mt-4 text-center text-neutral-300">
          <SvgIcon icon="ri:inbox-line" class="mb-2 text-3xl" />
          <span>{{ $t('common.noData') }}</span>
        </div>
      </template>
      <!-- 有数据时的显示 -->
      <template v-else>
        <div v-for="(item, index) of dataSources" :key="index">
          <a
            class="relative flex items-center gap-3 px-3 py-3 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]"
            :class="isActive(item.uuid) && ['border-[#4b9e5f]', 'bg-neutral-100', 'text-[#4b9e5f]', 'dark:bg-[#24272e]', 'dark:border-[#4b9e5f]', 'pr-14']"
            @click="handleSelect(item)"
          >
            <!-- 显示聊天记录标题 -->
            <AiListText :myObj="isInObjs(item.uuid)" :myItem="item">
              <NInput
                v-if="item.isEdit"
                v-model:value="item.title" size="tiny"
                @keypress="handleEnter(item, false, $event)"
              />
            </AiListText>
            <!-- 当前活动聊天记录的操作按钮 -->
            <div v-if="isActive(item.uuid)" class="absolute z-10 flex visible right-1">
              <template v-if="item.isEdit">
                <button class="p-1" @click="handleEdit(item, false, $event)">
                  <SvgIcon icon="ri:save-line" />
                </button>
              </template>
              <template v-else>
                <button class="p-1">
                  <SvgIcon icon="ri:edit-line" @click="handleEdit(item, true, $event)" />
                </button>
                <NPopconfirm placement="bottom" @positive-click="handleDeleteDebounce(index, $event)">
                  <template #trigger>
                    <button class="p-1">
                      <SvgIcon icon="ri:delete-bin-line" />
                    </button>
                  </template>
                  {{ $t('chat.deleteHistoryConfirm') }}
                </NPopconfirm>
              </template>
            </div>
          </a>
        </div>
      </template>
    </div>
  </NScrollbar>
</template>
