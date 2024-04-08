import './ImageCarousel.css';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageCarousel({ slides }) {
  const [curr, setCurr] = useState(0);

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
    <div className="carousel overflow-hidden relative w-full" {...handlers}>
      <div
        className="flex transition-transform ease-out duration-1000 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img src={s} key={index} alt={`Product-${index}`} />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
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
  );
}

export default ImageCarousel;
