export default function DetailResult({ results }) {
  return (
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
  );
}