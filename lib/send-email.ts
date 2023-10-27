import { FormData } from '../src/app/components/ContactForm'

export function sendEmail(data: FormData) {

  console.log(data)

  const apiEndpoint = `http://localhost:3000/src/app/api/email/`

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message)
    })
    .catch((err) => {
      alert(err)
    })

}
