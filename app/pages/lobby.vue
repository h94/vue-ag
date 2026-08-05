<script setup lang="ts">
const weatherData = [
  {
    date: '2026-07-30',
    items: [
      { city: '台北', temperature: '28°C', condition: '晴天' },
      { city: '桃園', temperature: '26°C', condition: '多雲' },
      { city: '台中', temperature: '30°C', condition: '高溫' },
      { city: '台南', temperature: '29°C', condition: '雷陣雨' },
      { city: '高雄', temperature: '31°C', condition: '晴天' },
    ],
  },
  {
    date: '2026-07-31',
    items: [
      { city: '台北', temperature: '27°C', condition: '多雲' },
      { city: '桃園', temperature: '25°C', condition: '晴天' },
      { city: '台中', temperature: '29°C', condition: '晴天' },
      { city: '台南', temperature: '28°C', condition: '陰天' },
      { city: '高雄', temperature: '30°C', condition: '雷陣雨' },
    ],
  },
  {
    date: '2026-08-01',
    items: [
      { city: '台北', temperature: '26°C', condition: '陰天' },
      { city: '桃園', temperature: '24°C', condition: '短暫陣雨' },
      { city: '台中', temperature: '28°C', condition: '多雲' },
      { city: '台南', temperature: '27°C', condition: '晴天' },
      { city: '高雄', temperature: '29°C', condition: '多雲' },
    ],
  },
]

const selectedDay = ref(0)
const currentDay = computed(() => {
  const day = weatherData[selectedDay.value] ?? weatherData[0]
  return day
})

const selectDay = (index: number) => {
  selectedDay.value = index
}
</script>

<template>
  <v-container class="py-6">
    <h1 class="text-h4 mb-4">Lobby</h1>

    <div class="d-flex flex-wrap gap-2 mb-6">
      <v-btn
        v-for="(day, index) in weatherData"
        :key="day.date"
        :variant="selectedDay === index ? 'flat' : 'outlined'"
        color="primary"
        @click="selectDay(index)"
      >
        {{ day.date }}
      </v-btn>
    </div>

    <div class="text-h6 mb-4">目前顯示：{{ currentDay?.date }}</div>

    <v-row>
      <v-col
        v-for="item in currentDay?.items"
        :key="item.city"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="pa-4" elevation="2">
          <div class="text-h6 mb-2">{{ item.city }}</div>
          <div class="text-body-1">溫度：{{ item.temperature }}</div>
          <div class="text-body-1">天氣狀況：{{ item.condition }}</div>
          <div class="text-body-2 text-medium-emphasis">日期：{{ currentDay?.date }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
