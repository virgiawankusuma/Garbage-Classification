import { useRef, useEffect } from 'react';

export default function ClassifyResult({ results, image }) {
  let trashTypes;
	switch (results[0].className) {
		case 'Biologis':
		case 'Kertas':
		case 'Kardus':
			trashTypes = 'Organik';
			break;

		default:
			trashTypes = 'Anorganik';
			break;
	}

  const garbageTypeRef = useRef(null);
  const garbageCategoryRef = useRef(null);
  const garbageProbabilityRef = useRef(null);
  const garbageImageClassifiedRef = useRef(null);

  useEffect(() => {
    garbageTypeRef.current.innerText = `Sampah ${results[0].className}`;
    garbageCategoryRef.current.innerText = trashTypes;
    garbageProbabilityRef.current.innerText = `${(results[0].probability * 100).toFixed(2)}%`;

    garbageImageClassifiedRef.current.src = image;

  }, [image, results, trashTypes]);

  console.log(results);

  return(
    <div className="w-full border border-dark rounded-lg lg:w-[calc(50%-2rem)]">
      <div className="border-b border-dark p-3 text-center">
        <h3 className="text-xl text-dark font-semibold lg:text-2xl">
          Hasil Klasifikasi
        </h3>
      </div>
      <div className="p-4 flex flex-wrap">
        <div className="w-[80%] flex flex-wrap justify-start items-center mb-2">
          <span className="text-sm w-1/2 text-dark sm:text-base md:text-lg">Jenis</span>
          <span className="text-sm text-dark font-semibold sm:text-base md:text-lg" ref={garbageTypeRef}></span>
          <span className="text-sm w-1/2 text-dark sm:text-base md:text-lg">Kategori</span>
          <span className="text-sm text-dark font-semibold sm:text-base md:text-lg" ref={garbageCategoryRef}></span>
          <span className="text-sm w-1/2 text-dark sm:text-base md:text-lg">Tingkat Kecocokan</span>
          <span className="text-sm text-dark font-semibold sm:text-base md:text-lg" ref={garbageProbabilityRef}></span>
        </div>
        <div className="w-[20%] flex flex-wrap justify-start items-center mb-2">
          <img 
            alt="Hasil Klasifikasi" 
            className="w-full object-cover rounded-lg aspect-[5/4]" 
            ref={garbageImageClassifiedRef}
          />
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap justify-start gap-1">
          {
            results.map((result, index) => {
              return (
                <div key={index} className="w-full flex flex-wrap justify-start items-center gap-1 mb-1">
                  {/* Class Name */}
                  <span className="text-xs text-dark font-semibold sm:text-sm md:text-base">{result.className}</span>
                  <div className="w-full h-4 bg-light/40 rounded relative overflow-hidden">
                    {/* Progress Bar*/}
                    <div className="w-[80%] h-full bg-primary rounded absolute" style={{ width: `${(result.probability * 100).toFixed(2)}%` }}>
                      {/* Percentage Probability */}
                      <span className="text-xs text-white font-semibold md:text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {(result.probability * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
