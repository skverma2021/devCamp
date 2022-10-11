const Bootcamp = require('../models/Bootcamp');

//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();

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

//@desc     get single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   public
exports.getBootCamp = async (req, res, next) => {
  // res.status(200).json({
  //   success: true,
  //   message: `show bootcamp with id: ${req.params.id}`,
  // });
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

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
exports.updateBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `update bootcamp with id: ${req.params.id}`,
  });
};

//@desc     delete a bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   private
exports.deleteBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `delete bootcamp with id: ${req.params.id}`,
  });
};
