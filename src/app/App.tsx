import React, { Suspense, useState } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import StockTicker from './components/stockTicker/StockTicker';
import Home from './pages/Home/Home';


function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <StockTicker />
        <Header />
        <Navbar />
        <Home />
      </Suspense> 
    </div>
  )
}

export default App
