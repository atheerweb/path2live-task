<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const chartData = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
<template>
  <v-card title="Sales trend">
    <pie id="my-chart-id" :options="chartOptions" :data="chartData" />
  </v-card>
</template>

<style scoped></style>
