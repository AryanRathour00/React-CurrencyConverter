import {useState, useEffect} from 'react';

function useCurrencySelect(currency){
      let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_p5ShIP4QNBmwDRlssYKTEX2QuwssAAxxJthCmKwe`;
      const [data, setData] = useState({});
      useEffect(()=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function(){
                  let currency = JSON.parse(this.responseText);
                  setData({...currency["data"]})
            }
            xhr.send();
      },[currency])

      return data;
}

export default useCurrencySelect