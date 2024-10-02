const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout ',(req,res) => {
  let name =req.query.name
  let UppercaseName = name.toUppercase()
  res.send(UppercaseName);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
