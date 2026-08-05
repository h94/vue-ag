import { defineNuxtConfig } from "nuxt/config";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // 確保 plugins 陣列存在後直接 push，不進行重新指派 (=)
        if (config.plugins) {
          config.plugins.push(vuetify({ autoImport: true }))
        }
      })
    },
    "@nuxtjs/i18n",
    "@nuxt/icon",
    '@pinia/nuxt',
    "@vueuse/nuxt",
    "dayjs-nuxt"
  ],

  i18n: {
    langDir: '../i18n/locales',
    defaultLocale: 'zh-TW',
    strategy: 'no_prefix',
    locales: [
      { code: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' }
    ]
  },

  css: [
    "vuetify/lib/styles/main.sass",
    '@mdi/font/css/materialdesignicons.css',
    "~/assets/scss/style.scss"
  ],

  build: {
    transpile: [
      "vuetify",
    ],
  },

  imports: {
    autoImport: true,
    dirs: [
      // 掃描 composables 目錄頂層
      "composables",
      // 掃描深度一層的特定檔案
      "composables/*/index.{ts,js,mjs,mts}",
      // 掃描整個 composables 目錄下的檔案
      "composables/**",
      // 掃描 stores 目錄（含 Pinia Stores）
      "stores",
      "stores/**",
      "app/stores",
      "app/stores/**"
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          silenceDeprecations: ['if-function'],
        },
        scss: {
          silenceDeprecations: ['if-function'],
          quietDeps: true,
        },
      },
    },
    optimizeDeps: {
      include: [
        '@intlify/core',
        '@intlify/core-base',
        '@intlify/message-compiler',
        '@intlify/shared',
        '@intlify/utils/h3',
        '@microsoft/signalr',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'axios',
        'dayjs',
        'dayjs/plugin/relativeTime',
        'dayjs/plugin/updateLocale',
        'dayjs/plugin/utc',
        'pako',
        'ufo',
        'vue-i18n',
        'vue3-json-viewer',
        'vue3-toastify',
      ],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})