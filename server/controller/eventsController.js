const { Pool } = require("pg");
const db = require("../models/model.js");

const eventsController = {};

//create
eventsController.createEvent = (req, res, next) => {
  const params = [req.body.event_name, req.body.event_location, req.body.class_id];
  const queryText =
    "INSERT INTO public.events (event_name, event_location, class_id) VALUES ($1, $2, $3);";

  db.query(queryText, params)
    .then((res) => next())
    .catch((err) => next(err));
};

//read
eventsController.getEvent = (req, res, next) => {
  const params = [req.params.event_id];
  const queryText = "SELECT * FROM public.events WHERE event_id = $1;";

  db.query(queryText, params)
    .then((result) => {
      res.locals.events = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

eventsController.getAllEvents = (req, res, next) => {
  const queryText = "SELECT * FROM public.events LIMIT 100;";

  //promise based syntax
  db.query(queryText)
    .then((result) => {
      res.locals.events = result.rows;
      return next();
    })
    .catch((err) => next(err));
};



eventsController.getEventsByClass = (req, res, next) => {
  const params = [req.params.class_id];
  const queryText = "SELECT * FROM public.events WHERE class_id = $1;";

  db.query(queryText, params)
    .then((result) => {
      res.locals.events = result.rows;
      return next();
    })
    .catch((err) => next(err));
};


//update
eventsController.updateEventLocation = (req, res, next) => {
  const params = [req.body.event_location, req.params.event_id];
  const queryText =
    "UPDATE public.users SET event_location = $1 WHERE event_id = $2;";
  db.query(queryText, params)
    .then((result) => {
      res.locals.events = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//delete
eventsController.deleteEvent = async (req, res, next) => {
  const params = [req.params.event_id];
  const queryText = "DELETE FROM public.events WHERE event_id = $1;";
  db.query(queryText, params)
    .then((result) => {
      return next();
    })
    .catch((err) => next(err));
};

module.exports = eventsController;