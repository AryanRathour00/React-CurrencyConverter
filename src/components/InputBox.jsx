import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  selectedCurrency,
  onCurrencySelect,
  currencyOptions = [],
  inputDisabled = false
}) => {
 
  return (
    <>
      <div className="col-md-12 bg-white mb-2 rounded">
        <div className="titles w-100 d-flex justify-content-between py-2">
          <span className="text-secondary">{label}</span>
          <span className="text-secondary">Currency Type</span>
        </div>
        <div className="d-flex justify-content-between py-2">
          <input
            type="text"
            className="form-control"
            value={amount}
            onChange={(e) => {
             onAmountChange && onAmountChange(Number(e.target.value));
            }}
            disabled={inputDisabled}
          />
          <select
            className="form-select form-select-sm"
            aria-label="Small select example"
            id="selectCurrency1"
            value={selectedCurrency}
            onChange={(e) => {
            onCurrencySelect &&  onCurrencySelect(e.target.value);
            }}
          >
            {currencyOptions.map((element, index)=>(
              <option value={element} key={index}>{element}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
