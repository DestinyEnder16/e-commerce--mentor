import { useEffect, useState } from 'react';

function SideBar({ handleSideToggle }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(function () {
    setIsActive(true);

    return () => setIsActive(false);
  }, []);

  return (
    <aside
      className={`px-10 py-10 bg-white  fixed  left-0 top-0 z-50 h-dvh ${isActive ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in flex flex-col gap-20 shadow-md`}
      style={{ width: '60vw' }}
    >
      <div className="cursor-pointer">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            handleSideToggle();
          }}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </div>

      <ul className="text-[#1D2025] text-[1.7rem] font-bold flex flex-col gap-10">
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
