const express = require('express');
const ordersRoutes = require('./orders/orders.routes');

const app = express();

app.use(express.json());

// Services routing
app.use('/api/orders', ordersRoutes);

module.exports = app;