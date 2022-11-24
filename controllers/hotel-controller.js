const { StatusCodes } = require("http-status-codes");

const getAllHotels = async (req, res) => {
  res.status(StatusCodes.OK).json({
    data: "all hotels",
    sucess: true,
  });
};

const getHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    data: "hotel",
    sucess: "true",
  });
};

const addHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    data: "hotel added",
    sucess: "true",
  });
};

const updateHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    data: "hotel updated",
    sucess: "true",
  });
};

const deleteHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    data: "delete hotel",
    sucess: "true",
  });
};

module.exports = {
  getAllHotels,
  getHotel,
  updateHotel,
  addHotel,
  deleteHotel,
};
