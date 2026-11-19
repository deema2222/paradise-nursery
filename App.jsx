import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>Bring Nature Into Your Home</p>

        <button
          onClick={() => window.location.href = '/ProductList'}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
