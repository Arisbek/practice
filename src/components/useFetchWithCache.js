import { useState, useEffect, useRef } from 'react';

const cache = {};

function useFetchWithCache(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cacheRef = useRef(cache);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (cacheRef.current[url]) {
        setData(cacheRef.current[url]);
        setLoading(false);
      } else {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          cacheRef.current[url] = result;
          setData(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchWithCache;