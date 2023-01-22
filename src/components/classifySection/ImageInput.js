import { FaImage } from 'react-icons/fa';

export default function ImageInput({ classify, imageUploadHandler }) {
  return (
    <label htmlFor="input-image">
      <div className="h-72 border border-dark border-dashed overflow-hidden rounded-lg flex items-center cursor-pointer">
        <div className="w-full text-primary text-center">
          <FaImage className="w-full text-8xl" />
          <h3 className="w-full font-medium text-lg">
            {classify.blankImage}
          </h3>
        </div>
        <input
          onChange={imageUploadHandler}
          type="file" 
          id="input-image"
          accept="image/,.jpg,.jpeg,.png" 
          hidden 
        />
      </div>
      <div className="w-full bg-dark text-white rounded-md mt-2 p-3 hover:bg-dark 90 transition-all duration-200 ease-in-out block text-center cursor-pointer">
        {classify.buttonUpload}
      </div>
    </label>
  )
}