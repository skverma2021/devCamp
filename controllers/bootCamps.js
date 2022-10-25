const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   public
exports.getBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(201)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

//@desc     get single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   public
exports.getBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `The BootCamp with id ${req.params.id} was not found`,
        404
      )
    );
  }
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

//@desc     create a bootcamp
//@route    POST /api/v1/bootcamp
//@access   private
exports.createBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

//@desc     update a bootcamp
//@route    PUT /api/v1/bootcamp/:id
//@access   private
exports.updateBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `The BootCamp with id ${req.params.id} was not found`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

//@desc     delete a bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   private
exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `The BootCamp with id ${req.params.id} was not found`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: {},
  });
});
