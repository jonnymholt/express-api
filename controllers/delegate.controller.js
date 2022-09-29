const { body } = require('express-validator');

const postDelegateValidator = [
    body('name').isString(),
    body('email').normalizeEmail({gmail_remove_dots:false}).isEmail(),
    body('delegateType').isInt().toInt(),
    body('createdAt').isISO8601()
];
const postDelegate = async (req, res, next) => {

    const err =  new Error('Record not found');

    throw err;
    return res.json(req.body);
}

const getDelegates = async (req, res, next) => {
    const delegate = [];
    return res.json(delegate);
}

module.exports = {
    validators: {
        postDelegateValidator
    },
    postDelegate,
    getDelegates
}