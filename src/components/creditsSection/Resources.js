export default function Resources({ resource }) {
  return (
    <div className="w-[calc(100%/2-1rem)] bg-light/20 border-2 border-secondary rounded-lg p-4 pb-10 md:w-[calc(100%/3-2rem)]">
      <div className="flex flex-wrap">
        <h3 className="w-full text-xl font-bold text-dark sm:text-2xl md:text-3xl">{resource.title}</h3>
        <a 
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          title={`Tombol ${resource.title}`}
          aria-label={`Tombol ${resource.title}`}
          className="w-full min-h-[44px] min-w-[44px] text-sm font-medium underline text-secondary sm:text-base md:text-lg hover:text-primary hover:decoration-secondary"
          >
            {resource.text}
        </a>
      </div>
    </div>    
  );
}