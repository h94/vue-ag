<!-- components/Drawer.vue -->


<template>
  
  <v-navigation-drawer v-model="drawer" permanent>
    <!-- 1. 頂部區 -->
    <v-list-item
      lines="two"
      :title="t('User.Guest', 'Guest')"
    >
      <template #prepend>
        <v-btn variant="text" to="/">
          <v-icon icon="mdi-home" size="24" />
        </v-btn>
      </template>
    </v-list-item>

    <v-divider />

    <!-- 2. 選單區 -->
    <v-list nav density="compact" color="primary">
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Lobby"
        to="/lobby"
      />
      <v-list-item
        prepend-icon="mdi-history"
        title="History"
        to="/history"
      />
      <v-list-item
        prepend-icon="mdi-eye"
        title="Observe"
        to="/observe"
      />
    </v-list>
    <template v-slot:append>
      <div>{{ Loading }}</div>
            <div class="pa-4">
        <v-btn v-if="Loading" block @click="logout" prepend-icon="mdi-logout">
          Logout
        </v-btn>
        <v-btn v-else block @click="openLogin" prepend-icon="mdi-login">
          Login
        </v-btn>
      </div>
    </template>
    
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const drawer = ref(true)
const { Loading } = useGlobal()

const openLogin = () => {
 // console.log('Login clicked')
  Loading.value = true
}

const logout = () => {
 // console.log('Logout clicked')
  Loading.value = false
}

watch(Loading, (newValue) => {
  console.log('Loading changed:', newValue)
})
</script>