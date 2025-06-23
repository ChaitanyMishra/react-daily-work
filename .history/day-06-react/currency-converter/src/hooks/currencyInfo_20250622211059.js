import { useEffect } from "react";

const useCurrencyInfo = (currency) => {
    constdata
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency} `)
        .then((res) => res.json())
        .then(res)


    } , [fromCurrencyInput])

}