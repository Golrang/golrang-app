import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { QueryContext, QueryProvider } from "./QueryProvider";
import { useQuery } from "./use-query";
import { useQueryClient } from "./use-query-client";

export const App = () => {
  return (
    <QueryProvider>
      <Child />
      <Child2 />
    </QueryProvider>
  );
};

const Child = () => {
  const { data, isLoading, error } = useQuery("first", () =>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => res)
  );

  return <div>test</div>;
};

const Child2 = () => {
  const client = useQueryClient();
  const data = client.getQueryData("first");

  return (
    <div>
      <button onClick={() => client.invalidateQuery("first")}>Refetch</button>
    </div>
  );
};
