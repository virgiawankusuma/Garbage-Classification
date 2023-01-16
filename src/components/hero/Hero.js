import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

import { hero } from '../../data/homeData.js';

export default function Hero() {
  return (
    <section id="hero" className="pt-10">
      <div className="container">
        <div className="flex flex-wrap">
          <HeroLeft heroData={hero}/>
          <HeroRight heroData={hero} />
        </div>
      </div>
    </section>
  );
}
