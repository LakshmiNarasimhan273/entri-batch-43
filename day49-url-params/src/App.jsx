import React from 'react'
import Navbar from "./components/Navbar";

import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>

      {/* :id - : dynamic value | id - parameter variable name */}

    </div>
  )
}

export default App