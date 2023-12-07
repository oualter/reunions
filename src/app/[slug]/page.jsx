import ImagePlaceHolder from '../components/ImagePlaceHolder'
import ModalHandler from '../components/ModalHandler'

const CMS_URL = process.env.CMS_URL
// const url = `${CMS_URL}/api/place-de-la-reunions/`
const url = `${CMS_URL}/api/microfictions/`

export default async function monthFictions(params ) {
  try{
    const response = await fetch(url)
    if (response.ok) {
    const body = await response.json()
    const goodFictions = body
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
        <section className="relative">
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
    } else {
      return(<div>ya erreur</div>)
      // Custom message for failed HTTP codes
      if (response.status === 404) throw new Error('404, Not found');
      if (response.status === 500) throw new Error('500, internal server error');
      // For any other server error
      if (!response.ok) throw new Error(response.status);
    }
    
  } catch (error) {
    console.error('Fetch', error);
  }

}
