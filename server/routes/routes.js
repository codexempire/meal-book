// import
import express from 'express';
import mealController from '../controller/mealController';

// initiate route
const route = express.Router();

// route for get all meals
route.get('/meals/', mealController.allMeal);

// route for add a meal
route.post('/meals/', mealController.addAMeal);

// route for delete a meal
route.delete('/meals/:id', mealController.removeMeal);

// export route
export default route;
