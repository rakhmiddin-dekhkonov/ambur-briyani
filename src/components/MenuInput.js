// src/components/MenuInput.js

import React from 'react';
import menuItems from '../data/menuItems';

const MenuInput = ({ quantities, handleQuantityChange }) => {
  const leftItems = menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const rightItems = menuItems.slice(Math.ceil(menuItems.length / 2));

  return (
    <div className="menu-wrapper">
      <div className="menu-inputs">
        <div className="menu-column">
          {leftItems.map((item) => (
            <div key={item.name} className="menu-item">
              <label>{item.name} - Rs.{item.price}</label>
              <input
                type="number"
                min="0"
                value={quantities[item.name] || 0}
                onChange={(e) => handleQuantityChange(item.name, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="menu-column">
          {rightItems.map((item) => (
            <div key={item.name} className="menu-item">
              <label>{item.name} - Rs.{item.price}</label>
              <input
                type="number"
                min="0"
                value={quantities[item.name] || 0}
                onChange={(e) => handleQuantityChange(item.name, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuInput;
