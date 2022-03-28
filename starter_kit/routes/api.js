const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;
const Food = require('../models/Food');
const Food_Category = require('../models/Food_Category');
const Order = require('../models/Order');
const Order_Detail = require('../models/Order_Detail');
const User = require('../models/User');

// Api 

// router.get("/food", (req, res) => {
//     Food.findAll()
//         .then((data) => res.json({ data: data}))
//         .catch((err) => res.json({ data: err}));
// });
// router.get("/food_category", (req, res) => {
//     Food_Category.findAll()
//         .then((data) => res.json({ data: data}))
//         .catch((err) => res.json({ data: err}));
// });
// router.get("/order", (req, res) => {
//     Order.findAll()
//         .then((data) => res.json({ data: data}))
//         .catch((err) => res.json({ data: err}));
// });
// router.get("/order_detail", (req, res) => {e
//     Order_Detail.findAll()
//         .then((data) => res.json({ data: data}))
//         .catch((err) => res.json({ data: err}));
// });
// router.get("/user", (req, res) => {
//     User.findAll()
//         .then((data) => res.json({ data: data}))
//         .catch((err) => res.json({ data: err}));
// });

const Order_Details = require('../models/Order_Detail');

const FoodController = require("../controller/FoodController");
const CategoryController = require("../controller/CategoryController");

const MiddlewareFood = require("../middleware/create_update");

router.get('/foods', FoodController.allFood );
router.use('/create_foods', MiddlewareFood.createfood(),FoodController.createFood );
router.use('/expensive_foods', FoodController.priceCondition);
router.use('/update_foods/:id', FoodController.updateFood);
router.get('/delete_foods/:id', FoodController.deleteFood);

router.use('/order_details', (req, res) => {
    Order_Details.findAll()
    .then((data) => res.json({data:data}))
    .catch((err) => res.json({data:err}))
});

router.use('/food_category', CategoryController.allCategory);
router.use('/create_food_category', CategoryController.createCategory);
router.use('/sale_food_category', CategoryController.saleCategory);
router.use('/update_foods_category_sale/:id', CategoryController.idCategory);
router.get('/delete_food_category/:id', CategoryController.deleteCategory);



// router.get("/foods", FoodController.get_foods );

module.exports = router;