import './ImageCarousel.css';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageCarousel({ slides }) {
  const [curr, setCurr] = useState(0);

  // for laptop and other larger screen size
  const [activeImg, setactiveImg] = useState(0);

  function handleImgToggle(index) {
    setactiveImg(index);
  }

  const prev = () => {
    setCurr((curr) => (curr === 0 ? 0 : curr - 1));
  };

  function next() {
    setCurr((curr) =>
      curr === slides.length - 1 ? slides.length - 1 : curr + 1
    );
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="lg:min-h-full relative lg:flex">
      <div
        className="carousel overflow-x-hidden relative w-full  lg:max-h-screen lg:mb-[4rem]"
        {...handlers}
      >
        <div
          className="flex transition-transform ease-out duration-1000  lg:w-[40rem] lg:h-[50rem] xl:w-[50rem]"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="lg:hidden display">
            {slides.map((s, index) => (
              <img
                src={s}
                key={index}
                alt={`Product-${index}`}
                className="lg:h-full lg:rounded-3xl max-h-full min-h-full transition ease-in-out duration-500"
              />
            ))}
          </div>
          <img
            src={slides[activeImg]}
            alt={`Product-${activeImg}`}
            className="lg:h-full lg:rounded-3xl max-h-full min-h-full "
          />
          <div></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4 lg:hidden">
          <button
            onClick={prev}
            className="rounded-full px-4 py-3  shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="rounded-full px-4 py-3  shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="products grid grid-cols-4 gap-3xl absolute -bottom-[10rem] right-0 min-w-full xl:mt-10 flex justify-between content-end items-center">
        {slides.map((e, index) => {
          return (
            <img
              src={e}
              alt={`Product ${index}`}
              key={index}
              className={`hidden lg:block rounded-2xl size-[8rem] xl:size-[10rem] self-end cursor-pointer ${activeImg === index ? 'border-[#FF7D1A] border-[.3rem] opacity-50' : ''} transition duration-500 ease-in-out hover:opacity-50`}
              onClick={() => handleImgToggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;
