'use server'
import { MicrofictionsContextProvider } from '../contexts/microfictions.context'
import ImagePlaceHolder from '../components/ImagePlaceHolder'
import PinsList from '../components/PinsList'
import Modal from '../components/Modal'
import YearsSlider from '../components/YearsSlider'
import Confettis from '../components/Confettis'
import { GetMicroFictions } from '../../lib/microfictions'
import { chapitres } from '../data'

export default async function showFictions(params) {
  const microF = await GetMicroFictions(params)

  const pageTitleObj = chapitres.filter((elt) => {
    return elt.month === params.params.slug
  })
  const pageTitle = pageTitleObj[0].title
  const currentSlug = params.params.slug
  const { microfictions } = microF
  // ajoute la propriété slug (avec le bon mois qui correspond) à l'objet en cours
  const microfictionsDateFixed = microfictions.map((elt) => {
    let { Date } = elt
    if (Date.includes('/01/')) {
      elt['slug'] = 'janvier'
    }
    if (Date.includes('/02/')) {
      elt['slug'] = 'fevrier'
    }
    if (Date.includes('/03/')) {
      elt['slug'] = 'mars'
    }
    if (Date.includes('/04/')) {
      elt['slug'] = 'avril'
    }
    if (Date.includes('/05/')) {
      elt['slug'] = 'mai'
    }
    if (Date.includes('/06/')) {
      elt['slug'] = 'juin'
    }
    if (Date.includes('/07/')) {
      elt['slug'] = 'juillet'
    }
    if (Date.includes('/08/')) {
      elt['slug'] = 'aout'
    }
    if (Date.includes('/09/')) {
      elt['slug'] = 'septembre'
    }
    if (Date.includes('/10/')) {
      elt['slug'] = 'octobre'
    }
    if (Date.includes('/11/')) {
      elt['slug'] = 'novembre'
    }
    if (Date.includes('/12/')) {
      elt['slug'] = 'decembre'
    }
    return elt
  })

  // affiche les épingles du mois sélectionné
  const microfictionsFiltered = microfictionsDateFixed.filter((elt) => {
    return elt.slug == currentSlug
  })
  // console.log('microfictionsFiltered => ', microfictionsFiltered)

  return (
    <MicrofictionsContextProvider value={{ microfictionsFiltered }}>
      <section className="map-page relative">
        <h1>{pageTitle}</h1>
        <article className="img-placeholder image-wrapper lg:w-[1080px] mx-auto relative mix-blend-darken ">
          <ImagePlaceHolder />
          <PinsList />
        </article>
        <YearsSlider />
        <Modal />
      </section>
      <Confettis />
    </MicrofictionsContextProvider>
  )
}
