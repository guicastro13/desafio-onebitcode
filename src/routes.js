const express = require('express');
const routes = express.Router();

const ProductsController = require('../controller/ProductsController');

routes.post('/products', ProductsController.store);
routes.get('/products', ProductsController.index);
routes.put('/products/:id', ProductsController.put);
routes.delete('/products/:id', ProductsController.delete);

module.exports = routes;