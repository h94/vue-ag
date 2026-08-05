<!-- app/pages/reports.vue -->
<template>
  <main class="report">
    <section class="titleBlock">
      <i class="back_ic"></i>
      <h1>報表</h1>
      <p>足球 <span class="orange">3</span> 場比賽 未輸入 比賽得分</p>
      <p>指數 <span class="orange">7</span> 場比賽 未輸入 比賽得分</p>
    </section>

    <ReportFilters />
    <DataTableGroup />
  </main>
</template>

<script setup lang="ts">
import ReportFilters from '~/components/reports/ReportFilters.vue'
import DataTableGroup from '~/components/reports/DataTableGroup.vue'

definePageMeta({
  layout: 'default'
})
</script>
