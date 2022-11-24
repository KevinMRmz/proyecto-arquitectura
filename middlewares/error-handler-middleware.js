const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  let error = {
    message: err.message || "Something went wrong, try again later",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  if (err.code && err.code === 11000) {
    error = new BadRequestError(`${Object.keys(err)}`);
  }

  res.status(error.statusCode).json({
    message: error.message,
    success: "false",
  });
};

module.exports = errorHandlerMiddleware;
