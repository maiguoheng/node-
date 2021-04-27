# node做后台测试
node index.js

## 参考文档：
http://nodejs.cn/api/http.html

## es6语法处理方法：
利用 npm run build 将Es6打包成es5放到dist文件夹中，然后node运行的是dist下的index，
而不是src下的index。
.nodemon.json中忽略了dist的变化，以防止循环更新
