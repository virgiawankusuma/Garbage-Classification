import { featured } from '../../data/homeData';
import FeaturedBody from './FeaturedBody';

export default function Featured() {
  return (
    <section id="featured" className="py-20 border-b-2 border-primary/50"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-2xl text-dark font-bold text-center w-full mb-6 md:text-3xl lg:text-5xl">
            {featured.title}
          </h2>
          <p className="w-full text-dark font-medium text-center mb-10 lg:leading-relaxed lg:w-2/3 lg:text-lg">
            {featured.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-y-10 lg:gap-y-2">
          {
            featured.features.map((feature, index) => (
              <FeaturedBody key={index} feature={feature} />
            ))
          }
        </div>
      </div>
    </section>
  );
}