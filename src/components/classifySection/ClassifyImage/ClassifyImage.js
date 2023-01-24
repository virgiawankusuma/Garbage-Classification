import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';

export default function ClassifyImage({ file }) {

  return(
    <div className="w-full md:w-[calc(50%-1rem)]">
      { !file ? (
        <ImageInput />
      ) : (
        <ImagePreview />
      )}
    </div>
  )
}
