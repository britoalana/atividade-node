const url = require('url')
const endereco = 'https://www.weargreen.com.br/produtos/to/resource?tecido=pet#sustentavel'

const parseUrl = new url.URL(endereco)
console.log(`Protocolo: ${parseUrl.protocol}`)
console.log(`Host: ${parseUrl.hostname}`)
console.log(`Caminho: ${parseUrl.pathname}`)
console.log(`Parâmetros: ${parseUrl.searchParams}`)
console.log(`Fragmento: ${parseUrl.hash}`)