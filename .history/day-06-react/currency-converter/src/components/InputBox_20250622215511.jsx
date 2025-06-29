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

}) {
  return (
    <div className=`` bg-white p-3 rounded-lg text-sm'>
      <div className=' w-1/2'>
      <label className='text-black/40 mb-2 inline-block'></label>

      </div>
    </div>
  );
}

export default InputBox;
