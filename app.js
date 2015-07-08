var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type:':'text/plain'})
    res.end('Hello world\n');
}).listen(1337,'0.0.0.0');
console.log('Server running on http://127.0.0.1:1337/');
