import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Developer({ developer }) {
  return (
    <div className="w-full border-[1.5px] border-dark rounded-lg shadow-xl px-4 l sm:w-4/5 md:w-[calc(50%-12px)] lg:w-[calc(50%-3rem)] g:px-9">
      <div className="flex flex-wrap justify-center text-center relative">
        <img
          src={developer.image}
          alt={developer.alt}
          className="w-[130px] h-[130px] object-cover border-[1.5px] border-dark rounded-full aspect-square absolute top-[-80px] lg:w-[160px] lg:h-[160px]"
        />
        <h3 className="w-full text-xl font-semibold text-dark mt-14 mb-1 lg:mt-24 lg:mb-3 lg:text-3xl">
          {developer.name}
        </h3>
        <span className="w-full text-base text-primary font-medium mb-2 lg:mb-3 lg:text-lg">
          {developer.title}
        </span>
        <div className="w-full flex justify-center items-center gap-x-1 mb-3">
          <a 
            href={developer.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            title="Tombol LinkedIn Developer"
            aria-label="Tombol LinkedIn Developer"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-2xl text-[#0077B5] hover:text-white hover:bg-[#0077B5] rounded-full transition duration-300 ease-out"
          >
            <FaLinkedin />
          </a>
          <a 
            href={developer.socials.github}
            target="_blank"
            rel="noreferrer"
            title="Tombol GitHub Developer"
            aria-label="Tombol GitHub Developer"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-2xl text-black hover:text-white hover:bg-black rounded-full transition duration-300 ease-out"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
