const router = require('express').Router();
const userController = require('../../controllers/user.controller');
const routerHelper = require('../router.helper');

/* GET users listing. */
router.get('/', userController.getUsers);

module.exports = router;
