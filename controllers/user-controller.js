const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const UserModel = require("../models/user-model");

const getAllUsers = async (req, res) => {
  const users = await UserModel.find();

  res.status(StatusCodes.OK).json({
    data: users,
    sucess: true,
  });
};

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if (!user) {
    throw new NotFoundError("User not founded");
  }

  res.status(StatusCodes.OK).json({
    data: user,
    sucess: "true",
  });
};

const addUser = async (req, res) => {
  const user = await UserModel.create({ ...req.body });

  res.status(StatusCodes.OK).json({
    data: user,
    sucess: "true",
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const newUser = await UserModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { runValidators: true, new: true }
  );

  if (!newUser) {
    throw new NotFoundError("User not founded");
  }

  res.status(StatusCodes.OK).json({
    data: newUser,
    sucess: "true",
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await UserModel.findByIdAndRemove(id);

  res.status(StatusCodes.OK).json({
    data: "deleted user completed",
    sucess: "true",
  });
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
