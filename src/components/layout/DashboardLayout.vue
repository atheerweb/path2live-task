<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import DashboardSideMenu from '@/components/layout/DashboardSideMenu.vue'
</script>
<template>
  <div>
    <v-card>
      <v-layout>
        <!-- 👉 TOP NAVIGATION -->
        <navigation-bar />
        <!-- 👉 SIDEBAR -->
        <dashboard-side-menu></dashboard-side-menu>
        <!-- 👉 PAGE CONTENT -->
        <v-main>
          <div>
            <slot />
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>
