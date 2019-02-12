// import
import express from 'express';
import mealController from '../controller/mealController';

// initiate route
const route = express.Router();

// routes
route.get('/meals/', mealController.allMeal);

// export route
export default route;
