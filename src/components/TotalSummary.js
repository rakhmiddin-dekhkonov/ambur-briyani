// src/components/TotalSummary.js

import React from 'react';

const TotalSummary = ({ generateBill, clearAll }) => {
  return (
    <div className="actions">
      <button onClick={generateBill}>Generate Bill</button>
      <button onClick={clearAll}>Clear</button>
    </div>
  );
};

export default TotalSummary;
