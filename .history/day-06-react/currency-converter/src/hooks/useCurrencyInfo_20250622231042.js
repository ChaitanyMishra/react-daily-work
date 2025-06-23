import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]); // ✅ Correct usage
        console.log("Fetched currency data:", res[currency]); // ✅ Debug log
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
