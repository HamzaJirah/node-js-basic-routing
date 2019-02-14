const http = require ('http');
const fs = require ('fs');

const server = http.createServer(function(req, res){
  console.log(`request was made to ${req.url}`);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Hamza',
    job: 'developer',
    age: 28
  }
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Server running on port 3000');