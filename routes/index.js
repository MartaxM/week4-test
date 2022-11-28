var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let recipes = [];

router.get("/recipe/:food", (req, res) => {
  let food = {
    "name": req.params.food,
    "instructions": [],
    "ingredients": []
  }

  recipes.push(food);

  res.json(food);
});

module.exports = router;
