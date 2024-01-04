<script setup lang="ts">
import DynamicChart from '@/components/charts/DynamicChart.vue'
import axios from 'axios'
import { ref } from 'vue'
const { data } = await axios.get('/charts')

// note that if it was production project I would have used query params instead of static typing
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
const chosenFilter = ref<{ id: number; name: string; value: string[] }>(filters.value[1])
</script>

<template>
  <v-container>
    <!-- SEARCH AND FILTERS FORM -->
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
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
        <v-col cols="12" sm="6">
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
    <!-- CHARTS DISPLAY -->
    <!-- Key trick to rerender components if filter is changed again if it was production i would refetch data with the chosen filter query param -->
    <v-row :key="chosenFilter.id">
      <v-col v-for="chart in data" :key="chart.id" cols="12" sm="6">
        <dynamic-chart
          v-if="chosenChart?.includes(chart.id)"
          :data="chart.data"
          :labels="chosenFilter.value"
          :title="chart.name"
          :type="chart.type"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
