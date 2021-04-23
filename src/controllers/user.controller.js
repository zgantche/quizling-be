const userService = require('..//services/user.service');

const getUsers = async (req, res, next) => {
  try {
    let result = await userService.getAllUsers();

    // TODO: replace temporary hardcoded success
    return res.status(200).send({result});
  } catch (err) {
    // TODO: create error handing
    console.log(`User Controller error: ${err}`);
  }
}

module.exports = {
  getUsers
}