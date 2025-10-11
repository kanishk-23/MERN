import React, { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, SetData] = useState(null);
  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network error occured! Try later");
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          SetData(data);
          SetError(null);
          SetLoading(false);
        }, 1000);
        console.log(data);
      })
      .catch((err) => {
        SetError(err);
        SetLoading(false);
      });
  }, [url]);

  return { error, data, loading };
};

export default useFetch;
