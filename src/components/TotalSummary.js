// src/components/TotalSummary.js

import React from 'react';

const TotalSummary = ({ generateBill, clearAll }) => {
  return (
    <div className="actions">
      <button>Total</button>
      <button onClick={generateBill}>Generate Bill</button>
      <button onClick={clearAll}>Clear</button>
      <button>Exit</button>
    </div>
  );
};

export default TotalSummary;
