const authModel = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    const user = await authModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        errorMessage: "Email already exists",
      });
    }

    const newUser = new authModel();
    newUser.username = username;
    newUser.email = email;

    newUser.password = await bcrypt.hash(password, 10);

    await newUser.save();
    console.log(newUser);

    res.status(200).json({
      successMessage: "Registration success. Please signin.",
    });
  } catch (err) {
    console.log("signupController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errorMessage: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid credentials",
      });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    jwt.sign(payload, process.env.jwtSecret, (err, token) => {
      if (err) console.log("jwt error: ", err);
      const { _id, username, email, role } = user;

      res.json({
        token,
        user: { _id, username, email, role },
      });
    });
  } catch (err) {
    console.log("signinController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.getAllUsersController = async (req, res) => {
  try {
    const users = await authModel.find({});
    res.json({ users });
  } catch (err) {
    console.log(err, "getAllUsersController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.deleteUserController = async (req, res) => {
  const userid = req.body.userid;
  try {
    await authModel.findOneAndDelete({ _id: userid });

    res.status(200).json({
      successMessage: " User Deleted successfully",
    });
  } catch (err) {
    console.log(err, "deleteUserController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
