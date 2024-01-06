<script setup lang="ts"></script>
<template>
  <v-container>
    <v-skeleton-loader type="heading"></v-skeleton-loader>
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
