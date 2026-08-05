<!-- app/components/AppHeader.vue -->
<template>
  <header>
    <section class="menu-navbar sideBar" :class="{ active: isSidebarOpen }">
      <button class="navber" @click="toggleSidebar">
        <i class="navbar_ic"></i>
      </button>
      <div class="title">
        <span>菜單</span>
        <i class="close_ic" @click="toggleSidebar"></i>
      </div>
      <aside>
        <NuxtLink to="/">
          <i class="home_ic"></i>
          <span>首頁</span>
        </NuxtLink>
        <NuxtLink to="#">
          <i class="balls_ic"></i>
          <span>球種資訊</span>
        </NuxtLink>
        <button class="settlement" :class="{ active: isSettlementOpen }" @click="toggleSettlement">
          <i class="settlement_ic"></i>
          <span>待結投注</span>
          <article v-if="isSettlementOpen" @click.stop>
            <p>待結投注<i class="pin_ic"></i></p>
            <NuxtLink to="#">
              <span>讓球盤</span><span>大小盤</span><span>獨營盤</span><span>滾球</span>
            </NuxtLink>
            <NuxtLink to="#">
              <span>球隊總得分</span>
            </NuxtLink>
            <NuxtLink to="#">
              <span>優勝冠軍盤</span><span>特別盤口</span>
            </NuxtLink>
            <NuxtLink to="#">
              <span>混合過關</span>
            </NuxtLink>
            <NuxtLink to="#">
              <span>優惠過關盤</span>
            </NuxtLink>
            <NuxtLink to="#">
              <span>投注監視器</span>
            </NuxtLink>
          </article>
        </button>
        <NuxtLink to="/reports" class="active">
          <i class="report_ic"></i>
          <span>報表</span>
        </NuxtLink>
        <NuxtLink to="#">
          <i class="account_ic"></i>
          <span>帳號管理</span>
        </NuxtLink>
        <NuxtLink to="#">
          <i class="betting_ic"></i>
          <span>即時注單</span>
        </NuxtLink>
      </aside>
      <div class="mask" @click="toggleSidebar"></div>
    </section>

    <section class="menu-btns">
      <a href="#">
        <i class="member_ic"></i>新增會員
      </a>
      <a href="#">
        <i class="customer_ic"></i>在線客服
      </a>
      <a href="#">
        <i class="post_ic"></i>公告
      </a>
    </section>

    <section class="menu-navbar">
      <button>
        <i class="setting_ic"></i>
      </button>
    </section>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSidebarOpen = ref(false)
const isSettlementOpen = ref(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
  if (!isSidebarOpen.value) {
    isSettlementOpen.value = false
  }
}

function toggleSettlement() {
  isSettlementOpen.value = !isSettlementOpen.value
}
</script>
