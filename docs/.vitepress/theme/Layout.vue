<template>
  <div class="custom-layout">
    <Layout>
      <template #home-hero-after>
        <LearningPath />
      </template>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LearningPath from './components/LearningPath.vue'

const Layout = DefaultTheme.Layout
</script>

<style scoped>
.custom-layout {
  min-height: 100vh;
}
</style>
