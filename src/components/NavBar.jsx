import { useState } from 'react';
import BasketState from './BasketState';
import SideBar from './SideBar';

function NavBar({ totalItem }) {
  const [showBasket, setShowBasket] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleToggle = function () {
    setShowBasket((prev) => !prev);
  };

  const handleSideToggle = function () {
    setShowNav((prev) => !prev);
    setTimeout(() => {
      console.log('BYE');
    }, 1000);
  };

  return (
    <>
      <nav className="w-full flex flex-row justify-between py-5 px-8 shadow-lg sticky top-0 z-40 bg-[#fff] relative">
        <div className="flex items-baseline">
          <span className="mr-6 cursor-pointer" onClick={handleSideToggle}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                //   fill-rule="evenodd"
              />
            </svg>
          </span>

          <span className="text-[3rem] font-bold text-[#1D2025]">sneakers</span>
        </div>

        <div className="flex items-center">
          <span className="mr-6 relative cursor-pointer" onClick={handleToggle}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>

            <span
              //   IMPORTANT: logically setting the background color based on the number of total items.
              className={`absolute -right-1 -top-4 ${totalItem > 0 ? 'bg-[#FF7E1B]' : ''} rounded-[50%] py-[0.5px] px-2 text-white select-none`}
            >
              {totalItem === 0 ? null : totalItem}
            </span>
          </span>

          <span>
            <img
              src="../src/images/image-avatar.png"
              alt="User profile"
              className="size-[25px]"
            />
          </span>
        </div>

        {showBasket ? <BasketState totalItem={totalItem} /> : ''}
      </nav>

      {showNav ? <SideBar handleSideToggle={handleSideToggle} /> : ''}
    </>
  );
}

export default NavBar;
