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
      <div>
        
      </div>
    </div>
  );
}

export default InputBox;
