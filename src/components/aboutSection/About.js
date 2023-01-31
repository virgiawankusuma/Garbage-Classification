import { about } from '../../data/homeData';

export default function About() {
  return (
    <section id="about" className="py-20 border-b-2 border-t-2 border-primary/50"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-2xl text-dark font-bold text-center w-full mb-6 md:text-3xl lg:text-5xl">
            {about.title}
          </h2>
          <img
            src={about.image}
            alt="about illustration"
            className="w-full lg:w-[75%]"
          />
          <p className="w-full text-dark font-medium text-center mb-10 lg:leading-relaxed lg:w-2/3 lg:text-lg">
            {about.desc}
          </p>
        </div>
      </div>
    </section>
  );
}