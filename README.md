# vue-ag

後台管理系統前端專案，基於 Nuxt 4 + Vuetify 4 開發，採用 CSR（純客戶端渲染）模式。

---

## 技術棧

| 類型 | 套件 | 版本 |
|---|---|---|
| 框架 | [Nuxt](https://nuxt.com/) | ^4 |
| UI 元件庫 | [Vuetify](https://vuetifyjs.com/) | ^4 |
| 語言 | TypeScript | ^6 |
| 狀態管理 | [Pinia](https://pinia.vuejs.org/) | ^4 |
| HTTP | [Axios](https://axios-http.com/) | ^1 |
| 即時通訊 | [@microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr) | ^10 |
| 日期處理 | [Day.js](https://day.js.org/) | ^1 |
| 國際化 | [@nuxtjs/i18n](https://i18n.nuxtjs.org/) | ^10 |
| 樣式預處理 | SASS / SCSS | ^1 |
| 渲染模式 | CSR（SSR 關閉） | — |

---

## 專案結構

```
vue-ag/
├── app/
│   ├── app.vue                  # 根元件
│   ├── assets/
│   │   └── scss/                # 全域樣式
│   │       ├── base/            # reset、color、mixin、rwd
│   │       ├── components/      # header、popup、mainWrap
│   │       ├── _layout.scss
│   │       ├── _reset.scss
│   │       └── style.scss       # 入口（@forward 彙整）
│   ├── components/
│   │   ├── AppHeader.vue        # 頂部導覽列 + 側邊選單
│   │   ├── reports/             # 報表相關元件
│   │   │   ├── BaseDataTable.vue
│   │   │   ├── DataTableGroup.vue
│   │   │   └── ReportFilters.vue
│   │   └── ui/                  # 通用 UI 元件
│   │       └── BaseSelect.vue
│   ├── composables/             # 可複用邏輯
│   │   ├── global.ts
│   │   └── useCookieData.ts
│   ├── layouts/
│   │   └── default.vue          # 預設 layout
│   ├── middleware/
│   │   └── notFound.global.ts   # 全域 404 導向
│   ├── pages/                   # 路由頁面
│   │   ├── index.vue            # 導向 /reports
│   │   ├── reports.vue          # 報表主頁
│   │   ├── lobby.vue
│   │   └── [...slug].vue        # catch-all，導回首頁
│   ├── plugins/
│   │   ├── helpers.ts           # formatDate / formatNumber
│   │   └── vuetify.ts           # Vuetify 初始化
│   └── stores/
│       └── system.ts            # 全域 Loading 狀態
├── i18n/
│   └── locales/
│       ├── zh-TW.json
│       └── en-US.json
├── public/
│   └── img/                     # 靜態圖片資源
├── nuxt.config.ts               # Nuxt 設定
├── package.json
└── tsconfig.json
```

---

## 環境需求

- **Node.js** >= 20
- **npm** >= 10

---

## 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
# http://localhost:3000
```

### 型別檢查

```bash
npx nuxi typecheck
```

### 建置正式版

```bash
npm run build
```

### 預覽正式版

```bash
npm run preview
```

---

## 開發規範

- 樣式統一寫在各元件 `<style>` 區塊，**禁止**在 `/assets/scss/` 新增獨立樣式檔
- UI 元件優先使用 Vuetify，減少自訂基礎元件
- 邏輯僅在單一頁面使用時，直接寫在 `.vue` 檔案中，不抽 composable
- API 呼叫統一走 `apis/index.ts`，不在元件直接使用裸 `fetch`
- 導頁一律使用 `NuxtLink` 或 `navigateTo`
