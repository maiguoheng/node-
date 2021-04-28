// 返回静态的json

export default {
  name: 'static-json',
  url: '/static-json',
  methods:['GET','POST'],
  handle: function (req, res) {
    res.writeHeader(200, {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    });
    let json = JSON.stringify({ name: "hahahn" })
    res.end(json);
  }
}