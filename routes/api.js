const router = require('express').Router();

const categoryRouter = require('./api/category.router')
const delegateRouter = require('./api/delegate.router')
const orderRouter = require('./api/order.router')
const userRouter = require('./api/user.router')

router.use('/categories', categoryRouter);
router.use('/delegates', delegateRouter);
router.use('/orders', orderRouter);
router.use('/users', userRouter);

module.exports = router;