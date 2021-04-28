// 返回静态的图片
var path = require('path');
var fs = require('fs');

export default {
  name: 'static-img',
  url: '/static-img',
  handle: function (req, res) {
    //返回图片
    let imageFilePath = path.resolve(__dirname, '../imgs/keb.png')
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
  }
}