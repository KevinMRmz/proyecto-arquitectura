const { StatusCodes } = require("http-status-codes");

const notFoundMiddleware = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: "Resource not founded",
    sucess: "false",
  });
};

module.exports = notFoundMiddleware;
