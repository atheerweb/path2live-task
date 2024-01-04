<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()


function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  sessionStorage.setItem('theme', theme.global.name.value)
}
// stores the default theme value in session storage in our case light theme
function checkTheme() {
  const chosenTheme = sessionStorage.getItem('theme')
  if (chosenTheme) theme.global.name.value = chosenTheme
}
checkTheme()
</script>
<template>
  <v-btn variant="text" icon="mdi-theme-light-dark" @click="toggleTheme()"></v-btn>
</template>

<style scoped></style>
