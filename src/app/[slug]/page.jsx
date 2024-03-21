'use server'
import { MicrofictionsContextProvider } from '../contexts/microfictions.context'
import ImagePlaceHolder from '../components/ImagePlaceHolder'
import PinsList from '../components/PinsList'
import Modal from '../components/Modal'
import YearsSlider from '../components/YearsSlider'
import Confettis from '../components/Confettis'
import { GetMicroFictions } from '../../lib/microfictions'


export default async function showFictions(params) {
  const microF = await GetMicroFictions(params)
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

  return (
    <MicrofictionsContextProvider value={{ microfictionsFiltered }}>
      {/* <main className="grow overflow-hidden" id="headlessui-portal-root"> */}
      <main className="grow overflow-hidden">
        <section className="relative">
          <ImagePlaceHolder />
          <PinsList />
          <YearsSlider />
          <Modal />
        </section>
      </main>
      <Confettis />
    </MicrofictionsContextProvider>
  )
}
