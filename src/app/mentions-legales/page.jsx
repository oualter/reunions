const BASE_URL = 'http://127.0.0.1:1337'

const url = 'http://127.0.0.1:1337/api/mentions-legales'
const response = await fetch(url)
const body = await response.json()
const {Titre,Contenu} = body.data.attributes
export default async function mentionsLegales() {


  return (
    <article className="lg:max-w-[700px] mx-auto my-12">
      <h1 className="text-5xl">{Titre}</h1>
      {Contenu.map((elt, index) => (
        <p className="my-4" key={index}>
          {elt.children[0].text}
        </p>
      ))}
    </article>
  )
}