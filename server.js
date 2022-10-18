let http = require('http');
let users = [
  {id: 1, name: 'z1'},
  {id: 1, name: 'z2'},
];
let server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.url==='/api/users'){
    res.end(JSON.stringify(users));
  }else{
    res.end('Not Found')
  }

})
server.listen(3000,()=>{
  console.log('后端接口部署在3000');
})