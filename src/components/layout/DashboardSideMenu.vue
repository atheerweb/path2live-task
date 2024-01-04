<script setup lang="ts">
import { ref, computed } from 'vue'
defineProps<{
  drawer: boolean
}>()
const sidebarLinks = computed(() => [
  {
    icon: 'mdi-chart-timeline-variant-shimmer',
    title: 'analytics',
    to: '/',
    slug: 'summary'
  }
])
</script>
<template>
  <v-navigation-drawer data-name="drawer" :model-value="drawer" parament>
    <v-list>
      <v-list-item v-for="(item, i) in sidebarLinks" :key="i" data-test="list">
        <v-list-item link :title="item.title" :prepend-icon="item.icon" :to="item.to"></v-list-item>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
