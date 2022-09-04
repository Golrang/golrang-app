import { useContext } from "react";
import { QueryContext } from "./QueryProvider";

export const useQueryClient = () => {
  const { invalidateQuery, getQueryData } = useContext(QueryContext);

  return { invalidateQuery, getQueryData };
};
