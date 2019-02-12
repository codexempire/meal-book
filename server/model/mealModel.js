// import json object from mealDB
import meals from './datastore/mealDB';

// class ES6 to control meal
class mealModel {
  static getAllMeal() {
    if (meals.length > 0) return meals;
    return false;
  }
}

export default mealModel;
