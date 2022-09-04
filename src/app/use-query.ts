import { useContext, useEffect } from "react";
import { QueryContext } from "./QueryProvider";

export const useQuery = (
  key: string,
  queryFn: () => Promise<any>,
  options?: any
) => {
  const { cache, setCache } = useContext(QueryContext);

  const onDataSet = (data: any) => {
    const cahceExisted = cache.find((c) => c.key === key);
    const cacheSlice = {
      key,
      data,
      isLoading: false,
      error: undefined,
      refetch: () => queryFn().then(onDataSet),
    };

    if (cahceExisted) {
      setCache((prev) =>
        prev.map((cache) => (cache.key === key ? cacheSlice : cache))
      );
    }
    setCache((prev) => [...prev, cacheSlice]);
  };

  const fetcher = () => queryFn().then(onDataSet);

  useEffect(() => {
    const controller = new AbortController();
    fetcher();
    return () => {
      controller?.abort();
    };
  }, [key]);

  const state = cache.find((c) => c.key === key);

  return {
    ...state,
  };
};
