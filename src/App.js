// src/App.js

import React, { useState } from 'react';
import CustomerDetails from './components/CustomerDetails';
import MenuInput from './components/MenuInput';
import BillArea from './components/BillArea';
import TotalSummary from './components/TotalSummary';
import menuItems from './data/menuItems';
import './App.css';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [billNumber, setBillNumber] = useState('5191');
  const [quantities, setQuantities] = useState({});
  const [billText, setBillText] = useState('');

  const handleQuantityChange = (item, value) => {
    setQuantities({ ...quantities, [item]: Number(value) });
  };

  const generateBill = () => {
    let total = 0;
    let billDetails = `Welcome Ambur Briyani\nBill Number: ${billNumber}\nCustomer Name: ${customerName}\nPhone Number: ${phoneNumber}\n=====================================\nProducts\tQTY\tPrice\n`;

    menuItems.forEach((item) => {
      const qty = quantities[item.name] || 0;
      if (qty > 0) {
        const price = qty * item.price;
        total += price;
        billDetails += `${item.name}\t${qty}\t${price}\n`;
      }
    });

    billDetails += "=====================================\n";
    billDetails += `Total: Rs. ${total}`;
    setBillText(billDetails);
  };

  const clearAll = () => {
    setCustomerName('');
    setPhoneNumber('');
    setBillNumber('5191');
    setQuantities({});
    setBillText('');
  };

  return (
    <div className="app-container">
      <h1>Ambur Briyani Billing</h1>

      <CustomerDetails
        customerName={customerName}
        setCustomerName={setCustomerName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        billNumber={billNumber}
        setBillNumber={setBillNumber}
      />

      <div className="main-layout">
        <MenuInput
          quantities={quantities}
          handleQuantityChange={handleQuantityChange}
        />

        <BillArea billText={billText} />
      </div>

      <TotalSummary
        generateBill={generateBill}
        clearAll={clearAll}
      />
    </div>
  );
}

export default App;
