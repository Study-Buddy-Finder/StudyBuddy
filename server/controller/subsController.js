const { text } = require("express");
const { Pool } = require("pg");
const db = require("../models/model.js");

const subsController = {};

//SCHOOL SUBS
//get all schools based on user_id
subsController.getSchoolSubs = (req, res, next) => {
  const params = [req.params.user_id];
  const queryText = `SELECT schools.* FROM schools LEFT JOIN schoolsubs ON schoolsubs.school_id = schools.school_id WHERE schoolsubs.user_id = $1;`;
  db.query(queryText, params)
    .then((result) => {
      res.locals.schoolSubs = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//add school subscription edge
subsController.subSchool = (req, res, next) => {
  const params = [req.body.user_id, req.body.school_id];
  const queryText =
    "INSERT INTO public.schoolsubs (user_id, school_id) VALUES ($1, $2);";
  console.log(queryText, params);
  db.query(queryText, params)
    .then(() => next())
    .catch((err) => next(err));
};

//delete school subscription edge
subsController.deleteSchoolSub = (req, res, next) => {
  const params = [req.body.user_id, req.body.school_id];
  const queryText =
    "DELETE FROM public.schoolsubs WHERE user_id = $1 AND school_id = $2;";
  console.log(queryText, params);
  db.query(queryText, params)
    .then((result) => {
      return next();
    })
    .catch((err) => next(err));
};

//CLASS SUBS
//get all classes based on user_id
subsController.getClassSubs = (req, res, next) => {
    const params = [req.params.user_id];
    const queryText = `SELECT classes.* FROM classes LEFT JOIN classsubs ON classsubs.class_id = classes.class_id WHERE classsubs.user_id = $1;`;
    db.query(queryText, params)
      .then((result) => {
        res.locals.classSubs = result.rows;
        return next();
      })
      .catch((err) => next(err));
  };
  
  //add class subscription edge
  subsController.subClass = (req, res, next) => {
    const params = [req.body.user_id, req.body.class_id];
    const queryText =
      "INSERT INTO public.classsubs (user_id, class_id) VALUES ($1, $2);";
    console.log(queryText, params);
    db.query(queryText, params)
      .then(() => next())
      .catch((err) => next(err));
  };
  
  //delete class subscription edge
  subsController.deleteClassSub = (req, res, next) => {
    const params = [req.body.user_id, req.body.class_id];
    const queryText =
      "DELETE FROM public.classsubs WHERE user_id = $1 AND class_id = $2;";
    console.log(queryText, params);
    db.query(queryText, params)
      .then((result) => {
        return next();
      })
      .catch((err) => next(err));
  };


//EVENT SUBS
//get all classes based on user_id
subsController.getEventSubs = (req, res, next) => {
    const params = [req.params.user_id];
    const queryText = `SELECT events.* FROM events LEFT JOIN eventsubs ON eventsubs.event_id = classes.event_id WHERE eventsubs.user_id = $1;`;
    db.query(queryText, params)
      .then((result) => {
        res.locals.eventSubs = result.rows;
        return next();
      })
      .catch((err) => next(err));
  };

//get all users based on event_id
subsController.getEventIdSubs = (req, res, next) => {
  const params = [req.params.event_id];
  const queryText = `SELECT users.first_name, users.last_name FROM users
                    LEFT JOIN eventsubs
                    ON users.user_id = eventsubs.user_id
                    WHERE eventsubs.event_id = $1;`;
  db.query(queryText, params)
    .then((result) => {
      res.locals.eventIdSubs = result.rows;
      return next();
    })
    .catch((err) => next(err));
};
  
  //add class subscription edge
  subsController.subEvent = (req, res, next) => {
    const params = [req.body.user_id, req.body.event_id];
    const queryText =
      "INSERT INTO public.eventsubs (user_id, event_id) VALUES ($1, $2);";
    db.query(queryText, params)
      .then(() => next())
      .catch((err) => next(err));
  };
  
  //delete class subscription edge
  subsController.deleteEventSub = (req, res, next) => {
    const params = [req.body.user_id, req.body.event_id];
    const queryText =
      "DELETE FROM public.eventsubs WHERE user_id = $1 AND event_id = $2;";
    console.log(queryText, params);
    db.query(queryText, params)
      .then((result) => {
        return next();
      })
      .catch((err) => next(err));
  };

module.exports = subsController;
