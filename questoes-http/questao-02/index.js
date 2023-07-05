const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1> Bem- vindo á página inicial! </h1>");
    res.end();
  } else if(req.url === "/about"){
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    res.write("<h1> Sobre nós: somos uma empresa dedicada a produção de tecido PET </h1>")
    res.end()
  }else{
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    res.write("<h1> Acrescente /home ou /about para ir a alguma página </h1>")
    res.end()
  }
});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})