import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data , setData] = useState({})
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency} `)
        .then((res) => res.json())
        .then(res => setData(res[currency]))
        console.table(data)


    } , [currency])
    return data

}
export default useCurrencyInfo