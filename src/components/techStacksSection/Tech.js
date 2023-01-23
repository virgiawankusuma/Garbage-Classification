export default function Tech({ tech }) {
  return (
    <div className="w-[calc(100%/2-1rem)] sm:w-[calc(100%/3-1rem)] md:w-[calc(100%/4-1.5rem)] lg:w-[calc(100%/5-2.5rem)]">
      <div className="flex flex-wrap justify-center text-center group">
        <div className="px-8 py-3 border-[1.5px] rounded-md border-dark mb-2 bg-white shadow-lg">
          <img
            src={tech.image}
            alt={`Logo ${tech.name}`}
            className="w-24 h-24 object-scale-down aspect-square"
          />
        </div>
        <h3 
          className="w-full text-sm font-bold text-dark md:text-base">
          <a 
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            title={`Tombol ${tech.name}`}
            aria-label={`Tombol ${tech.name}`}
            className="hover:text-primary hover:underline hover:decoration-2 hover:decoration-secondary transition-all duration-200 ease-in-out"
          >
          {tech.name}
          </a>
        </h3>
        <span
          className="w-full text-xs font-medium text-primary">
          {tech.type}
        </span>
      </div>
    </div>    
  );
}