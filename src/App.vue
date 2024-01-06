<script setup lang="ts">
import { RouterView } from 'vue-router'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import AnalyticsSkeleton from '@/components/skeleton/AnalyticsSkeleton.vue'
</script>

<template>
  <dashboard-layout>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback>
                <analytics-skeleton />
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </dashboard-layout>
</template>

<style scoped></style>
