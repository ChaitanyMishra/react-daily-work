import React, { useId } from 'react';

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
  const labelId = useId();

  return (
    <div className={`bg-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
      {/* Label and Input */}
      <div className='w-full sm:w-1/2'>
        {label && (
          <label htmlFor={labelId} className='text-black/60 mb-2 inline-block'>
            {label}
          </label>
        )}
        <input
          id={labelId}
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
          className=' px-3 py-1.5 rounded-lg w-full outline-none text-black border border-gray-300'
          placeholder='Amount'
        />
      </div>

      {/* Currency Dropdown */}
      <div className='w-full sm:w-1/3'>
        <label className='text-black/60 mb-2 inline-block'>Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className='bg-gray-100 px-3 py-2 rounded-lg w-full outline-none text-black'
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
