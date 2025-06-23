import { useState , useEffect } from "react";

const useCurrencyInfo = (currency) => {

    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency} `)
    } , [fromCurrencyInput])

}