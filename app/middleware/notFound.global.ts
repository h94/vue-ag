// app/middleware/notFound.global.ts

export default defineNuxtRouteMiddleware((to) => {
  // 若路由沒有匹配到任何現有的頁面（to.matched 為空）
  if (!to.matched || to.matched.length === 0) {
    return navigateTo('/', { replace: true })
  }
})
