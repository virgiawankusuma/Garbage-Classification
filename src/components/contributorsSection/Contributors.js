import { contributors } from '../../data/acknowledgmentData';
import Developer from './Developer';

export default function Contributors(){
  return (
    <section 
      id="contributors" 
      className="pt-36"
      tabIndex="3"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center px-4">
          <h2 className="text-2xl text-dark font-bold text-center w-full mb-8 md:mb-12 md:text-3xl lg:text-5xl">
            {contributors.title}
          </h2>
          <div className="flex flex-wrap mt-24 justify-center gap-y-28 lg:justify-between md:gap-x-6 lg:gap-x-12">
            {
              contributors.developers.map((developer, index) => (
                <Developer developer={developer} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}