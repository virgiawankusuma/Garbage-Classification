export default function HamburgerButton({ isHamburgerOpen, handleHamburgerClick }) {

  return (
    <button 
    className={`block absolute right-4 min-h-[44px] min-w-[44px]${isHamburgerOpen && ' hamburger-active'} lg:hidden`}
    type="button"
    title="Tombol menu"
    aria-label="Tombol menu"
    onClick={() => handleHamburgerClick(false)}
    >
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
    </button>
  );
}