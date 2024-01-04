<script setup lang="ts">
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

import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: props.labels,
  datasets: props.data
}
const chartOptions = {
  responsive: true
}
</script>
<template>
  <v-card :title="title">
    <bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </v-card>
</template>

<style scoped></style>
