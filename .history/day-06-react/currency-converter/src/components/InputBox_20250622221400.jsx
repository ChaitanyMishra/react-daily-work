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
    <div className={`bg-white p-4 rounded-xl flex items-center justify-between ${className}`}>
      {/* Label and Input */}
      <div className='w-1/2'>
        {label && <label className='text-black/60 mb-2 inline-block'>{label}</label>}
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
          className='bg-transparent px-3 py-1.5 rounded-lg w-full outline-none text-black'
          placeholder='Ammount'
        />
      </div>

      {/* Currency Dropdown */}
      <div className='w-1/3'>
        <label className='text-black/60 mb-2 inline-block'>Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className='bg-gray-100 px-3 py-2 rounded-lg w-full outline-none text-black'
        >
          {
            onCurrencyChange.map(currency) => ({
              <option value="{"></option>
            })
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
