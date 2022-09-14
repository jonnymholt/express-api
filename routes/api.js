const router = require('express').Router();

const userRouter = require('./api/user.router')

router.use('/users', userRouter);

module.exports = router;