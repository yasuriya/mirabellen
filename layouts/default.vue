<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mirabellen',
  meta: [
    { name: 'description', content: 'Cosmetics shop' },
    { name: 'og:title', content: 'Mirabellen - cosmetics' },
  ],
})
</script>
