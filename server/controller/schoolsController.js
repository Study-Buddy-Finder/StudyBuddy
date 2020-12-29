const { Pool } = require("pg");
const db = require("../models/model.js");

const schoolsController = {};

//create
schoolsController.createSchool = (req, res, next) => {
  const params = [req.body.school_name, req.body.school_location];
  const queryText =
    "INSERT INTO public.schools (school_name, school_location) VALUES ($1, $2);";

  db.query(queryText, params)
    .then((res) => next())
    .catch((err) => next(err));
};

//read
schoolsController.getSchool = (req, res, next) => {
  const params = [req.params.school_id];
  const queryText = "SELECT * FROM public.schools WHERE school_id = $1;";

  db.query(queryText, params)
    .then((result) => {
      res.locals.schools = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

schoolsController.getAllSchools = (req, res, next) => {
  const queryText = "SELECT * FROM public.schools LIMIT 100;";

  //promise based syntax
  db.query(queryText)
    .then((result) => {
      res.locals.schools = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//update
schoolsController.updateSchoolName = (req, res, next) => {
  const params = [req.body.school_name, req.params.school_id];
  const queryText =
    "UPDATE public.schools SET school_name = $1 WHERE school_id = $2;";
  db.query(queryText, params)
    .then((result) => {
      res.locals.schools = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//delete
schoolsController.deleteSchool = async (req, res, next) => {
  const params = [req.params.school_id];
  const queryText = "DELETE FROM public.schools WHERE school_id = $1;";
  db.query(queryText, params)
    .then((result) => {
      return next();
    })
    .catch((err) => next(err));
};

module.exports = schoolsController;
