const express = require('express');
const toursControllers = require('../controllers/toursController');

const router = express.Router();

router
  .route('/')
  .get(toursControllers.getAllTour)
  .post(toursControllers.createTour);
router
  .route('/:id')
  .get(toursControllers.getTourById)
  .patch(toursControllers.updateTour)
  .delete(toursControllers.deleteTour);

module.exports = router;
