class verify {
  // verify the post request form feilds for new meal
  static addNew(req) {
    if (!req.body.meal || !req.body.price || !req.body.mealUrl) return true;
    return false;
  }

  // verify the put request form fields for edit meal
  static edit(req) {
    if (!req.body.meal || !req.body.price || !req.body.mealUrl) return true;
    return false;
  }
}

export default verify;
