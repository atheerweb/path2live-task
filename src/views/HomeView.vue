<script setup lang="ts">
import BarChart from '@/components/charts/BarChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import axios from 'axios'
const {data} = await axios.get('/charts')
</script>

<template>

  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <bar-chart
          :title="'products performance'"
          :labels="['january', 'february', 'march']"
          :data="data.product_performance_quarterly"
        ></bar-chart>
      </v-col>
      <v-col cols="12" sm="6">
        <pie-chart
          :title="'most ordered category'"
          :labels="['january', 'february', 'march']"
          :data="[10, 20, 30, 40]"
        ></pie-chart>
      </v-col>
    </v-row>
  </v-container>
</template>
