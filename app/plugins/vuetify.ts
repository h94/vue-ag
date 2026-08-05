import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    // 可在此處設定主題或預設值
  })

  // 將 Vuetify 實例掛載到 Vue 應用程式中
  nuxtApp.vueApp.use(vuetify)
})