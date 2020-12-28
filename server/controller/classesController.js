const { Pool } = require("pg");
const db = require("../models/model.js");

const classesController = {};

//create
classesController.createClass = (req, res, next) => {
  const params = [req.body.class_name, req.body.subject, req.body.school_id];
  const queryText =
    "INSERT INTO public.classes (class_name, subject, school_id) VALUES ($1, $2, $3);";

  db.query(queryText, params)
    .then((res) => next())
    .catch((err) => next(err));
};

//read
classesController.getClass = (req, res, next) => {
  const params = [req.params.class_id];
  const queryText = "SELECT * FROM public.classes WHERE class_id = $1;";

  db.query(queryText, params)
    .then((result) => {
      res.locals.classes = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

classesController.getAllClasses = (req, res, next) => {
  const queryText = "SELECT * FROM public.classes LIMIT 100;";

  db.query(queryText)
    .then((result) => {
      res.locals.classes = result.rows;
      return next();
    })
    .catch((err) => next(err));
};


classesController.getClassesBySchool = (req, res, next) => {
  const params = [req.params.school_id];
  const queryText = "SELECT * FROM public.classes WHERE school_id = $1;";

  db.query(queryText, params)
    .then((result) => {
      res.locals.classes = result.rows;
      return next();
    })
    .catch((err) => next(err));
};


//update
classesController.updateClassName = (req, res, next) => {
  const params = [req.body.class_name, req.params.class_id];
  const queryText =
    "UPDATE public.users SET class_name = $1 WHERE class_id = $2;";
  db.query(queryText, params)
    .then((result) => {
      res.locals.classes = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//delete
classesController.deleteClass = (req, res, next) => {
  const params = [req.params.class_id];
  const queryText = "DELETE FROM public.classes WHERE class_id = $1;";
  db.query(queryText, params)
    .then((result) => {
      return next();
    })
    .catch((err) => next(err));
};

module.exports = classesController;