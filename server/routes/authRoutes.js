const express = require("express");
const {
  signinController,
  signupController,
  getAllUsersController,
  deleteUserController,
} = require("../controllers/authController");
const {
  signupValidator,
  signinValidator,
  validatorResult,
} = require("../middleware/validator");
const { authenticatateJWT } = require("../middleware/authenicator");
const router = express.Router();

router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);
router.get("/getallusers", getAllUsersController);
router.post("/deleteuser", authenticatateJWT, deleteUserController);

module.exports = router;
