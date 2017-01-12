var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendfile('index.html')
})

app.listen(8000, function () {
  console.log('Listening on port 8000')
})