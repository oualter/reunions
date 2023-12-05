import Image from 'next/image'
import reunionMapPic from '../../../public/img/croquis-reunion.png'
const ImagePlaceHolder = () => {
  return (
    <article className="img-placeholder text-center w-max  mx-auto relative mix-blend-darken">
      <Image
        src={reunionMapPic}
        width="1000"
        height="1000"
        alt="Place de La Réunion"
        className="relative min-h-screen"
      />
    </article>
  )
}
export default ImagePlaceHolder