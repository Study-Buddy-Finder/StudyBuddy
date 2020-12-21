const db = require('../models/studentsModels');

const studentsController = {};

studentsController.getStudent = (req, res, next) => {
  console.log("hello");
  return next();
};

module.exports = studentsController;