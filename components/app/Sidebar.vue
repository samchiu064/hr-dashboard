<script setup lang="ts">
const { isActive } = useSidebar()

const navMainMenu = {
  title: '主選單',
  lists: [
    { label: '主選單', icon: 'Dashboard', routeName: 'Dashboard' },
    { label: '人才招募', icon: 'PersonAdd', routeName: 'Recruitment' },
    { label: '時程管理', icon: 'Event', routeName: 'Schedule' },
    { label: '員工管理', icon: 'Employee', routeName: 'Employee' },
    { label: '部門管理', icon: 'Group', routeName: 'Department' },
  ],
}

const otherMenu = {
  title: '其他',
  lists: [
    { label: '客戶服務', icon: 'Support', routeName: 'Support' },
    { label: '系統設定', icon: 'Setting', routeName: 'Settings' },
  ],
}
</script>

<template>
  <aside
    :class="[
      'flex flex-col items-center gap-y-[40px] h-screen bg-[#fafafa] border-r border-[#f1f1f1] ease-in duration-300 absolute z-10',
      'md:static md:p-3 md:items-stretch',
      'lg:w-[242px] lg:p-[1.875rem]',
      isActive ? 'w-full md:w-[242px]' : 'w-0 overflow-hidden	md:w-[90px]',
    ]"
  >
    <h1
      :class="[
        'font-semibold mt-6',
        'md:text-xl md:mt-6',
        'lg:text-4xl lg:mt-0',
      ]"
    >
      <img
        :class="[
          'w-full transition-all duration-[350ms]',
          isActive ? 'md:w-[144px]' : 'md:w-16',
          ,
          'lg:w-full',
        ]"
        src="@/assets/img/logo.webp"
        alt="網站logo"
      />
    </h1>
    <NavMenu v-bind="navMainMenu" />
    <NavMenu v-bind="otherMenu" />
  </aside>
</template>
