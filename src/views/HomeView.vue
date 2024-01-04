<script setup lang="ts">
import DynamicChart from '@/components/charts/DynamicChart.vue'
import axios from 'axios'
import { ref } from 'vue'
const { data } = await axios.get('/charts')

const filters = ref([
  {
    id: 1,
    name: 'yearly',
    value: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
  },
  { id: 2, name: 'quarterly', value: ['January', 'February', 'March'] }
])
const chosenChart = ref<null | number[]>(null)
const chosenFilter = ref<{ id: number; name: string; value: string[] }>({
  id: 2,
  name: 'quarterly',
  value: ['January', 'February', 'March']
})
</script>

<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            v-model="chosenChart"
            :append-inner-icon="'mdi-magnify'"
            variant="solo"
            :multiple="true"
            chips
            :items="data"
            :item-title="'name'"
            :item-value="'id'"
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            v-model="chosenFilter"
            :append-inner-icon="'mdi-filter'"
            variant="solo"
            :items="filters"
            :item-title="'name'"
            :item-value="'id'"
            return-object
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-form>
    <v-row :key="chosenFilter.id">
      <v-col v-for="chart in data" :key="chart.id" cols="12" sm="6">
        <dynamic-chart
          v-if="chosenChart?.includes(chart.id)"
          :data="chart.data"
          :labels="chosenFilter.value"
          :title="chart.title"
          :type="chart.type"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
