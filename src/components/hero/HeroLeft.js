import { Link } from 'react-router-dom';

export default function HeroLeft({ hero }) {
  return (
    <>
      <div className="w-full self-center px-4 lg:pl-4 lg:pr-8 lg:w-1/2">
        <h1 className="font-bold text-primary text-4xl mb-4 lg:text-6xl">
          {hero.title}
        </h1>
        <h2 className="font-semibold text-dark text-xl mb-3 lg:text-3xl">
          {hero.subtitle}
        </h2>
        <p className="font-medium text-dark text-base mb-10 leading-relaxed lg:text-lg">
          {hero.desc}
        </p>
        <Link 
          to="/klasifikasikan" 
          className="text-white text-xl font-medium bg-primary rounded px-7 py-3 hover:shadow-xl hover:opacity-80 transition duration-300 ease-out"
          title="Tombol mulai klasifikasi"
          aria-label="Tombol mulai klasifikasi"
        >
          {hero.cta}
        </Link>
      </div>
    </>
  );
}
