const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require("uuid");
const orderModel = require("../models/orderModel");

exports.placeorderController = async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new orderModel({
        name: currentUser.username,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      await newOrder.save();
      res.status(200).json({
        successMessage:
          "Payment Recived Successfully wait for order confirmation",
      });
    } else {
      return res.status(400).json({
        errorMessage: "Something Went Wrong Payment Fail",
      });
    }
  } catch (err) {
    console.log("placeorderController: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.userorderController = async (req, res) => {
  const { currentUser } = req.body;
  try {
    const currentuserorders = await orderModel.find({
      userid: currentUser._id,
    });

    res.json({ currentuserorders });
  } catch (err) {
    console.log(err, "userorderController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.allordersController = async (req, res) => {
  try {
    const alluserorders = await orderModel.find({});
    res.json({ alluserorders });
  } catch (err) {
    console.log(err, "allordersController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

/* exports.deliverorderController = async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const orders = await orderModel.findOne({ _id: orderid });
    orders.isDelivered = true;
    await orders.save();
    res.status(200).json({
      successMessage:
        "Payment Recived Successfully wait for order confirmation",
    });
  } catch (err) {
    console.log(err, "allordersController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
 */
