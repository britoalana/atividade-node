const http = require('http')
const port = 3000

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8' })
    res.write("<h1> Olá, mundo!</h1>")
    res.end
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})