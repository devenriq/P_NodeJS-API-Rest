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
  res.json([
    {
      name: 'producto1',
      price: 1000,
    },
    {
      name: 'producto2',
      price: 10000,
    },
  ]);
});

app.get('/products/:id/products', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto2',
    price: 10000,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
