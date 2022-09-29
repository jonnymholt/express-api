const { body } = require('express-validator');

const postCategoryValidator = [
    body('title').isString(),
];
const postCategory = async (req, res, next) => {
    return res.json(req.body);
}

const getCatgories = async(req, res, next) => {
    return res.json(req.body);
}

module.exports = {
    validators: {
        postCategoryValidator
    },
    postCategory,
    getCatgories
}