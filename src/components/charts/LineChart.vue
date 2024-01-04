<script setup lang="ts">
import { Line } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement)

interface Chart {
  label: string
  backgroundColor: string
  data: Array<number>
}

const props = defineProps<{
  labels: Array<string>
  data: Array<Chart>
  title: string
}>()

const chartData = {
  labels: props.labels,
  datasets: props.data
}
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
<template>
  <v-card :title="title" height="285">
    <div>
      <Line id="my-chart-id" :options="chartOptions" :data="chartData" :width="250" :height="250" />
    </div>
  </v-card>
</template>

<style scoped></style>
