const express = require('express');
const app = express();
const path = require('path');

// app.get('/', function(req, res){
//   res.send('./public/index.js');
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main.html'))
})


app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.js'))
})

app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main.css'))
})

app.get('/picture1', (req, res) => {
  res.sendFile(path.join(__dirname, './public/HEADER1.png'))
})

app.get('/picture2', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main-tool.png'))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


