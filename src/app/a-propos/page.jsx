// "use client"
// import Link from 'next/link'
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
const CMS_URL = process.env.CMS_URL
const url = `${CMS_URL}/api/a-propos`

export default async function apropos() {
  try {
    const response = await fetch(url)
    if (response.ok) {
    const body = await response.json()
    const { Titre, Contenu } = body.data.attributes
    const {children} = Contenu[0]
    // console.log('children => ', children)

      return (
        <article className="lg:max-w-[700px] mx-auto my-6">
          <h1 className="text-5xl mb-4">{Titre}</h1>
            {
              children.map((elt, index) => {
                if(elt.type === 'text'){
                return(
                  <span className="my-4" key={index}>
                      {elt.text}
                    </span>
                )
              } else if(elt.type === 'link'){
                return(
                    <a href={elt.url} key={index}>
                        {elt.children[0].text}
                    </a>
                    )
                  }
                })
              }

          {/* {Contenu.map((elt,index) => (
            <p className="my-4" key={index}>
              {elt.children[0].text}
            </p>
          ))} */}
          {/* <BlocksRenderer 
            content={props.Contenu} 
            blocks={{
              paragraph: ({ children }) => <p className="text-neutral900 max-w-prose">{children}</p>,
              heading: ({ children, level }) => {
                switch (level) {
                  case 1:
                    return <h1>{children}</h1>
                  case 2:
                    return <h2>{children}</h2>
                  case 3:
                    return <h3>{children}</h3>
                  case 4:
                    return <h4>{children}</h4>                
                }
              },
              link: ({ children, url }) => <Link to={url}>{children}</Link>,
            }}
            modifiers={{
              bold: ({ children }) => <strong>{children}</strong>,
              italic: ({ children }) => <span className="italic">{children}</span>,
            }}
          />  */}
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


