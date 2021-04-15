const healthService = require('../services/health.service');

const getHealth = async (req, res, next) => {
    try {
        let result = await healthService.getHealth();

        // TODO: replace temporary hardcoded success
        return res.status(200).send({result});
    } catch (err) {
        // TODO: create error handing
    }
}

module.exports = {
    getHealth
}