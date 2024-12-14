import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const exchangeRates = {
    USD: 1,        // United States Dollar
    EUR: 0.91,     // Euro
    GBP: 0.79,     // British Pound
    INR: 83.00,    // Indian Rupee
    AUD: 1.55,     // Australian Dollar
    CAD: 1.36,     // Canadian Dollar
    JPY: 146.15,   // Japanese Yen
    CNY: 7.23,     // Chinese Yuan
    CHF: 0.89,     // Swiss Franc
    RUB: 94.50,    // Russian Ruble
    ZAR: 18.70,    // South African Rand
    SGD: 1.37,     // Singapore Dollar
    NZD: 1.70,     // New Zealand Dollar
    BRL: 4.95,     // Brazilian Real
    MXN: 17.00,    // Mexican Peso
  };

  const handleConvert = () => {
    const baseRate = exchangeRates[baseCurrency];
    const targetRate = exchangeRates[targetCurrency];
    const conversionResult = (amount / baseRate) * targetRate;
    setResult(conversionResult.toFixed(2));
  };

  return (
    <div className="App">
      <h3 className="title">JAZZ CURRENCY CONVERTER
      </h3>
      <div className="converter-container">
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>From:</label>
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>To:</label>
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button className="convert-button" onClick={handleConvert}>
          Convert
        </button>
        {result && (
          <div className="result">
            <p>
              {amount} {baseCurrency} = {result} {targetCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;