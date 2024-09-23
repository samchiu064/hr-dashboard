<script setup lang="ts">
interface Props {
  type?: string
  size?: string
}

const { type = 'default', size = 'md' } = defineProps<Props>()

const getSize = () => {
  switch (size) {
    case 'lg':
      return 'h-[47px] py-2.5 px-5 text-base'
    case 'md':
    default:
      return 'h-[38px] py-2.5 px-4 text-sm leading-none	'
  }
}

const getColorState = () => {
  switch (type) {
    case 'primary':
      return 'bg-primary-red text-white hover:drop-shadow-md active:bg-secondary-red active:shadow-[inset_0_0_0_2px_#FF6262]'

    case 'secondary':
    default:
      return 'bg-white text-primary-red border-2 border-light-red hover:bg-light-red/20 active:bg-white active:border-primary-red'
  }
}
</script>

<template>
  <button
    type="button"
    :class="[
      'box-border disabled:opacity-50 rounded disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-secondary-red',
      getSize(),
      getColorState(),
    ]"
  >
    <slot>按鈕預設文字</slot>
  </button>
</template>
