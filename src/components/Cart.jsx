/* eslint-disable react/no-unknown-property */
// $125.00 50% $250.00 0 Add to cart

import { useState } from 'react';

function Details() {
  return (
    <>
      <div className="flex w-full justify-between items-baseline lg:flex-col">
        <div className="flex justify-between gap-7 items-center">
          <span className="font-bold text-[3rem]">$125.00</span>
          <div className="text-2xl text-[hsl(26,100%,55%)] font-bold bg-[#FFEDE0] p-2 rounded">
            50%
          </div>
        </div>

        <span className="text-gray-500 line-through text-2xl lg:mt-4">
          $250.00
        </span>
      </div>
    </>
  );
}

function Counter({ value, setValue }) {
  const reduce = function () {
    setValue((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const increase = function () {
    setValue((prev) => (prev === 3 ? 3 : prev + 1));
  };

  return (
    <div className="flex justify-between items-center mt-7 h-[2rem] bg-[#F7F8FD] px-5 rounded py-10">
      <span className="hover: cursor-pointer" onClick={reduce}>
        <svg
          width="12"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
        </svg>
      </span>

      <span className="font-bold text-2xl select-none xl:text-3xl">
        {value}
      </span>

      <span className="hover: cursor-pointer" onClick={increase}>
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
        </svg>
      </span>
    </div>
  );
}

function Cart({ totalItem, setTotalItem }) {
  const [value, setValue] = useState(totalItem);
  return (
    <div className="mt-10">
      <Details />

      <div className="lg:grid-cols-2 grid lg:gap-7">
        <Counter value={value} setValue={setValue} />
        <div
          className="bg-[#FF7E1B] w-full text-center py-8 rounded-xl mt-5 cursor-pointer hover:opacity-75 transition-all ease-in-out"
          onClick={() => {
            setTotalItem(value);
          }}
        >
          <p className="font-bold text-2xl text-white flex items-center justify-center">
            <span className="mr-5">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
            </span>
            <span className="select-none xl:text-3xl">Add to cart</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
