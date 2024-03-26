import Image from 'next/image'

const CMS_URL = process.env.CMS_URL

export default async function ImagePlaceHolder(props) {
  const defaultImgMap = await fetch(CMS_URL + '/pingenerator/mapimage')
  if (!defaultImgMap.ok) {
    throw new Error(
      `CMS returned ${defaultImgMap.status} for ${CMS_URL}/pingenerator/mapimage`
    )
  }
  const defaultImgMapJson = await defaultImgMap.json()
  let defaultImgMapUrl = await defaultImgMapJson.imageToPinOnUrl
  if (defaultImgMapUrl.includes('localhost')) {
    defaultImgMapUrl = defaultImgMapUrl.replace('localhost','127.0.0.1')
  }

  return (
    <article className="img-placeholder text-center mix-blend-darken">
      <div className="image-wrapper w-[1080px] mx-auto relative">
        <Image
          src={defaultImgMapUrl}
          width={1080}
          height={927}
          priority={true}
          alt="Place de La Réunion"
          className="relative w-[auto] mx-auto"
        />
      </div>
    </article>
  )
}
