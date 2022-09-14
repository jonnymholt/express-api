
const consoleLogRequest = (req, res, next) => {
    console.log(req);
    next();
}

const consoleLogResponse = (req, res, next) => {
    console.log(res);
    next();
}

module.exports = {
    consoleLogRequest,
    consoleLogResponse
};