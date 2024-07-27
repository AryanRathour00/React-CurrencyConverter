import {useState, useEffect} from 'react';

function useCurrencyValue(currency){
      const [data, setData] = useState({})
      let url = `https://v6.exchangerate-api.com/v6/4434297f60f4c9fb95561a61/latest/${currency}`;
      useEffect(()=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function(){
                  let currencyValue = JSON.parse(this.responseText);
                  setData({...currencyValue["conversion_rates"]})
            }
            xhr.send();
      },[currency])
      return data;
}
export default useCurrencyValue