const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'producto1',
    price: 1000,
  });
});

app.get('/categories', (req, res) => {
  res.json({
    category1: 'clothes',
    category2: 'jewerly',
    category3: 'electronics',
    category4: 'videogames',
  });
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
