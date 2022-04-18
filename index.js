const express = require('express');
const port = 3000;
const app = express();
const routes = require('./src/router/cars.route');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/cars', routes);

app.get('/cars/find-cars', (req, res) => {
  res.send(cars);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
