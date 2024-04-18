import Cart from './Cart';

function Main({ children }) {
  // Collections Men Women About Contact
  return (
    <main className="px-[3rem] mt-8 w-full lg:px-0">
      <h1
        className="font-bold uppercase mb-7 tracking-widest text-2xl xl:text-3xl"
        style={{ color: 'hsl(26, 100%, 55%)' }}
      >
        Sneaker Company
      </h1>
      <div className="text-[hsl(220,13%,13%)] text-[3rem] font-bold xl:text-[4.5rem]">
        Fall Limited Edition Sneakers
      </div>

      <p className="mt-5 text-[1.6rem] text-[hsl(220,14%,75%)] leading-10 lg:text-[1.8rem] lg:leading-[4rem] xl:text-[2.2rem]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      {children}
      {/* <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default Main;
