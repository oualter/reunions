import { MicrofictionsContextProvider } from './contexts/microfictions.context'
import ImagePlaceHolder from './components/ImagePlaceHolder'
import PinsList from './components/PinsList'
import Modal from './components/Modal'
import YearsSlider from './components/YearsSlider'
import { GetMicroFictions } from '../lib/microfictions'
import Confettis from './components/Confettis'

// async function getStrapiData() {
//   const res = await fetch('http://localhost:1337/api/notes')
//   const data = await res.json()
//   return data
// }

export default async function Home() {
  const microF = await GetMicroFictions()
  const { microfictions } = await microF

  return (
    <MicrofictionsContextProvider value={{ microfictions }}>
      <section className="map-page relative">
        <ImagePlaceHolder />
        <PinsList />
        <YearsSlider />
        <Modal />
      </section>
      <Confettis />
    </MicrofictionsContextProvider>
  )
}
