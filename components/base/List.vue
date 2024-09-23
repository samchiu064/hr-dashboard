<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  toolkitAlignment?: 'top' | 'middle' | 'bottom'
}>()

const toolKitClass = computed(() => {
  const alignmentClasses: Record<string, string> = {
    top: '-translate-y-full',
    middle: '-translate-y-2/4',
    bottom: '',
  }

  return alignmentClasses[props.toolkitAlignment || 'bottom']
})

defineEmits(['click:more'])
</script>

<template>
  <div
    :class="[
      'flex flex-col justify-between box-border border border-[#E0E0E0] rounded-md px-4',
      'max-w-[310px] pt-2 pb-1.5',
      'md:max-w-[387px] md:py-2.5',
      'lg:max-w-[600px] lg:py-3',
    ]"
  >
    <p
      :class="[
        'text-secondary-title text-sm truncate mb-[5px]',
        'md:text-base md:font-medium',
      ]"
    >
      <slot name="header">標題</slot>
    </p>
    <div :class="['box-border flex flex-row justify-between items-center']">
      <span class="text-sm text-primary-subtitle">
        <slot name="subHeader">副標題</slot>
      </span>
      <div
        :class="[
          'flex flex-row gap-x-5 items-center content-center text-2xl text-[#b2b2b2] cursor-pointer',
          toolKitClass,
        ]"
      >
        <slot name="prependIcon" />
        <BaseIcon icon="MoreHoriz" hover @click:icon="$emit('click:more')" />
      </div>
    </div>
  </div>
</template>
