const http = require('http');
http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'application/json'});
    
})