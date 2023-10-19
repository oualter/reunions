// import 'server-only'


async function getDataChapitres() {
  const responseReunions = await fetch(
    'http://127.0.0.1:1337/api/place-de-la-reunions'
  )
  const dataReunions = await responseReunions.json()
  // console.log('dataReunions => ', dataReunions)
  return dataReunions
}

export default async function GetChapitres() {
  // const { data } = await getDataChapitres()
  const dataChapitres = async () => {
    const data1 = await getDataChapitres()
    const { data } = data1
    return data  
  }
  const goodData = await dataChapitres();
  return <div>
    {/* {goodData.map((textencours)=>{
      console.log(textencours.attributes)
    })} */}
  </div>
}