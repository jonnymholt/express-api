const getUsers = (req, res, next) => {
    return res.json([
        { id: 1, name: 'JOnny'},
        { id: 2, name: 'Joel'}
    ]);
}

module.exports = {
    getUsers
}