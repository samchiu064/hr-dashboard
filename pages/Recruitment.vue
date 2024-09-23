<script setup lang="ts">
import chartImage01 from '@/assets/img/chart_01.webp'
import chartImage02 from '@/assets/img/chart_02.webp'
</script>

<template>
  <div class="font-noto-sans-tc">
    <base-button type="primary" size="md"> Primary Button </base-button>
    <base-button type="secondary" size="md"> Secondary Button </base-button>
    <base-button type="primary" size="sm"> Primary Button </base-button>
    <base-button type="secondary" size="sm"> Secondary Button </base-button>
    <div class="my-3 h-2 bg-cyan-700" />

    <div class="my-3 h-2 bg-cyan-700" />
    <InfoCard
      type="warning"
      title="可應徵職缺"
      :number="24"
      message="4 急需用人"
    />
    <InfoCard type="info" title="開放職缺" :number="10" message="4 主動應徵" />
    <InfoCard
      type="info-purple"
      title="新入職員工"
      :number="24"
      message="4 部門"
    />

    <InfoCardChart
      title="員工總數"
      :number="216"
      :men="120"
      :women="96"
      :image="chartImage01"
    />
    <InfoCardChart
      title="招募需求"
      :number="16"
      :men="6"
      :women="10"
      :image="chartImage02"
    />
  </div>
</template>
