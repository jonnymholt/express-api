const { validationResult, param  } = require('express-validator');

// Global check valid function, to be called after validation chain but before controller
const validate = (validations) => {
    return async (req, res, next) => {

        // Check the validations sequentially only one error at a time.
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length) break;
        }

        // Check validation for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            const extractedErrors = []
            errors.array().map(err => extractedErrors.push({ 'param': err.param, 'error': err.msg }))
            return res.status(422).json({
                message: 'Validation failed',
                errors: extractedErrors,
            })
        } else {

            // Call next middleware
            next();
        }
    }
}

module.exports = {
    validate
}