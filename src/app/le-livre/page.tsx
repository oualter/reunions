const CMS_URL = process.env.CMS_URL
const url = `${CMS_URL}/api/le-livre?populate=*`
const response = await fetch(url)
const body = await response.json()
console.log('body => ', body)
const { Titre, Contenu, contenu_2, Illustration } = body.data.attributes
console.log('Contenu => ', Contenu)
export default async function leLivre() {
  return (
    <article className="lg:max-w-[700px] mx-auto my-6">
      <h1 className="text-5xl">{Titre}</h1>
      {Contenu.map((elt:any, index:number) => (
        <p className="my-4" key={index}>
          {elt.children[0].text}
        </p>
      ))}
      <br />
      {contenu_2.map((elt:any, index:number) => (
        <p className="my-4" key={index}>
          {elt.children[0].text}
        </p>
      ))}
    </article>
  )
}

