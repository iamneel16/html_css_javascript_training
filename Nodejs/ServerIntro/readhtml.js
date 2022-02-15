const http = require("http")
const fs = require("fs")
const fileOnServer = fs.readFileSync("site.htm")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(fileOnServer)
})
server.listen(80,'127.0.0.1',()=>{
    console.log("Server Active on port 80 ")
})