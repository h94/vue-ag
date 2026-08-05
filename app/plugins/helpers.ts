import dayjs from 'dayjs'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      /**
       * 格式化日期時間
       * @param date 日期字串、Date 物件或時間戳記
       * @param format 格式 (預設: 'YYYY-MM-DD HH:mm')
       */
      formatDate: (date: string | Date | number | null | undefined, format: string = 'YYYY-MM-DD HH:mm') => {
        if (!date) return '-'
        const d = dayjs(date)
        return d.isValid() ? d.format(format) : '-'
      },

      /**
       * 格式化數字為千分位格式
       * @param value 數字或數字字串
       * @param decimals 保留小數位數 (預設: 0)
       */
      formatNumber: (value: number | string | null | undefined, decimals: number = 0) => {
        if (value === null || value === undefined || value === '') return '-'
        const num = Number(value)
        if (isNaN(num)) return '-'
        return num.toLocaleString('zh-TW', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        })
      }
    }
  }
})
