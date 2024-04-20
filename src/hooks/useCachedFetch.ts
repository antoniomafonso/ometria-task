import { useEffect, useState } from "react";
import { Data } from "./useCachedFetch.types";

export const MAIN_ENDPOINT = "https://swapi.dev/api";

const cache = new Map<string, Promise<unknown>>();

async function get(url: string, init?: RequestInit) {
  const response = await fetch(url, init);

  if (!response.ok) throw new Error("Error");

  const json = await response.json();

  return json;
}

export function useCachedFetch<CachedFetchData>(url: string) {
  const [data, setData] = useState<Data>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      const cachedPromise = cache.get(url) as Promise<Data> | undefined;

      if (cachedPromise) {
        cachedPromise
          .then(setData)
          .catch(() => setError(true))
          .finally(() => setLoading(false));
        return;
      }

      const freshPromise = get(url);

      setLoading(true);
      freshPromise
        .then((data) => {
          cache.set(url, freshPromise);
          setData(data);
        })
        .catch(() => {
          cache.delete(url);
          setError(true);
        })
        .finally(() => setLoading(false));
    }

    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  } as CachedFetchData;
}
