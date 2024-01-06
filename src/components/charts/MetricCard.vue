<script setup lang="ts">
defineProps<{
  title: any
  data: number | string
}>()
</script>

<template>
  <v-card>
    <v-card-title class="text-capitalize" data-test="title">{{ title }}</v-card-title>
    <v-card-text class="text-center text-h5 font-weight-bold my-6 text-primary" data-test="data">
      {{ data }}
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
