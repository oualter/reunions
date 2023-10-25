import ImagePlaceHolder from '../components/ImagePlaceHolder'
import ModalHandler from '../components/ModalHandler'

const BASE_URL = 'http://127.0.0.1:1337'

// const BASE_URL = 'https://mon-cours-next-js-13.vercel.app'

const fetchFictions = async () => {
  const fictions = await fetch(`${BASE_URL}/api/place-de-la-reunions/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // next:{
    //   revalidate:60
    // },
    cache: 'no-store'
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
    // console.log('test => ',params.params.slug)
    return eltWithoutAccents == params.params.slug
  })
    // console.log('getSlugChapters => ', getSlugChapters)
  return (
    <section className="relative w-[864px] mx-auto">
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
        const randX = Math.round(Math.random() * 864)
        const randY = Math.round(Math.random() * 645)
        // console.log(Jour_du_mois)
        return (
          // <div
          //   key={createdAt}
          //   className="coordXY absolute h-4 w-4 bg-green-500 cursor-pointer"
          //   style={{ top: `${randY}px`, left: `${randX}px` }}
          // >
          //   {Annee}
          // </div>
          <ModalHandler
            key={createdAt}
            classNameValue="coordXY absolute h-4 w-4 bg-green-500 cursor-pointer"
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
