const apiRoutes = require('express').Router();

apiRoutes.get('/', (req, res) => {
    res.send({
        route: '/api/',
        method: 'GET'
    });
})

module.exports = apiRoutes;