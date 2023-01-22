import { useRef, useEffect, useContext } from 'react';
import { AppContext } from '../../../context/app-context';
import GeneralResult from './GeneralResult';
import DetailResult from './DetailResult';

export default function ClassifyResult() {
  const context = useContext(AppContext);
  const { results, image } = context;

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

  return(
    <div className="w-full border border-dark rounded-lg lg:w-[calc(50%-2rem)]">
      <div className="border-b border-dark p-3 text-center">
        <h3 className="text-xl text-dark font-semibold lg:text-2xl">
          Hasil Klasifikasi
        </h3>
      </div>
      <GeneralResult
        garbageTypeRef={garbageTypeRef}
        garbageCategoryRef={garbageCategoryRef}
        garbageProbabilityRef={garbageProbabilityRef}
        garbageImageClassifiedRef={garbageImageClassifiedRef}
      />
      <DetailResult 
        results={results}
      />
    </div>
  )
}
