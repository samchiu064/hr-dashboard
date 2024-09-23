<script setup lang="ts">
const props = defineProps<{
  title?: string
  number?: number
  men?: number
  women?: number
  image?: string
}>()
</script>

<template>
  <base-card class="h-[190px] relative min-w-[178px]" :border="true" size="md">
    <template #title> {{ props.title }}</template>
    <template #description>
      <div class="flex flex-col h-full">
        <span class="text-5xl text-tertiary font-medium mt-3">
          {{ props.number }}</span
        >
        <div class="flex flex-col mt-auto">
          <span class="text-sm text-primary-subtitle"
            >{{ props.men }} 男性</span
          >
          <span class="text-sm text-primary-subtitle"
            >{{ props.women }} 女性</span
          >
        </div>
      </div>
      <img
        class="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-5 z-[-1]"
        :src="props.image"
        alt="績效圖表"
      />
    </template>
  </base-card>
</template>
