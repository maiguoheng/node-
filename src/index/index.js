import api from '../api/index'
var http = require('http');

//创建一个服务器对象
var server = http.createServer(function (req, res) {
  let url = req.url
  let method = req.method
  if (api[url] && api[url].methods.includes(method)) {
    api[url].handle(...arguments)
  } else {
    api['/request404'].handle(...arguments)
  }
  return

});

//让服务器监听本地8000端口开始运行
server.listen(8000, '127.0.0.1');
console.log("server is runing at 127.0.0.1:8000");