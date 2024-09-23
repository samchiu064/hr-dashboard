<script setup lang="ts">
import chartImage01 from '@/assets/img/chart_01.webp'
import chartImage02 from '@/assets/img/chart_02.webp'

const announcementData = ref([
  {
    key: 1,
    title: '安排公司戶外踏青活動',
    time: '5 分鐘前',
  },
  {
    key: 2,
    title: '公司將於 10 月 1 日放假',
    time: '1 小時前',
  },
  {
    key: 3,
    title: 'IT 部門需要兩名前端工程師',
    time: '2 小時前',
  },
])

const infoCardData = ref<
  {
    type: 'warning' | 'info' | 'info-purple'
    title: string
    number: number
    message: string
  }[]
>([
  {
    type: 'warning',
    title: '可應徵職缺',
    number: 24,
    message: '4 急需用人',
  },
  {
    type: 'info',
    title: '開放職缺',
    number: 10,
    message: '4 主動應徵',
  },
  {
    type: 'info-purple',
    title: '新入職員工',
    number: 24,
    message: '4 部門',
  },
])

const infoCardChartData = ref<
  {
    title: string
    number: number
    men: number
    women: number
    image: string
  }[]
>([
  {
    title: '員工總數',
    number: 216,
    men: 120,
    women: 96,
    image: chartImage01,
  },
  {
    title: '招募需求',
    number: 16,
    men: 6,
    women: 10,
    image: chartImage02,
  },
])
</script>

<template>
  <div class="sans-tc flex flex-row lg:gap-x-[30px]">
    <section class="flex flex-col gap-y-5 lg:w-[60%] lg:max-w-[640px]">
      <div class="flex flex-row justify-start gap-x-[0.875rem]">
        <InfoCard
          v-for="{ type, title, number, message } in infoCardData"
          :key="title"
          :type="type"
          :title="title"
          :number="number"
          :message="message"
        />
      </div>
      <div class="flex flex-row justify-start gap-x-4">
        <InfoCardChart
          v-for="{ title, number, men, women, image } in infoCardChartData"
          :key="title"
          :title="title"
          :number="number"
          :men="men"
          :women="women"
          :image="image"
        />
      </div>
      <base-card border size="lg">
        <template #title>
          <div class="flex flex-row items-center justify-between">
            <h3>通知</h3>
            <select
              id="datetime"
              name="datetime"
              class="text-xs text-secondary-subtitle border rounded py-0.5 px-1.5"
            >
              <option>Today, 13 Sep 2021</option>
            </select>
          </div>
        </template>
        <template #description>
          <div class="flex flex-col gap-y-2 overflow-y-scroll">
            <base-list
              v-for="{ key, title, time } in announcementData"
              :key="key"
              toolkit-alignment="middle"
              class="bg-[#fafafa]"
            >
              <template #header>{{ title }}</template>
              <template #subHeader>{{ time }}</template>
              <template #prependIcon>
                <BaseIcon icon="PushPin" class="rotate-45" hover />
              </template>
            </base-list>
          </div>
        </template>
        <template #footer>
          <div
            class="text-primary-red/80 text-center text-sm font-medium py-2 border-t cursor-pointer hover:text-primary-red"
          >
            查看所有通知
          </div>
        </template>
      </base-card>
    </section>
    <section class="flex flex-col gap-y-5 lg:lg:w-[40%] lg:max-w-[427px]">
      <div class="flex flex-col lg:max-w-[427px]">
        <div
          class="text-lg text-white py-2.5 ps-6 pe-2.5 bg-[#1b204a] rounded-t-[0.625rem]"
        >
          近期活動
        </div>
        <div
          class="flex flex-col gap-y-7 py-6 ps-6 pe-8 bg-tertiary rounded-b-[0.625rem]"
        >
          <div class="flex flex-col gap-y-1.5 w-[80%]">
            <span class="text-sm text-white/80"
              >10.40 AM, Fri 10 Sept 2024</span
            >
            <p class="text-lg text-white font-medium">您發佈了一個新的職缺</p>
            <p class="text-sm text-white/80">
              請檢查需求和工作條件，並確保一切正確無誤。
            </p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <span class="text-white font-regular">您今天完成了 12 項活動</span>
            <base-button type="primary">查看所有活動</base-button>
          </div>
        </div>
      </div>
      <base-card border size="lg">
        <template #title>
          <div class="flex flex-row items-center justify-between">
            <h3>即將到來的行程</h3>
            <select
              id="datetime"
              name="datetime"
              class="text-xs text-secondary-subtitle border rounded py-0.5 px-1.5"
            >
              <option>Today, 13 Sep 2021</option>
            </select>
          </div>
        </template>
        <template #description>
          <div class="flex flex-col gap-y-2 max-h-[304px]">
            <base-list
              v-for="{ key, title, time } in announcementData"
              :key="key"
              toolkit-alignment="middle"
              class="bg-[#fafafa] lg:max-w-[387px]"
            >
              <template #header>{{ title }}</template>
              <template #subHeader>{{ time }}</template>
            </base-list>
          </div>
        </template>
        <template #footer>
          <div
            class="text-primary-red/80 text-center text-sm font-medium py-2 border-t cursor-pointer hover:text-primary-red"
          >
            建立新的行程
          </div>
        </template>
      </base-card>
    </section>
  </div>
</template>
