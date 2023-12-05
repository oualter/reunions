import ImagePlaceHolder from '../components/ImagePlaceHolder'
import ModalHandler from '../components/ModalHandler'

const CMS_URL = process.env.CMS_URL
const fetchFictions = async () => {
  const fictions = await fetch(`${CMS_URL}/api/place-de-la-reunions/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // next:{
    //   revalidate:60
    // },
    // cache: 'no-store'
  })
  return fictions.json()
}
export default async function monthFictions(params ) {
  const goodFictions = await fetchFictions()
  const reallyGoodFictions = goodFictions.data.map((element) => {
    return element.attributes
  })
  const getSlugChapters = reallyGoodFictions.filter((elt) => {
    const eltWithoutAccents = elt.Mois.normalize('NFD').replace(
      /[\u0300-\u036f]/g,
      ''
    )
    return eltWithoutAccents == params.params.slug
  })
  return (
    <section className="relative w-max mx-auto border-4">
      <ImagePlaceHolder />
      {getSlugChapters.map((elt) => {
        const {
          Jour_du_mois,
          Mois,
          Annee,
          Texte_microfiction,
          createdAt,
          Heure,
        } = elt
        const randX = Math.round(Math.random() * 1000) + 450
        const randY = Math.round(Math.random() * 650) + 120
        return (         
          <ModalHandler
            key={createdAt}
            classNameValue="coordXY absolute h-8 w-8  cursor-pointer rounded-full"
            coordX={randX}
            coordY={randY}
            year={Annee}
            month={Mois}
            day={Jour_du_mois}
            time={Heure}
            content={Texte_microfiction}
          />
        )
      })}
    </section>
  )
}
