const express = require('express');
const tourController = require('../controllers/tourController');

// destructuring
// const {
//   getAllTours,
//   createTour,
//   getTour,
//   updateTour,
//   deleteTour
// } = require('./../controllers/tourController');

// ROUTES
const router = express.Router();

// PARAM MIDDLEWARE
// router.param('id', tourController.checkID);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
