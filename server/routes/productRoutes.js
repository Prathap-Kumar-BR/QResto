const express = require("express");

const {
  addProductController,
  getAllProductsController,
  editProductController,
  deleteProductController,
  getProductControllerById,
} = require("../controllers/productController");
const { authenticatateJWT } = require("../middleware/authenicator");

const router = express.Router();

router.post("/addproduct", authenticatateJWT, addProductController);
router.get("/getallproducts", getAllProductsController);
router.post("/editproduct", authenticatateJWT, editProductController);
router.post("/deleteproduct", authenticatateJWT, deleteProductController);
router.get("/getproductbyid/:productid", getProductControllerById);

module.exports = router;
