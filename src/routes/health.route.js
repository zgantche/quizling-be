const healthRouter = require('express').Router();

const healthController = require('../controllers/health.controller');

healthRouter.get('/', healthController.getHealth);

module.exports = healthRouter;