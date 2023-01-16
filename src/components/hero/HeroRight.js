export default function HeroRight({ heroData }) {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative w-full mt-10 lg:mt-0 lg:right-0">
          <img 
            src={heroData.image}
            className="absolute scale-[65%] top-[40%] right-[12%] translate-x-1/2"
            alt="Robot"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[85%] h-auto rounded-xl shadow-xl"
          >
            <source src={heroData.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
