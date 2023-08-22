const http = require('http');
http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'application/json'});

    let obj = {
        num: Math.random()
    }

    res.end(JSON.stringify(obj), )
}).listen(8080)