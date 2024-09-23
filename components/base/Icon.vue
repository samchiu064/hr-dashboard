<script setup lang="ts">
import ArrowDown from '@/components/icon/ArrowDown.vue'
import Bell from '@/components/icon/Bell.vue'
import Dashboard from '@/components/icon/Dashboard.vue'
import Employee from '@/components/icon/Employee.vue'
import Event from '@/components/icon/Event.vue'
import Group from '@/components/icon/Group.vue'
import Info from '@/components/icon/Info.vue'
import Menu from '@/components/icon/Menu.vue'
import Message from '@/components/icon/Message.vue'
import MoreHoriz from '@/components/icon/MoreHoriz.vue'
import Notification from '@/components/icon/Notification.vue'
import PersonAdd from '@/components/icon/PersonAdd.vue'
import PushPin from '@/components/icon/PushPin.vue'
import Search from '@/components/icon/Search.vue'
import Setting from '@/components/icon/Setting.vue'
import Support from '@/components/icon/Support.vue'

const props = defineProps<{
  icon?: string
  hover?: boolean
}>()

const iconMap: Record<string, Component> = {
  ArrowDown,
  Bell,
  Dashboard,
  Employee,
  Event,
  Group,
  Info,
  Menu,
  Message,
  MoreHoriz,
  Notification,
  PersonAdd,
  PushPin,
  Search,
  Setting,
  Support,
}

defineEmits(['click:icon'])
</script>

<template>
  <component
    :is="iconMap[props.icon || 'Info']"
    :class="[
      'text-2xl text-[#b2b2b2] transition-colors',
      {
        'hover:text-[#737978] cursor-pointer': props.hover,
      },
    ]"
    @click="$emit('click:icon')"
  />
</template>
