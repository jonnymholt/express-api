const { body } = require('express-validator');

const postDelegateValidator = [
    body('name').isString(),
    body('email').normalizeEmail({gmail_remove_dots:false}).isEmail(),
    body('delegateType').isInt().toInt(),
    body('createdAt').isISO8601()
];
const postDelegate = (req, res, next) => {
    return res.json(req.body);
}

module.exports = {
    validators: {
        postDelegateValidator
    },
    postDelegate
}