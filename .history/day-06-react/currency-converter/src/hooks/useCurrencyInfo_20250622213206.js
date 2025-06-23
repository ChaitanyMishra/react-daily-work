import { useState } from "react";
import { useEffect } from "react";

const uCurrencyInfo = (currency) => {
    const [data , setData] = useState({})
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency} `)
        .then((res) => res.json())
        .then(res =>{
            console.table(data)
            setData[res[currency]]
        }).catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setData({});
      });
        


    } , [currency])
    return data

}
export default UseCurrencyInfo