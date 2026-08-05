<!-- app/components/reports/ReportFilters.vue -->
<template>
  <section class="searchBlock">
    <div class="selects">
      <BaseSelect v-model="filters.category" label="類別  |" :options="['帳務日期', '過帳日期']" />
      <BaseSelect v-model="filters.sport" label="球種  |" :options="['全部', '足球', '美國職籃', '其他籃球', '美國職棒', '日本職棒', '中華職棒', '其他棒球', '美式足球', '網球', '彩球', '賽馬賽狗', '指數', '電競', '世界盃', '高爾夫', '冰球', '拳擊', '拳擊格鬥', '羽球', '排球', '桌球', '板球', '撞球', '手球', '世界盃(舊其他足球)', '足球-歐洲盃', '娛樂']" />
      <BaseSelect v-model="filters.stage" label="賽程時段  |" :options="['全部', '早盤', '滾球']" />
      <BaseSelect v-model="filters.reportType" label="報表分類  |" :options="['總帳', '分類帳', '細目帳']" />
      <BaseSelect v-model="filters.betType" label="投注總類  |" :options="['全部', '單式', '複式']" />
    </div>

    <div class="dates">
      <label class="date">
        <input type="date" v-model="filters.startDate">
        <p>到</p>
        <input type="date" v-model="filters.endDate">
      </label>
      <button @click="applyShortcut('yesterday')">昨日</button>
      <button @click="applyShortcut('today')">今日</button>
      <button @click="applyShortcut('tomorrow')">明日</button>
      <button @click="applyShortcut('last_week')">上週</button>
      <button @click="applyShortcut('this_week')">本周</button>
      <button class="submit" @click="onConfirm">確認</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseSelect from '../ui/BaseSelect.vue'

const filters = reactive({
  category: '帳務日期',
  sport: '全部',
  stage: '全部',
  reportType: '總帳',
  betType: '全部',
  startDate: '2025-11-26',
  endDate: '2025-11-26'
})

function applyShortcut(_id: string) {
  // 日期快捷邏輯保留給後續串接 API
}

const emit = defineEmits(['search'])

function onConfirm() {
  emit('search', { ...filters })
}
</script>
