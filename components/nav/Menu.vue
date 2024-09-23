<script setup lang="ts">
const props = defineProps<{
  title?: string
  lists?: Array<{ label: string; icon: string; routeName: string }>
}>()

const { isActive } = useSidebar()

const navClass = computed(() => [
  isActive.value ? 'md:w-full' : 'md:w-[64px]',
  'lg:w-full',
])

const handleNavigation = async (routeName: string) => {
  await navigateTo(routeName)

  if (isActive.value) {
    isActive.value = false
  }
}
</script>

<template>
  <nav :class="navClass">
    <p
      :class="[
        'text-sm text-secondary-subtitle font-medium py-2.5 text-center',
        'md:w-16',
        'lg:text-start',
      ]"
    >
      {{ props.title }}
    </p>
    <ul class="flex flex-col">
      <NavMenuList
        v-for="list in props.lists"
        :key="list.routeName"
        v-bind="list"
        class="py-4 px-5"
        @click:list="handleNavigation(list.routeName)"
      />
    </ul>
  </nav>
</template>
