import { hero } from '../../data/acknowledgmentData';

export default function Hero() {
  return (
    <section id="hero-acknowledgment" className="pt-4 pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center text-center px-4 lg:px-12">
          <img
            src={hero.image}
            alt="hero acknowledgment illustration"
            className="w-full mb-2 lg:w-3/4"
          />
          <h1 className="font-bold text-dark text-4xl mb-3 lg:mb-5 lg:text-6xl">
            {hero.title}
          </h1>
          <h2 className="font-semibold text-dark text-xl mb-3 lg:text-3xl">
            {hero.subtitle}
        </h2>
        </div>
      </div>
    </section>
  );
}