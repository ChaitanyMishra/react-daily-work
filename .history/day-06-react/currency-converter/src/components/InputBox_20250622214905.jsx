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
    <div className={`flex items-center gap-4 bg-slate-700 p-4 rounded-lg ${className}`}>
      {/* Amount Input */}
      <div className="flex-1">
        <label className="block text-white mb-1">{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white outline-none"
        />
      </div>

      {/* Currency Dropdown */}
      <div>
        <label className="block text-white mb-1">Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="px-3 py-2 rounded bg-slate-800 text-white outline-none"
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
