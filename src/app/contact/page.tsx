import Contact from './../components/ContactForm'
import HeadingOne from './../components/HeadingOne'

export default function contact() {
  return (
    <section className="max-w-[50%] mx-auto my-6">
      <HeadingOne texte="Contact" />
      <Contact />
    </section>
  )
}
