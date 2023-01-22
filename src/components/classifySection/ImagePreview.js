import { FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react';
import classifyModel from './modelHandler';

export default function ImagePreview({ classify, isFile, setFile, image, setResults }) {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  const deleteImageHandler = () => {
    imageRef.current.value = '';
    setResults(null);
    setFile(null);
  };

  return (
    <>
      <div className={`h-72 bg-dark border border-dark overflow-hidden rounded-lg flex relative items-center ${isLoading && 'animate-pulse'}`}>
        <FaTimes 
          className="absolute z-10 top-2 right-2 text-white text-3xl p-1 rounded-sm bg-red-500/90 shadow shadow-light cursor-pointer hover:bg-red-500 hover:shadow-lg hover:shadow-light transition-all duration-200 ease-out" 
          onClick={deleteImageHandler}
        />
        <img 
          ref={imageRef}
          src={image}
          alt={isFile.name}
          className="w-full h-full absolute object-cover object-center" 
        />
      </div>
      <button 
        className="w-full inline-flex justify-center bg-primary text-white rounded-md mt-2 p-3 hover:brightness-110 hover:shadow-md transition-all duration-200 ease-in-out text-center cursor-pointer"
        onClick={() => classifyModel(imageRef.current, setResults, setIsLoading)}
      >
        {
          isLoading 
          ? <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-white">Memproses...</span>
            </>
          : classify.buttonClassify
        }
      </button>
    </>
  )
}