import ImagePlaceHolder from '../components/ImagePlaceHolder'

const BASE_URL = 'http://127.0.0.1:1337'

// const BASE_URL = 'https://mon-cours-next-js-13.vercel.app'

const fetchFictions = async () => {
  const fictions = await fetch(`${BASE_URL}/api/place-de-la-reunions/`, {
    method: 'GET',
  })
  return fictions.json()
}
export default async function monthFictions({ params }: any) {
  const goodFictions = await fetchFictions()
  const reallyGoodFictions = goodFictions.data.map(({element}:any) => {
    return element.attributes
  })

  
  

  const getSlugChapters = reallyGoodFictions.filter(({elt}:any) => {
    const eltWithoutAccents = elt.Mois.normalize('NFD').replace(
      /[\u0300-\u036f]/g,
      ''
    )
    return eltWithoutAccents == params.slug
  })
//   console.log('getSlugChapters => ', getSlugChapters)
  return (
    <section className="relative w-[864px] mx-auto">
      <ImagePlaceHolder />
      {getSlugChapters.map(({elt}:any) => {
        const { Jour_du_mois, Mois, Annee, Texte_microfiction, createdAt } = elt
        const randX = Math.round(Math.random() * 864)
        const randY = Math.round(Math.random() * 645)
        return (
          <div
            key={createdAt}
            className="coordXY absolute h-4 w-4 bg-green-500 cursor-pointer"
            style={{ top: `${randY}px`, left: `${randX}px` }}
            data-content=""
          >
            {Annee}
          </div>
        )
      })}
    </section>
  )
}

