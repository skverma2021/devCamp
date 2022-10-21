const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(err);
  //Mongoose CastError
  if (err.name === 'CastError') {
    const message = `BootCamp not found with id: ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose Duplicate Error
  if (err.code === 11000) {
    const message = `Duplicate found with keyPattern/keyValue: ${err.keyPattern.name}/ ${err.keyValue.name}`;
    error = new ErrorResponse(message, 400);
  }

  //Mongoose ValidationErrors

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((t) => t.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || `Server Error`,
  });
};

module.exports = errorHandler;
