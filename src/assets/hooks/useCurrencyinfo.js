
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                setData(res[currency.toLowerCase()]);
                console.log(res[currency.toLowerCase()]);
            })
            .catch((error) => console.error("API Error:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
