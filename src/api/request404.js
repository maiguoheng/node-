// 404找不到借口
export default {
  name: 'request404',
  url: '/request404',
  handle: function (req, res) {
    res.writeHeader(404, {
      "Content-Type": "text/plain;charset=utf-8",
      'Access-Control-Allow-Origin': '*'
    });
    let html = '<div>找不到页面</div>'
    res.end(html);
  }
}