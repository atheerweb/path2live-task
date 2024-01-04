<script setup lang="ts">
import { RouterView } from 'vue-router'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
</script>

<template>
  <dashboard-layout>
    <RouterView />
  </dashboard-layout>
</template>

<style scoped></style>
