const router = require('express').Router();
const { validate } = require('../validator');
const { asyncHandler } = require('../../lib/async');

const catagoryController = require('../../controllers/category.controller');

router.post('/', validate(catagoryController.validators.postCategoryValidator), asyncHandler(catagoryController.postCategory));

module.exports = router;
