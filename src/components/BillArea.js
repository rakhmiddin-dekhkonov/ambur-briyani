// src/components/BillArea.js

import React from 'react';

const BillArea = ({ billText }) => {
  return (
    <textarea
      className="bill-area"
      rows="15"
      value={billText}
      readOnly
    />
  );
};

export default BillArea;
