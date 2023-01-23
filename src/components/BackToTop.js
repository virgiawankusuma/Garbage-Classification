import { Link } from 'react-scroll';

export default function BackToTop() {
  const backToTop = document.querySelector('#backToTop');
  // make backToTopRef hidden only when user window.pageYOffset > 80
  window.onscroll = () => {
    if (window.pageYOffset > 80) {
      backToTop.classList.remove('hidden');
    } else {
      backToTop.classList.add('hidden');
    }
  }

  return (
    <Link
      to="content"
      id="backToTop"
      spy
      smooth
      className="fixed hidden z-50 cursor-pointer justify-center items-center bottom-4 p-4 right-4 h-11 w-11 bg-primary rounded-full shadow shadow-dark/50 hover:shadow-lg hover:shadow-dark/30 hover:opacity-90 transition-all duration-200 ease-in-out"
      title="Tombol Kembali Ke Atas"
      aria-label="Tombol Kembali Ke Atas"
    >
      <span className="block h-3 w-3 rotate-45 border-t-2 border-l-2 mt-1" />
    </Link>
  );
}