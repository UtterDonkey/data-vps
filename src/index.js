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

app.use('*', createProxyMiddleware({ target: 'http://scratch.pixelbulb.online:3000', changeOrigin: false }));


app.listen(80, async () => {
    console.log('Server is running on HTTP...');
});

app.listen(443, async () => {
    console.log('Server is running on HTTPS...');
});