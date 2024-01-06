<script setup lang="ts">
import MetricCard from '../charts/MetricCard.vue'
import axios from 'axios'
const { data } = await axios.get('/metrics')
</script>
<template>
  <v-row class="mb-5">
    <v-col v-for="(metric, key) in data" :key="key" cols="12" sm="4">
      <metric-card :title="key" :data="metric" />
    </v-col>
  </v-row>
</template>

<style scoped></style>
