import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url : string ) {

  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      })
  },[url]);

  return { data, loading, error };
}

export default useFetch;