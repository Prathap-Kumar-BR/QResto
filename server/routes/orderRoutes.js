const express = require("express");
const {
  placeorderController,
  userorderController,
  allordersController,
  /*  deliverorderController, */
} = require("../controllers/orderController");

const router = express.Router();

router.post("/placeorder", placeorderController);
router.post("/getuserorders", userorderController);
router.get("/getallorders", allordersController);
/* router.post("/deliverorder", deliverorderController); */
module.exports = router;
