<!-- app/components/reports/DataTableGroup.vue -->
<template>
  <section class="dataBlock">
    <article class="title">
      <div>
        <i class="back_ic"></i>
        <p class="blue">總帳</p>
      </div>
      <div>
        <button><i class="refresh_ic"></i>更新</button>
        <BaseSelect v-model="selectedAction" :options="['下拉選單', '匯出 Excel', '列印報表']" />
      </div>
    </article>

    <article class="data">
      <BaseDataTable title="全部" :rows="allRows" first-col-label="總監" />
      <BaseDataTable title="足球" :rows="footballRows" first-col-label="總監" />
      <BaseDataTable title="籃球" :rows="basketballRows" first-col-label="總監" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseDataTable, { type ReportRowData } from './BaseDataTable.vue'
import BaseSelect from '../ui/BaseSelect.vue'

const selectedAction = ref('下拉選單')

const sampleData: ReportRowData[] = [
  { account: 'AA001(王)', count: 197, betAmount: 439710, validBet: 431960, memberResult: -56113, agentResult: -54635, masterAgentResult: -40594, shareholderResult: -7548, majorShareholderResult: -2497, directorResult: -2497, grandDirectorResult: -2497, share: 95 },
  { account: 'AA003(老)', count: 197, betAmount: 439710, validBet: 431960, memberResult: -56113, agentResult: -54635, masterAgentResult: -40594, shareholderResult: -7548, majorShareholderResult: -2497, directorResult: -2497, grandDirectorResult: -2497, share: 95 },
  { account: 'AA004(abab)', count: 197, betAmount: 439710, validBet: 431960, memberResult: -56113, agentResult: -54635, masterAgentResult: -40594, shareholderResult: -7548, majorShareholderResult: -2497, directorResult: -2497, grandDirectorResult: -2497, share: 95 },
  { account: 'AA004(abab)', count: 197, betAmount: 439710, validBet: 431960, memberResult: -56113, agentResult: -54635, masterAgentResult: -40594, shareholderResult: -7548, majorShareholderResult: -2497, directorResult: -2497, grandDirectorResult: -2497, share: 95 },
]

const allRows = ref<ReportRowData[]>([...sampleData])
const footballRows = ref<ReportRowData[]>([...sampleData])
const basketballRows = ref<ReportRowData[]>([...sampleData])
</script>
