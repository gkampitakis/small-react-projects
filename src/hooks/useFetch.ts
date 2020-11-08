import { useEffect, useState, useCallback } from 'react';

function useFetch<T> (url: string): [T | undefined, boolean, () => void, Error | null] {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);

  const retrieveData = useCallback(() => {
    setLoading(true);

    fetch(url)
      .then(d => d.json())
      .then(d => setData(d))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [url]);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  return [data, loading, retrieveData, error];
}

export { useFetch };