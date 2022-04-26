import React from 'react';
import Navbar from './components/navbar/Navbar';
import ProductContainer from './components/productContainer/ProductContainer';

function App() {
  return (
    <div className='font-main bg-white lg:mx-[10%]'>
      <Navbar />
      <ProductContainer />
    </div>
  );
}

export default App;
