require("express-async-errors");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const errorHandlerMiddleware = require("./middlewares/error-handler-middleware");
const notFoundMiddleware = require("./middlewares/not-found-middleware");

const userRouter = require("./routes/user-routes");
const hotelRouter = require("./routes/hotel-routes");

app.use(bodyParser.json());

app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/user", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
