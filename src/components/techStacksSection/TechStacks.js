import { techStack } from '../../data/acknowledgmentData';
import Tech from './Tech';

export default function TechStacks() {
  return(
    <section id="techStacks" className="py-20 border-b-2 border-primary/50">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-2xl text-dark font-bold text-center w-full mb-6 md:text-3xl lg:text-5xl">
            {techStack.title}
          </h2>
          <p className="w-full text-dark font-medium text-center mb-10 lg:leading-relaxed lg:w-2/3 lg:text-lg">
            {techStack.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-x-4 gap-y-5  md:gap-6 lg:gap-10">
          {
            techStack.techs.map((tech, index) => (
              <Tech key={index} tech={tech} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
