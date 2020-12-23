const { Pool } = require("pg");
const db = require("../models/model.js");

const usersController = {};

//create
usersController.createUser = (req, res, next) => {
  const params = [req.body.user_name, req.body.user_password, req.body.join_date];
  const queryText =
    "INSERT INTO public.users (user_name, user_password, user_join_date) VALUES ($1, $2, $3);";

  db.query(queryText, params)
    .then((res) => next())
    .catch((err) => next(err));
};



//read
usersController.getUser = (req, res, next) => {
  const params = [req.params.user_id];
  const queryText = "SELECT * FROM public.users WHERE user_id = $1;";

  db.query(queryText, params)
    .then((result) => {
      res.locals.user = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

usersController.getAllUsers = (req, res, next) => {
  const queryText = "SELECT * FROM public.users LIMIT 100;";

  //promise based syntax
  db.query(queryText)
    .then((result) => {
      res.locals.users = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//authenticate name/password combo
usersController.userAuth = (req, res, next) => {
  const params = [req.body.user_name, req.body.user_password]
  const queryText = "SELECT * FROM public.users WHERE user_id = $1 AND user_password = $2;";
  db.query(queryText, params)
  .then(result => {
    res.locals.user = result.rows
    return next();
  })
  .catch((err) => next(err));

}

//update
usersController.updateUserName = (req, res, next) => {
  const params = [req.body.user_name, req.params.user_id];
  const queryText =
    "UPDATE public.users SET user_name = $1 WHERE  user_id = $2;";
  db.query(queryText, params)
    .then((result) => {
      res.locals.users = result.rows;
      return next();
    })
    .catch((err) => next(err));
};

//delete
usersController.deleteUser = async (req, res, next) => {
  const params = [req.params.user_id];
  const queryText = "DELETE FROM public.users WHERE user_id = $1;";
  db.query(queryText, params)
    .then((result) => {
      return next();
    })
    .catch((err) => next(err));
};

module.exports = usersController;
