import classifyModel from '../modelHandler';
import Spinner from '../Spinner';
import DeleteImage from '../DeleteImage';
import { useContext } from 'react';
import { AppContext } from '../../../context/app-context';

export default function ImagePreview() {
  const context = useContext(AppContext);
  const { 
    classify,
    isLoading, 
    setIsLoading, 
    imageRef,
    file, 
    image,
    setResults
  } = context;

  return (
    <>
      <div className={`h-72 bg-dark border border-dark overflow-hidden rounded-lg flex relative items-center ${isLoading && 'animate-pulse'}`}>
        <DeleteImage />
        <img 
          ref={imageRef}
          src={image}
          alt={file.name}
          className="w-full h-full absolute object-cover object-center" 
        />
      </div>
      <button 
        className="w-full min-h-[44px] min-w-[44px] inline-flex justify-center bg-primary text-white rounded-md mt-2 p-3 hover:brightness-110 hover:shadow-md transition-all duration-200 ease-in-out text-center cursor-pointer"
        onClick={() => classifyModel(imageRef.current, setResults, setIsLoading)}
        title="Tombol Klasifikasi Gambar"
        aria-label="Tombol Klasifikasi Gambar"
      >
        {
          isLoading 
          ? <>
              <Spinner />
              <span className="text-white">Memproses...</span>
            </>
          : classify.buttonClassify
        }
      </button>
    </>
  )
}