const Bootcamp = require('../models/Bootcamp');

//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all Bootcamps' });
};

//@desc     get single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `show bootcamp with id: ${req.params.id}`,
  });
};

//@desc     create a bootcamp
//@route    POST /api/v1/bootcamp
//@access   private
exports.createBootCamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
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
