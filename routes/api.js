const router = require('express').Router();

const delegateRouter = require('./api/delegate.router')
const userRouter = require('./api/user.router')

router.use('/delegates', delegateRouter);
router.use('/users', userRouter);

module.exports = router;