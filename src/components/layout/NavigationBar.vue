<script setup lang="ts">
import ThemeButton from '@/components/layout/ThemeButton.vue'
defineEmits<{
  (e: 'toggleSideMenu'): void
}>()
</script>
<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-btn icon="mdi-menu" @click="$emit('toggleSideMenu')"></v-btn>
    </template>
    <v-app-bar-title>PathToLive</v-app-bar-title>
    <template v-slot:append>
      <theme-button></theme-button>
    </template>
  </v-app-bar>
</template>

<style scoped></style>
