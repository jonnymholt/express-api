const router = require('express').Router();
const { validate } = require('../validator');

const delegateController = require('../../controllers/delegate.controller');

router.post('/', validate(delegateController.validators.postDelegateValidator), delegateController.postDelegate);

module.exports = router;
