const apiRoute = require('express').Router();

const healthRouter = require('./health.route');
const userRouter = require('./user.route');

apiRoute.use('/health', healthRouter);
apiRoute.use('/user', userRouter);

//TODO: temporary route for testing
// apiRoute.get('/', (req, res) => {
//   res.send({ response: 'Hello World!' }).status(200);
// });

module.exports = apiRoute;