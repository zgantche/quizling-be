const apiRoute = require('express').Router();

const healthRouter = require('./health.route');

apiRoute.use('/health', healthRouter);

//TODO: move this to routes, or delete
apiRoute.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = apiRoute;