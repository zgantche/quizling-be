const { User } = require('../../models');

/**
 * @param {object} attr - User attributes: username, email
 */
const createUser = async attr => {
  if (!attr) {
    throw Error(
      `${new Date()}: Missing user attributes - createUser -  User Service.`
    );
  }

  return User.create({
    username: attr.username,
    email: attr.email
  });
};

/**
 * @param {object} user - User to update
 * @param {object} attr - new User attribute(s) [username, and/or email]
 */
const updateUser = async (user, attr) => {
  if (!user) {
    throw Error(
      `${new Date()}: Missing user - updateUser -  User Service.`
    );
  }

  if (!attr) {
    throw Error(
      `${new Date()}: Missing user attributes - updateUser -  User Service.`
    );
  }

  return user.update(attr);
};

/**
 TODO: Delete function
 */
 const deleteUser = async () => {
  
};

/**
 TODO: Get function(s)
 */
 const getAllUsers = async () => {
  return User.findAll();
};

module.exports = {
  createUser,
  updateUser,
  getAllUsers,
}