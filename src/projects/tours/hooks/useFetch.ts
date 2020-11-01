import { useEffect, useState } from 'react';

function useFetch (url: string): [unknown | undefined, boolean, Error | null] {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then(d => d.json())
      .then(d => setData(d))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [url]);

  return [data, loading, error];
}

export { useFetch };