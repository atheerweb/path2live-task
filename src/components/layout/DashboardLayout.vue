<script setup lang="ts">
import { ref  } from 'vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import DashboardSideMenu from '@/components/layout/DashboardSideMenu.vue'
//  check screen size if it is pc it is open by default and closed in mobile
const drawer = ref(window.innerWidth > 500 ? true : false)
</script>
<template>
  <v-card>
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
