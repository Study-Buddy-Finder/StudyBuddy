const express = require("express");
const usersController = require("../controller/usersController.js");
const schoolsController = require("../controller/schoolsController.js");
const classesController = require("../controller/classesController.js");
const eventsController = require("../controller/eventsController.js");
const subsController = require("../controller/subsController.js");
const router = express.Router();

//-----------------------------------USERS-------------------------------
//-------GET-----
//get route for auth, set body.user_name and body.user_password
router.get("/users/auth/:user_name/:user_password", usersController.userAuth, (req, res) => {
    return res.status(200).json(res.locals.user)
})

//get route for specific user, set user_id param
router.get("/users/:user_id", usersController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

//get route for all users
router.get("/users", usersController.getAllUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});


//------POST-----
//post route for create user, set body.first_name, last_name, user_name, user_password, user_email, user_location
router.post("/users", usersController.createUser, (req, res) => {
  return res.status(200).send("successfully created user");
});

//post route for update user by id, set body.user_name
router.post("/users/:user_id", usersController.updateUserName, (req, res) => {
  return res.status(200).send("successfully updated user");
});

//----DELETE----
//delete route for delete user by id
router.delete("/users/:user_id", usersController.deleteUser, (req, res) => {
  return res.status(200).send("successfully deleted user");
});

//-------------------------------Schools---------------------------------------------
//-------GET-----
//get route for all schools
router.get("/schools", schoolsController.getAllSchools, (req, res) => {
  return res.status(200).json(res.locals.schools);
});

//get route for specific school
router.get("/schools/:school_id", schoolsController.getSchool, (req, res) => {
  return res.status(200).json(res.locals.schools);
});

//------POST-----
//post route for create new School, set body.school_name and body.location
router.post("/schools/", schoolsController.createSchool, (req, res) => {
  return res.status(200).send("successfully created school");
});

//post route for update school name by id, set body.school_name
router.post(
  "/schools/:school_id",
  schoolsController.updateSchoolName,
  (req, res) => {
    return res.status(200).send("successfully updated school");
  }
);

//----DELETE----
//delete route for delete school by id
router.delete(
  "/schools/:school_id",
  schoolsController.deleteSchool,
  (req, res) => {
    return res.status(200).send("successfully deleted school");
  }
);

//-------------------------------Classes---------------------------------------------
//-------GET-----
//get route for all schools
router.get("/classes", classesController.getAllClasses, (req, res) => {
  return res.status(200).json(res.locals.classes);
});

//get route for specific class
router.get("/classes/:class_id", classesController.getClass, (req, res) => {
  return res.status(200).json(res.locals.classes);
});

//get class based on school id
router.get("/classes/school/:school_id", classesController.getClassesBySchool, (req, res) => {
  return res.status(200).json(res.locals.classes)
})

//------POST-----
//post route for create new class, body.class_name, body.subject and set body.school_name
router.post("/classes/", classesController.createClass, (req, res) => {
  return res.status(200).send("successfully created school");
});

//post route for update class name by id, set body.class_name
router.post(
  "/classes/:class_id",
  classesController.updateClassName,
  (req, res) => {
    return res.status(200).send("successfully updated class name");
  }
);

//----DELETE----
//delete route for delete class by id
router.delete(
  "/classes/:class_id",
  classesController.deleteClass,
  (req, res) => {
    return res.status(200).send("successfully deleted class");
  }
);

//-------------------------------Events---------------------------------------------
//-------GET-----
//get route for all events
router.get("/events", eventsController.getAllEvents, (req, res) => {
  return res.status(200).json(res.locals.events);
});

//get route for specific event
router.get("/events/:event_id", eventsController.getEvent, (req, res) => {
  return res.status(200).json(res.locals.events);
});

//get events based on class id
router.get("/events/class/:class_id", eventsController.getEventsByClass, (req, res) => {
  return res.status(200).json(res.locals.events)
})

//------POST-----
//post route for create new Event, set body.event_name and body.event_location
router.post("/events/", eventsController.createEvent, (req, res) => {
  return res.status(200).send("successfully created event");
});

//post route for update event name by id, set body.event_location, body.event_id
router.post(
  "/events/:event_id",
  eventsController.updateEventLocation,
  (req, res) => {
    return res.status(200).send("successfully updated event location");
  }
);

//----DELETE----
//delete route for delete school by id
router.delete("/events/:event_id", eventsController.deleteEvent, (req, res) => {
  return res.status(200).send("successfully deleted event");
});

//-----------------------------------SUBS-----------------------------------------------
//-----SchoolSubs
//get route for user school subscriptions based on user_id
router.get("/schoolsub/:user_id", subsController.getSchoolSubs, (req, res) => {
  return res.status(200).json(res.locals.schoolSubs);
});

//post route for subscribe to school, set body.user_id and body.school_id
router.post("/schoolsub/", subsController.subSchool, (req, res) => {
  return res.status(200).send("successfully subscribed to school");
});

//delete route for delete schoolsub, set body.user_id and body.school_id
router.delete("/schoolsub/", subsController.deleteSchoolSub, (req, res) => {
  return res.status(200).send("successfully removed school subscription");
});
//-----ClassSubs
//get route for user class subscriptions based on user_id
router.get("/classsub/:user_id", subsController.getClassSubs, (req, res) => {
  return res.status(200).json(res.locals.classSubs);
});

//post route for subscribe to class, set body.user_id and body.class_id
router.post("/classsub/", subsController.subClass, (req, res) => {
  return res.status(200).send("successfully subscribed to class");
});

//delete route for delete classsub, set body.user_id and body.class_id
router.delete("/classsub/", subsController.deleteClassSub, (req, res) => {
  return res.status(200).send("successfully removed class subscription");
});
//-----EventSubs
//get route for user event subscriptions based on user_id
router.get("/eventsub/:user_id", subsController.getEventSubs, (req, res) => {
  return res.status(200).json(res.locals.eventSubs);
});

//post route for subscribe to event, set body.user_id and body.event_id
router.post("/eventsub/", subsController.subEvent, (req, res) => {
  return res.status(200).send("successfully subscribed to event");
});

//delete route for delete schoolsub, set body.user_id and body.event_id
router.delete("/eventsub/", subsController.deleteEventSub, (req, res) => {
  return res.status(200).send("successfully removed event subscription");
});
//
module.exports = router;
