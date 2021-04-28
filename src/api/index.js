
var staticJson = require('./static-json').default
var staticImg = require('./static-img').default
var request404 = require('./request404').default
export default {
  [staticJson.url]: staticJson,
  [staticImg.url]: staticImg,
  [request404.url]:request404
}