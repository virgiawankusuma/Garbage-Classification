import { useState } from 'react';

import { classify } from '../../data/classifyData';
import ClassifyImage from './ClassifyImage';
import ClassifyResult from './ClassifyResult';

export default function Classification() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);

  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImage(reader.result);
      }
    }
  };

  // console.log(`ini hasilnya: ${results}`);

  return(
    <section id="techstacks" className="pt-10 pb-36 min-h-screen">
      <div className="container ">
        <div className="flex flex-wrap justify-center px-4">
          <h2 className="w-full text-2xl text-dark font-bold text-center mb-6 md:text-3xl lg:text-5xl">
            {classify.title}
          </h2>
          <p className="w-full text-dark font-medium text-center mb-10 lg:leading-relaxed lg:w-2/3 lg:text-lg">
            {classify.subtitle}
          </p>
          <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-x-12">
            <ClassifyImage 
              classify={classify}
              imageUploadHandler={imageUploadHandler}
              isFile={file}
              setFile={setFile}
              image={image}
              setResults={setResults}
            />

            {results && (
              <ClassifyResult
                results={results}
                image={image}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}