// imports
import mealModel from '../model/mealModel';

// meal controller
class mealController {
  static allMeal(req, res) {
    const meals = mealModel.getAllMeal();
    if (meals) res.status(200).json({ status: 200, data: meals });
    res.status(404).json({ status: 404, data: 'No meal found' });
  }
}

export default mealController;
