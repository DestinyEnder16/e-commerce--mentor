import { Fragment, useState } from 'react';
import NavBar from './components/NavBar';

import './App.css';
import ImageCarousel from './components/ImageCarousel';
import Main from './components/Main';
import Cart from './components/Cart';
import SideBar from './components/SideBar';

const slides = [
  '../src/assets/image-product-1.jpg',
  '../src/images/image-product-2.jpg',
  '../src/images/image-product-3.jpg',
  '../src/images/image-product-4.jpg',
];

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
