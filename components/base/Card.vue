<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  border?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'md':
      return 'max-w-[314px]'
    case 'lg':
      return 'max-w-[640px]'
    case 'sm':
    default:
      return 'max-w-[204px]'
  }
})

const paddingClass = computed(() => {
  switch (props.size) {
    case 'md':
      return 'p-5'
    case 'lg':
      return 'py-4 px-5'
    case 'sm':
    default:
      return 'p-3 ps-5'
  }
})

const borderClass = computed(() =>
  props.border ? 'border border-[#E0E0E0]' : '',
)
</script>

<template>
  <div
    :class="[
      'flex flex-col justify-between w-full h-full box-border rounded-[0.625rem]',
      sizeClass,
      borderClass,
    ]"
  >
    <div :class="['flex flex-col', paddingClass]">
      <div class="text-lg text-tertiary truncate font-medium mb-2.5">
        <slot name="title"> 卡片標題 </slot>
      </div>
      <slot name="description"> 卡片描述 </slot>
    </div>
    <slot name="footer" />
  </div>
</template>
