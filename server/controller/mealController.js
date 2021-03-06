// imports
import mealModel from '../model/mealModel';
import verify from '../middleware/mealMiddleware';

// meal controller
class mealController {
  // get all meals controller
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

  // remove a meal controller
  static removeMeal(req, res) {
    const id = parseInt(req.params.id, 10);
    const deleted = mealModel.deleteMeal(id);
    if (deleted) res.status(200).json({ status: 200, data: [deleted] });
    res.status(404).json({ status: 404, data: 'No meal found' });
  }

  // edit a meal controller
  static putMeal(req, res) {
    const error = verify.edit(req);
    if (error) res.status(400).json({ status: 400, data: 'Failed input fields not filled completely' });
    const id = parseInt(req.params.id, 10);
    const { meal, price, mealUrl } = req.body;
    const change = mealModel.changeMeal(id, meal, price, mealUrl);
    if (change) {
      res.status(200).json({ status: 200, data: [change] });
    }
    res.status(500).json({ status: 500, data: 'Failed to change meal details' });
  }
}

// export meal controller
export default mealController;
