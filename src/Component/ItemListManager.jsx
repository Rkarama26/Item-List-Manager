import React, { useState } from 'react';
import './ItemListManager.css';

function ItemManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue.trim()]);
    setInputValue('');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Item List Manager</h1>
      </header>
      <main className="main">
        <h2>Item List</h2>
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Render each item as an <li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ItemManager;