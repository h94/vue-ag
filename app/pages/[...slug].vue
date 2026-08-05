<!-- app/pages/[...slug].vue -->
<script setup lang="ts">
// 捕捉所有未定義的路由並自動導向到首頁 /
definePageMeta({
  middleware: [
    () => {
      return navigateTo('/', { replace: true })
    }
  ]
})
</script>

<template>
  <div></div>
</template>
