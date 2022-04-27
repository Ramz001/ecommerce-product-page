import React from 'react';
import Navbar from './components/navbar/Navbar';
import ProductContainer from './components/productContainer/ProductContainer';

function App() {
  return (
    <div className='font-main bg-white mx-0 md:mx-[3%] lg:mx-[5%] xl:mx-[10%] '>
      <Navbar />
      <ProductContainer />
    </div>
  );
}

export default App;
