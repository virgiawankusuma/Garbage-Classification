export default function GeneralResult({
    garbageTypeRef,
    garbageCategoryRef,
    garbageProbabilityRef,
    garbageImageClassifiedRef
}) {
  return (
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
  );
}
