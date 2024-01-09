const path = require('path');
const fs = require('fs');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();
app.disable('x-powered-by');
// app.all('/', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });
// //   expressWs(app, undefined, {
// //     wsOptions: { perMessageDeflate: true }
// //   });
// app.use(cors());

app.use('*', createProxyMiddleware({ target: 'https://wikipedia.org', changeOrigin: true }));


app.listen(443, async () => {
    console.log('Server is running...');
});