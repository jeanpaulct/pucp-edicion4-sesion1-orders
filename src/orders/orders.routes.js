const express = require('express');
const { getOrderById } = require('./orders.controller');

const router = express.Router();

router.get('/:id', getOrderById);

module.exports = router;