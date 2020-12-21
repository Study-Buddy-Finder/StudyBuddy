const express = require('express');

const studentsController = require('../controllers/studentsController');

const router = express.Router();

router.get('/', studentsController.getStudent, (req, res) => 
  res.status(200).send("sent")
);

module.exports = router;