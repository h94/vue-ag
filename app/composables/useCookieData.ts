// app/composables/useCookieData.ts

/**
 * 適合放在 composables/ 的真實範例：useCookieData
 * 職責：讀寫 Cookie 的門面工具箱，整合了 SSR / Client 響應式同步與 Side Effect 處理
 */
export const useCookieData = <T = string>(key: string, defaultValue: T) => {
  // 1. 使用 Nuxt3 的 useCookie 建立響應式 Cookie 綁定
  const cookie = useCookie<T>(key, {
    default: () => defaultValue,
    maxAge: 60 * 60 * 24 * 7 // 7 天過期
  })

  // 2. 封裝設定方法 (Setter)
  const setCookie = (newValue: T) => {
    cookie.value = newValue
  }

  // 3. 封裝清空方法 (Clear)
  const clearCookie = () => {
    cookie.value = defaultValue
  }

  // 4. 對外回傳工具箱一組 State + Methods
  return {
    cookie,
    setCookie,
    clearCookie
  }
}
