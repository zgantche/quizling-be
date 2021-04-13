const apiRoute = require('express').Router();

const healthRouter = require('./health.route');

apiRoute.use('/health', healthRouter);

module.exports = apiRoute;