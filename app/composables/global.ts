
import { SystemStore } from "@/stores/system";

export const useGlobal = () => {
  const store = SystemStore();
  const Loading = computed({
    get: () => store.GetLoading(),
    set: (value: boolean) => store.SetLoading(value),
  });

  return {
    Loading,
  };
};


