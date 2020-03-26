import { useState, useEffect } from "react";

const useFetch = endpoint => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setResponse(null);
    setError(null);

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setResponse(res);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  }, []);
  return [response, loading, error];
};

export default useFetch;
