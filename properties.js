"use strict"

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
   if(req.url === '/'){
      res.writeHead(200, {
         "Content-Type": "text/html; utf-8"
      })
      res.end(fs.readFileSync('main.html'))
   }else if(req.url === '/second'){
      res.writeHead(200, {
         "Content-Type": "text/html; utf-8"
      })
      res.end(fs.readFileSync('second-page.html'))
   }
})

server.listen(9080, () => console.log('Server online'))