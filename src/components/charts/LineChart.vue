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
  data: Chart
  title: string
}>()

const chartData = {
  labels: props.labels,
  datasets: [props.data]
}
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
<template>
  <v-card>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" :width="400" :height="400" />
  </v-card>
</template>

<style scoped></style>
