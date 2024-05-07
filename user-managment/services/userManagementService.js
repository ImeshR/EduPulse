import User from "../models/Users.js";

//get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    return {
      message: "Failed to get all users",
    };
  }
};

//update user by id
const updateUser = async () => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, role } = req.body;
    const updatedUser = { firstName, lastName, email, role };
    const response = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    return response;
  } catch (error) {
    return {
      message: "Failed to update user",
    };
  }
};

//remove user by id
const removeUser = async () => {
  try {
    const { id } = req.params;
    const response = await User.findByIdAndDelete(id);
    return response;
  } catch (error) {
    return {
      message: "Failed to delete user",
    };
  } 
};

export { getAllUsers, updateUser, removeUser };
