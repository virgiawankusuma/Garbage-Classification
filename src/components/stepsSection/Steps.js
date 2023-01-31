import { steps } from '../../data/homeData';
import StepBody from './StepBody';

export default function Steps() {
  return (
    <section id="steps" className="py-20 border-b-2 border-primary/50">
      <div className="container">
        <h2 className="text-2xl text-dark font-bold text-center w-full mb-8 md:mb-16 md:text-3xl lg:text-5xl">
          {steps.title}
        </h2>
        <div
          className="flex flex-wrap gap-y-12 lg:gap-y-2"
        >
          {
            steps.stepsBody.map((step, index) => (
              <StepBody step={step} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  );
}