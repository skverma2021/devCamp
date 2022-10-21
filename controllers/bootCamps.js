const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();

    res.status(201).json({
      success: true,
      count: bootcamp.length,

      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

//@desc     get single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   public
exports.getBootCamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    // res.status(400).json({
    //   success: false,
    // });
    next(err);
  }
};

//@desc     create a bootcamp
//@route    POST /api/v1/bootcamp
//@access   private
exports.createBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

//@desc     update a bootcamp
//@route    PUT /api/v1/bootcamp/:id
//@access   private
exports.updateBootCamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

//@desc     delete a bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   private
exports.deleteBootCamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};
