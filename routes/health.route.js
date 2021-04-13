const healthRoute = require('express').Router();

const healthController = require('../controllers/health.controller');

healthRoute.get('/', healthController.getHealth);

module.exports = healthRoute;