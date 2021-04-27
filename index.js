var http = require('http');
var fs = require('fs');
//创建一个服务器对象
server = http.createServer(function (req, res) {
  let url = req.url
  let method = req.method
  console.log(url, method)
  res.writeHeader(200, {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*'
  });
  // 根据url做不同处理
  
  //  返回json
  let json=JSON.stringify({name:"hahahn"})
  res.end(json);

  //返回图片
  let imageFilePath = './imgs/keb.png'
  var stream = fs.createReadStream(imageFilePath);
  var responseData = [];//存储文件流
  res.writeHeader(200, {
    "Content-Type": "image/png",
    'Access-Control-Allow-Origin': '*'
  });
  if (stream) {//判断状态
    stream.on('data', function (chunk) {
      responseData.push(chunk);
    });
    stream.on('end', function () {
      var finalData = Buffer.concat(responseData);
      res.write(finalData);
      res.end();
    });
  }
  //向客户端输出字符
});

//让服务器监听本地8000端口开始运行
server.listen(8000, '127.0.0.1');
console.log("server is runing at 127.0.0.1:8000");