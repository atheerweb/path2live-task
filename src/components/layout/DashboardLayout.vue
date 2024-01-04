<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import DashboardSideMenu from '@/components/layout/DashboardSideMenu.vue'
const drawer = ref(true)
</script>
<template>
  <v-card class="h-screen">
    <v-layout>
      <!-- 👉 TOP NAVIGATION -->
      <navigation-bar @toggle-side-menu="drawer = !drawer" />
      <!-- 👉 SIDEBAR -->
      <dashboard-side-menu :drawer="drawer"></dashboard-side-menu>
      <!-- 👉 PAGE CONTENT -->
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>
