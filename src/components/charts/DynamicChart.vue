<script setup lang="ts">
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'
interface Chart {
  label: string
  backgroundColor: string
  data: Array<number>
}

const props = defineProps<{
  labels: Array<string>
  data: Array<Chart>
  title: string
  type: string
}>()




</script>
<template>
  <div>
    <bar-chart v-if="type === 'bar'" :title="title" :labels="labels" :data="data"></bar-chart>
    <line-chart v-if="type === 'line'" :title="title" :labels="labels" :data="data"></line-chart>
  </div>
</template>

<style scoped></style>
