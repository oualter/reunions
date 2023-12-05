const CMS_URL = process.env.CMS_URL
const url = `${CMS_URL}/api/a-propos`
const response = await fetch(url)
const body = await response.json()
const { Titre, Contenu } = body.data.attributes
export default async function apropos() {
  return (
    <article className="lg:max-w-[700px] mx-auto my-6">
      <h1 className="text-5xl">{Titre}</h1>
      {Contenu.map((elt:any, index:number) => (
        <p className="my-4" key={index}>
          {elt.children[0].text}
        </p>
      ))}
    </article>
  )
}

