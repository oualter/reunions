import Image from 'next/image'
import reunionMapPic from '../../../public/img/croquis-reunion.png'
const ImagePlaceHolder = (props) => {
  return (
    <article
      className="img-placeholder text-center mix-blend-darken"
    >
      <div className="image-wrapper w-[1080px] mx-auto relative">
        <Image
          src={reunionMapPic}
          width="1080"
          height="927"
          alt="Place de La Réunion"
          // className="relative w-[100%]"
          className="relative w-[auto] mx-auto"
        />
      </div>
    </article>
  )
}
export default ImagePlaceHolder
