const router = require('express').Router();
const { validate } = require('../validator');
const { asyncHandler } = require('../../lib/async');

const delegateController = require('../../controllers/delegate.controller');

router.post('/', validate(delegateController.validators.postDelegateValidator), asyncHandler(delegateController.postDelegate));
router.get('/', asyncHandler(delegateController.getDelegates));

module.exports = router;
