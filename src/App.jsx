import { useState } from 'react';
import NavBar from './components/NavBar';
import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';

import './App.css';
import ImageCarousel from './components/ImageCarousel';
import Main from './components/Main';
import Cart from './components/Cart';

const slides = [image1, image2, image3, image4];

function App() {
  const [totalItem, setTotalItem] = useState(0);
  return (
    <div className="h-screen">
      <NavBar totalItem={totalItem} setTotalItem={setTotalItem} />

      <div className="lg:grid-cols-2  gap-4 sm: grid grid-cols-1 lg:mt-[7rem] lg:px-[10rem] lg:gap-[7rem] xl:gap-[12rem]">
        <div className="justify-self-end">
          <ImageCarousel slides={slides} />
        </div>
        <Main>
          <Cart totalItem={totalItem} setTotalItem={setTotalItem} />
        </Main>
      </div>
    </div>
  );
}

export default App;
