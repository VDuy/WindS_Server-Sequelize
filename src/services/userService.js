const { rejects } = require("assert");
const { resolve } = require("path");
const db = require("../models");
const { User } = require("../models")

const getAllUser = async () => {
  console.log("get all users");
  try {
    const users = await User.findAll();
    onsole.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(getAllUser, null, 2));
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getUserbyId = async (id) => {
  console.log("get account by Id");
  try {
    const userId = await User.findOne({
      where: {
        id: id,
      },
    });
    return userId;
  } catch (error) {
    console.log(error);
    return error;
  }

};


module.exports = {
  getAllUser,
  getUserbyId,

};