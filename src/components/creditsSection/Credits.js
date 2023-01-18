import { credits } from '../../data/acknowledgmentData';
import Resources from './Resources';

export default function Credits() {
  return (
    <section id="credits" className="py-36">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-2xl text-dark font-bold text-center w-full mb-6 md:text-3xl lg:text-5xl">
            {credits.title}
          </h2>
          <p className="w-full text-dark font-medium text-center mb-10 lg:leading-relaxed lg:w-2/3 lg:text-lg">
            {credits.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-4 md:gap-10">
          {
            credits.resources.map((resource, index) => (
              <Resources key={index} resource={resource} />
            ))
          }
        </div>
      </div>
    </section>
  );
}