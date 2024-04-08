import { Fragment, useState } from 'react';
import NavBar from './components/NavBar';
import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';
import image5 from './images/image-product-5.jpg';

import './App.css';
import ImageCarousel from './components/ImageCarousel';
import Main from './components/Main';
import Cart from './components/Cart';

const slides = [image1, image2, image3, image4, './images/image-product-5.jpg'];

function App() {
  const [totalItem, setTotalItem] = useState(0);
  return (
    <Fragment>
      <NavBar totalItem={totalItem} />
      <div className="">
        <ImageCarousel slides={slides} />
      </div>
      <Main>
        <Cart totalItem={totalItem} setTotalItem={setTotalItem} />
      </Main>
    </Fragment>
  );
}

export default App;
