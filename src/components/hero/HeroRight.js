export default function HeroRight({ hero }) {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative w-full mt-10 lg:mt-0 lg:right-0">
          <img 
            src={hero.image}
            className="absolute scale-[45%] top-1/3 right-[12%] translate-x-1/2 md:top-[40%] md:scale-50 lg:scale-[65%]"
            alt="Robot"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[85%] h-auto rounded-xl shadow-xl"
          >
            <source src={hero.video} type="video/webm" />
          </video>
        </div>
      </div>
    </>
  );
}
