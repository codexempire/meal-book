// imports
import mealModel from '../model/mealModel';
import verify from '../middleware/mealMiddleware';

// meal controller
class mealController {
  // get all meal controller
  static allMeal(req, res) {
    const meals = mealModel.getAllMeal();
    if (meals) res.status(200).json({ status: 200, data: meals });
    res.status(404).json({ status: 404, data: 'No meal found' });
  }

  // add a meal controller
  static addAMeal(req, res) {
    const error = verify.addNew(req);
    if (error) res.status(400).json({ status: 400, data: 'Enter all feilds' });
    const { meal, price, mealUrl } = req.body;
    const created = mealModel.newMeal(meal, price, mealUrl);
    if (created) res.status(201).json({ status: 201, data: [created] });
    res.status(500).json({ status: 500, data: 'Meal already exists' });
  }
}

// export meal controller
export default mealController;
