//CUSTOM HOOK

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  //create fun and pass currency
  const [data, setData] = useState({
    /*initial state*/
  }); //use useState hook and assign [state,setState]

  useEffect(() => {
    //useefect for value change then useEffect to run again
    fetch(
      /*fech api url */ `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())//return response as json file
      .then((res) => setData(res[currency]));//return response and assign to setData res[currency]
    console.log(data);
  }, [currency]);//dependency array
  return data;// return to fun useCurrencyInfo
}
export default useCurrencyInfo;//export to use in app.jsx 
