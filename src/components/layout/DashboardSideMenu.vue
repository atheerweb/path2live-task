<script setup lang="ts">
import { ref, computed } from 'vue'

const drawer = ref(true)
const sidebarLinks = computed(() => [
  {
    icon: 'mdi-widgets',
    title: 'home',
    to: '/',
    slug: 'summary'
  },
  {
    icon: 'mdi-food-turkey',
    title: 'orders',
    to: '/orders',
    slug: 'orders'
  },
  {
    icon: 'mdi-cart',
    title: 'products',
    to: '/products',
    slug: 'products'
  }
])
</script>
<template>
  <v-navigation-drawer :model-value="drawer" permanent color="dashboard" dir="auto">
    <v-list>
      <div v-for="(item, i) in sidebarLinks" :key="i" data-test="list">
        <v-list-item link :title="item.title" :prepend-icon="item.icon" :to="item.to"></v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
