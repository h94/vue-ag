import { defineStore } from "pinia";

export const SystemStore = defineStore("system", {
  state: () => ({
    loading: false,
  }),
  actions: {
    GetLoading() {
      return this.loading;
    },
    SetLoading(value: boolean) {
      this.loading = value;
    },
  },
});