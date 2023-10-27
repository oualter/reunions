import Contact from './../components/ContactForm'
import HeadingOne from './../components/HeadingOne'

export default function contact() {
  return (
    <section className="max-w-[50%] mx-auto">
      <HeadingOne texte="Contact" />
      <Contact />
    </section>
  )
}
