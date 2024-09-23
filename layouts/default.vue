<script setup lang="ts"></script>

<template>
  <div :class="['flex flex-row', 'lg:gap-x-[50px]']">
    <AppSidebar />
    <div
      :class="[
        'flex flex-col',
        'md:w-[calc(100%-90px)]',
        'lg:w-[calc(100%-292px)]',
      ]"
    >
      <AppHeader />
      <main class="me-[50px]">
        <h2 class="text-2xl font-medium h-16 leading-[4rem]">Dashboard</h2>
        <slot />
      </main>
    </div>
  </div>
</template>
