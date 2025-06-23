import React from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className=' bg-white p-3 rounded-lg text-sm'>
      <div className=' w-1/2'>
      <label htmlFor=""></label>

      </div>
    </div>
  );
}

export default InputBox;
