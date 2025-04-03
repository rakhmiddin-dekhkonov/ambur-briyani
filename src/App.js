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
  const [billNumber, setBillNumber] = useState('');
  const [quantities, setQuantities] = useState({});
  const [billText, setBillText] = useState('');

  const handleQuantityChange = (item, value) => {
    setQuantities({ ...quantities, [item]: Number(value) });
  };

  const generateBill = () => {
    const missingFields = [];

    if (!customerName.trim()) missingFields.push("Customer Name");
    if (!phoneNumber.trim()) missingFields.push("Phone Number");
    if (!billNumber.trim()) missingFields.push("Bill Number");

    if (missingFields.length > 0) {
      alert(`Please enter the following:\n- ${missingFields.join("\n- ")}`);
      return;
    }

    let total = 0;
    let billDetails = `Welcome Ambur Briyani\n`;
    billDetails += `Bill Number: ${billNumber}\n`;
    billDetails += `Customer Name: ${customerName}\n`;
    billDetails += `Phone Number: ${phoneNumber}\n`;
    billDetails += `============================================\n`;
    billDetails += `${"Products".padEnd(25)}${"QTY".padEnd(10)}${"Price".padEnd(10)}\n`;
  
    menuItems.forEach((item) => {
      const qty = quantities[item.name] || 0;
      if (qty > 0) {
        const price = qty * item.price;
        total += price;
        billDetails += `${item.name.padEnd(25)}${String(qty).padEnd(10)}${String(price).padEnd(10)}\n`;
      }
    });
  
    billDetails += `============================================\n`;
    billDetails += `Total: Rs. ${total}`;
    setBillText(billDetails);
  };
  

  const saveBill = () => {
    if (!billText) {
      alert("Please generate a bill first.");
      return;
    }
  
    const element = document.createElement("a");
    const file = new Blob([billText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `bill_${billNumber}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
      <div className="frame title-frame">
        <h1>Billing Software</h1>
      </div>

      <div className="frame customer-frame">
        <CustomerDetails
          customerName={customerName}
          setCustomerName={setCustomerName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          billNumber={billNumber}
          setBillNumber={setBillNumber}
        />
      </div>

      <div className="frame menu-bill-frame">
        <div className=" menu-frame main-layout">
          <MenuInput
            quantities={quantities}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
        <div className="bill-frame">
          <BillArea billText={billText} />
        </div>
      </div>

      <TotalSummary
        generateBill={generateBill}
        saveBill={saveBill}
        clearAll={clearAll}
      />
    </div>
  );
}

export default App;
