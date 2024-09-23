<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  icon: string
  routeName: string
}>()

const route = useRoute()

const isCurrentRoute = computed(() => route.name === props.routeName)

const iconClass = computed(() => {
  const baseClass = 'w-6'
  const activeClass = isCurrentRoute.value
    ? 'text-primary-red'
    : 'group-hover:text-[#737978]'
  return `${baseClass} ${activeClass}`
})

const labelClass = computed(() => {
  const { isActive } = useSidebar()
  const baseClass =
    'text-lg font-medium whitespace-nowrap transition-all duration-[350ms] md:text-base'
  const visibilityClass = isActive.value
    ? 'md:visible md:opacity-100'
    : 'md:invisible md:opacity-0 lg:visible lg:opacity-100'
  const colorClass = isCurrentRoute.value
    ? 'text-primary-red'
    : 'text-secondary-subtitle group-hover:text-tertiary'

  return `${baseClass} ${visibilityClass} ${colorClass}`
})

defineEmits(['click:list'])
</script>

<template>
  <li
    :class="[
      'flex flex-row items-center gap-x-4 cursor-pointer group',
      'lg:justify-start lg:gap-x-6',
    ]"
    @click="$emit('click:list')"
  >
    <BaseIcon :icon="props.icon" :class="iconClass" />
    <span :class="labelClass">
      {{ props.label }}
    </span>
  </li>
</template>
