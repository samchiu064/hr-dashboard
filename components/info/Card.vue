<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'warning' | 'info' | 'info-purple'
  title?: string
  number?: number
  message?: string
}>()

const backgroundClass = computed(() => {
  switch (props.type) {
    case 'warning':
      return 'bg-[#FFEFE7]'
    case 'info':
      return 'bg-[#E8F0FB]'
    case 'info-purple':
      return 'bg-[#FDEBF9]'
    default:
      return ''
  }
})

const messageClass = computed(() => {
  switch (props.type) {
    case 'warning':
      return 'text-primary-red'
    case 'info':
      return 'text-[#3786f1]'
    case 'info-purple':
      return 'text-[#EE61CF]'
    default:
      return ''
  }
})
</script>

<template>
  <base-card :class="backgroundClass" :border="false">
    <template #title> {{ props.title }} </template>
    <template #description>
      <div class="flex flex-col gap-y-2.5">
        <span class="text-4xl text-tertiary font-medium">{{
          props.number
        }}</span>
        <span :class="['text-base', messageClass]">{{ props.message }}</span>
      </div>
    </template>
  </base-card>
</template>
