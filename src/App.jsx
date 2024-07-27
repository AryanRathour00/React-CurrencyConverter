import { React, useState, useEffect } from "react";
import InputBox from "./components/InputBox.jsx";
import useCurrencySelect from "./hooks/useCurrencySelect.js";
import useCurrencyValue from "./hooks/useCurrencyValue.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencySelect = useCurrencySelect();
  const currencyValue = useCurrencyValue(from);

  const options = Object.keys(currencySelect);

  const swapbutton = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
 const convertAmount =()=>{
  setConvertedAmount( amount * currencyValue[to])
 }
  return (
    <>
      <section>
        <div className="container-fluid margintopcontainer">
          {/* <div className="spinner-border text-light spinnerpostion d-none" id="spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> */}
          <div className="row">
            <div className="col-md-3 mx-auto padding-col rounded">
              <div className="row">
                <InputBox
                  label="From"
                  selectedCurrency={from}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencySelect={(currency) => setFrom(currency)}
                  onAmountChange={(e)=> setAmount(e)}
                />
                <button
                  className="btn btn-primary swap-btn"
                  onClick={swapbutton}
                >
                  swap
                </button>
                <InputBox
                  label="To"
                  selectedCurrency={to}
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencySelect={(currency) => setTo(currency)}
                  inputDisabled
                />
                <div className="col-md-12 px-1">
                  <div className="d-grid mt-3">
                    <button className="btn btn-primary" type="button" onClick={convertAmount}>
                      Convert {from} to {to}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
