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
  } catch (error) {
    res.status(400).json({
      success: false,
    });
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
  } catch (error) {
    // res.status(400).json({
    //   success: false,
    // });
    next(
      new ErrorResponse(
        `The BootCamp with id ${req.params.id} was not found`,
        404
      )
    );
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
  } catch (error) {
    res.status(400).json({
      success: false,
    });
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
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc     delete a bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   private
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
