export default function HamburgerButton({ isHamburgerOpen, handleHamburgerClick }) {

  return (
    <button 
    className={`block absolute right-4 ${isHamburgerOpen && ' hamburger-active'} lg:hidden`}
    type="button"
    onClick={() => handleHamburgerClick(false)}
    >
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
    </button>
  );
}