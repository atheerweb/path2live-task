<script setup lang="ts">
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'
import axios from 'axios'
const { data } = await axios.get('/charts')
const quarterYearLabels = ['January', 'February', 'March']
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <bar-chart
          :title="'products performance'"
          :labels="quarterYearLabels"
          :data="data.product_performance_quarterly"
        ></bar-chart>
      </v-col>
      <v-col cols="12" sm="6">
        <line-chart
          :title="'sales'"
          :labels="quarterYearLabels"
          :data="data.sales_quarterly"
        ></line-chart>
      </v-col>
    </v-row>
  </v-container>
</template>
