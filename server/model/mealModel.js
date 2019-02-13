// import json object from mealDB
import meals from './datastore/mealDB';

// class ES6 to control meal
class mealModel {
  // get all meals controller
  static getAllMeal() {
    if (meals.length > 0) return meals;
    return false;
  }

  // add a meal controller
  static newMeal(meal, price, mealUrl) {
    const exists = meals.find(item => item.meal === meal);
    if (exists) return false;
    const id = meals.length + 1;
    const add = {
      id,
      meal,
      price,
      mealUrl,
    };
    meals.push(add);
    return add;
  }
}

export default mealModel;
