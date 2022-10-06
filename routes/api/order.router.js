const router = require('express').Router();
const { validate } = require('../validator');
const { asyncHandler } = require('../../lib/async');

const orderController = require('../../controllers/order.controller');

router.get('/', asyncHandler(orderController.getOrders));
router.get('/:id', asyncHandler(orderController.getOrderById));

module.exports = router;
