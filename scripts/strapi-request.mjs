import { writeFileSync } from 'node:fs'

const url = 'http://127.0.0.1:1337/api/place-de-la-reunions'+'?populate=* '
const response = await fetch(url)
const body = await response.json()
// console.log(body)
const formatted = JSON.stringify(body, null, 2)
const file = 'scripts/strapi-response.json'
writeFileSync(file, formatted, 'utf8')
