const express = require('express');
const app = express();
const port = process.env.port || 4000;

app.use(express.static(__dirname + '/'));
const server = app.listen(4000, function () {
  console.log("Server listening at port " + port);
})
