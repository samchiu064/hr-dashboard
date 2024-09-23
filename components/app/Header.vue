<script setup lang="ts">
import avatar from '@/assets/img/avatar.webp'

const { toggle: toggleSidebar } = useSidebar()
</script>

<template>
  <header
    :class="[
      'flex flex-row items-center border-b border-[#f1f1f1]',
      'md:py-3',
      'lg:py-6',
    ]"
  >
    <BaseIcon
      icon="Menu"
      :class="['ms-3 me-4', 'lg:hidden']"
      hover
      @click="toggleSidebar"
    />
    <label class="flex flex-row items-center" for="search">
      <input
        id="search"
        :class="[
          'bg-[#fafafa] border border-[#e0e0e0] rounded px-4 text-md',
          'md:w-[245px] md:py-1',
          'lg:w-[343px] lg:py-2',
        ]"
        type="text"
        placeholder="關鍵字"
      />
      <BaseIcon icon="Search" class="-translate-x-10" hover />
    </label>
    <div
      class="flex flex-row justify-center items-center gap-x-7 -translate-x-14 ms-auto"
    >
      <BaseIcon icon="Bell" hover />
      <BaseIcon icon="Message" hover />
      <div class="flex flex-row items-center">
        <img class="w-[2.625rem] h-[2.625rem]" :src="avatar" alt="大頭貼" />
        <span class="ms-3 me-1">Sam Chiu</span>
        <BaseIcon icon="ArrowDown" hover />
      </div>
    </div>
  </header>
</template>
