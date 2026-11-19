import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>Bring Nature Into Your Home</p>

        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
