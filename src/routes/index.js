const apiRoute = require('express').Router();

const healthRouter = require('./health.route');

apiRoute.use('/health', healthRouter);

//TODO: temporary route for testing
apiRoute.get('/', (req, res) => {
  res.send({ response: 'Hello World!' }).status(200);
});

module.exports = apiRoute;