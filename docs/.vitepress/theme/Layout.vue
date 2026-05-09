<template>
  <div class="custom-layout">
    <Layout />
  </div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const Layout = DefaultTheme.Layout
</script>

<style scoped>
.custom-layout {
  min-height: 100vh;
}
</style>
