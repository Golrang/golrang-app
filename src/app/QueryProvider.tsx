import { createContext, ReactNode, useState } from "react";

type TQueryContext = {
  cache: TCache[];
  setCache: React.Dispatch<React.SetStateAction<TCache[]>>;
  invalidateQuery: (key: string) => void;
  getQueryData: (key: string) => TCache["data"] | undefined;
};

export const QueryContext = createContext({} as TQueryContext);

type TCache = {
  key: string;
  data?: any;
  isLoading: boolean;
  error?: any;
  refetch?: any;
};

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [cache, setCache] = useState<TCache[]>([]);

  const invalidateQuery = (key: string) => {
    const state = cache.find((c) => c.key === key);
    if (state) {
      state?.refetch();
    }
    return;
  };

  const getQueryData = (key: string) => {
    const state = cache.find((c) => c.key === key);
    if (state) return state.data;
    return undefined;
  };

  return (
    <QueryContext.Provider
      value={{ cache, setCache, invalidateQuery, getQueryData }}
    >
      {children}
    </QueryContext.Provider>
  );
};
