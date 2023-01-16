import { about } from '../../data/homeData';

export default function About() {
  return (
    <section id="about" className="pt-36">
    <div className="container">
      <div className="flex flex-wrap justify-center">
        <h2 className="text-2xl text-dark font-bold text-center w-full mb-10 md:text-3xl lg:text-5xl">
          {about.title}
        </h2>
        <img
          src={about.image}
          alt="about illustration"
          className="w-full lg:w-3/4"
        />
        <p className="w-full text-dark font-medium text-center mb-10 lg:leading-relaxed lg:w-3/4 lg:text-xl">
          {about.desc}
        </p>
      </div>
    </div>
  </section>
  );
}