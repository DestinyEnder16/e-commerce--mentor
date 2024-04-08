import { useEffect, useState } from 'react';
import image1 from '../images/image-product-1.jpg';

function BasketState({ totalItem, setTotalItem }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);

    return () => setIsActive(false);
  }, []);

  return (
    <div
      className={`shadow shadow-xl w-[95%]  absolute bg-white rounded-xl left-[1rem] -bottom-[480%] flex flex-col justify-between min-h-full transition-all ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none invisible '} duration-700`}
    >
      <div className="py-9 pl-10 border-b-2">
        <h1 className="text-3xl font-bold text-[#1D2025]">Cart</h1>
      </div>

      <div className="flex items-center flex-col   justify-center h-[250px] relative px-8">
        {totalItem === 0 ? (
          <p className="text-center text-2xl font-bold text-[#B6BCC8]">
            Your cart is empty.
          </p>
        ) : (
          <div className="w-full left-8 grid grid-rows-2 gap-7">
            <div className="flex gap-5">
              <div>
                <img
                  src={image1}
                  alt="Product 1"
                  className=" w-[6rem] h-20 rounded-md"
                />
              </div>

              <div className="text-2xl grid grid-rows-2 gap-2 text-[#B6BCC8] justify-left ml-5">
                <p className="text-[1.5rem]">Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {totalItem}
                  <b className="text-black ml-4">${+totalItem * 125}.00</b>
                </p>
              </div>

              <span className="cursor-pointer ml-3">
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  onClick={() => setTotalItem(0)}
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </span>
            </div>

            <button className="bg-[#FF7E1B] w-full h-min py-6 rounded-3xl text-2xl font-bold text-white sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasketState;
