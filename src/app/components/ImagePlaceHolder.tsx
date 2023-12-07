import Image from 'next/image'
import reunionMapPic from '../../../public/img/croquis-reunion.png'
const ImagePlaceHolder = () => {
  return (
    <article className="img-placeholder text-center   relative mix-blend-darken">
      <Image
        src={reunionMapPic}
        width="1000"
        height="1000"
        alt="Place de La Réunion"
        className="relative w-[100%]"
      />
    </article>
  )
}
export default ImagePlaceHolder