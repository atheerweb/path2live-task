<script setup lang="ts">
import BarChart from '@/components/charts/BarChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <bar-chart
          :title="'product-performance'"
          :labels="['hi', 'bye', 'hi', 'lol']"
          :data="[10, 20, 30, 40]"
        ></bar-chart>
      </v-col>
      <v-col cols="12" sm="6">
        <pie-chart></pie-chart>
      </v-col>
    </v-row>
  </v-container>
</template>
