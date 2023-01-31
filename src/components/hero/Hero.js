import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

import { hero } from '../../data/homeData.js';

export default function Hero() {
  return (
    <section id="hero" className="pt-10 pb-36"
    >
      <div className="container">
        <div className="flex flex-wrap">
          <HeroLeft hero={hero}/>
          <HeroRight hero={hero} />
        </div>
      </div>
    </section>
  );
}
