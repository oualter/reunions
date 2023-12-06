const CMS_URL = process.env.CMS_URL
const url = `${CMS_URL}/api/le-livre?populate=*`

export default async function leLivre() {
  try {
    const response = await fetch(url)
    if (response.ok) {
    const body = await response.json()
    const { Titre, Contenu, contenu_2, Illustration } = body.data.attributes

    return (
      <article className="lg:max-w-[700px] mx-auto my-6">
        <h1 className="text-5xl">{Titre}</h1>
        {Contenu.map((elt, index) => (
          <p className="my-4" key={index}>
            {elt.children[0].text}
          </p>
        ))}
        <br />
        {contenu_2.map((elt,index) => (
          <p className="my-4" key={index}>
            {elt.children[0].text}
          </p>
        ))}
      </article>
    )
    } else {
        if (response.status === 404) throw new Error('404, Not found');
        if (response.status === 500) throw new Error('500, internal server error');
        if (!response.ok) throw new Error(response.status);
      }
    } catch (error) {
      console.error('Fetch', error);
  }  
}

