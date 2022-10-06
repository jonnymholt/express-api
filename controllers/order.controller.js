const { poolPromise, sql } = require('../data/db');

const getOrders = async(req, res, next) => {
    const pool = await poolPromise;
    const request = pool.request();

    const result = await request.query('SELECT * FROM orders as o');

    res.json(result);
}

const getOrderById = async(req, res, next) => {
    const pool = await poolPromise;
    const request = pool.request();
    request.input('orderId', sql.Int, req.params.id);

    const result = await request.query('SELECT * FROM orders as o WHERE o.id = @orderId');

    res.json(result);
}

module.exports = {
    getOrders,
    getOrderById
}