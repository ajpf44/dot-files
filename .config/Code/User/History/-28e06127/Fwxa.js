/* const http = require('http');
http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'application/json'});

    let obj = {
        num: Math.random()
    }

    res.end(JSON.stringify(obj), )
}).listen(8080) */


const express = require('express')
const app  = express()

app.get('/', (req, res)=>{
  const response = {
    num: Math.floor(Math.random()*10)
  }
  
  res.send(JSON.stringify(response))
})

app.post('cad', (req, res)=>{
  console.log(req.)
  res.sendStatus(200)
})

app.listen(8000, ()=>{
  console.log('Server running')
})
