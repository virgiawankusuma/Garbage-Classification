import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';

export default function ClassifyImage({ 
  classify,
  imageUploadHandler,
  isFile,
  setFile,
  image,
  setResults
}) {

  return(
    <div className="w-full md:w-[calc(50%-1rem)]">
      { !isFile ? (
        <ImageInput 
          classify={classify}
          imageUploadHandler={imageUploadHandler}
        />
      ) : (
        <ImagePreview 
          classify={classify}
          isFile={isFile}
          setFile={setFile}
          image={image}
          setResults={setResults}
        />
      )}
    </div>
  )
}
