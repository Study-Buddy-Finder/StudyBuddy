const db = require('../models/studentsModels');

const studentsController = {};

studentsController.getStudent = (req, res, next) => {
  const query = `SELECT * FROM "public"."students" LIMIT 100
  `;
  
  db.query(query)
  .then((data) => {
    console.log(data.rows);
    return next();
  })
  .catch((err) => next(err));
};

module.exports = studentsController;