export default function FeaturedBody({ feature }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-12">
      <div className="flex flex-wrap justify-between">
        <img
          className="w-full h-[200px] object-scale-down border-[3px] border-primary rounded-xl"
          src={feature.image}
          alt={feature.title}
        />
        <div className="w-full mt-2 lg:mt-6">
          <h3 className="text-xl font-bold text-dark mb-2 md:text-2xl">
            {feature.title}
          </h3>
          <p className="font-medium text-dark">
            {feature.desc}
          </p>
        </div>   
      </div>    
    </div>    
  );
}