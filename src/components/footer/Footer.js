import { footer } from '../../data/homeData';

export default function Footer() {
  return (
    <footer className="bg-dark absolute w-full flex items-center z-10 justify-center px-4 py-8 md:px-12">
      <div className="container md:mx-12 lg:mx-20">
        <div className="flex flex-wrap text-center text-white text-sm gap-y-3 md:justify-between">
          <p className="w-full md:w-auto">{footer.copy}</p>
          <a 
            href={footer.viewOnGithub.url} 
            target="_blank" 
            rel="noreferrer"
            className="w-full underline font-light hover:text-primary hover:decoration-secondary md:w-auto transition-all duration-200 ease-in-out"
          >
            {footer.viewOnGithub.title}
          </a>
        </div>
      </div>
    </footer>
  )
}
