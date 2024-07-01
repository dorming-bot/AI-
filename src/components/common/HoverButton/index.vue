//这个组件实现了一个带有可选工具提示的按钮。当工具提示文本存在时，按钮会显示工具提示，否则只是一个普通按钮。
<script setup lang='ts'>
import { computed } from 'vue'
import type { PopoverPlacement } from 'naive-ui'
import { NTooltip } from 'naive-ui'
import Button from './Button.vue'

interface Props {
  tooltip?: string
  placement?: PopoverPlacement
}

interface Emit {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  tooltip: '',
  placement: 'bottom',
})

const emit = defineEmits<Emit>()

const showTooltip = computed(() => Boolean(props.tooltip))

function handleClick() {
  emit('click')
}
</script>

<template>
  <div v-if="showTooltip">
    <NTooltip :placement="placement" trigger="hover">
      <template #trigger>
        <Button @click="handleClick">
          <slot />
        </Button>
      </template>
      {{ tooltip }}
    </NTooltip>
  </div>
  <div v-else>
    <Button @click="handleClick">
      <slot />
    </Button>
  </div>
</template>
