import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
        console.log("Fetched currency data:", res[currency]); 
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
