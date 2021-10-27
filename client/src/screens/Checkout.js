import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
import { placeOrderAction } from "../redux/actions/orderActions";
import { useDispatch } from "react-redux";

const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const tokenHandler = (token) => {
    dispatch(placeOrderAction(token, subtotal, currentUser));
  };

  const showCheckOut = () => (
    <>
      {!isAuthenticated() && (
        <Fragment>
          <Link to="/signin" className="nav-link bg-dark">
            Sign In and Proceed to Checkout
          </Link>
        </Fragment>
      )}
      {isAuthenticated() && isAuthenticated().role === 0 && (
        <Fragment>
          <StripeCheckout
            amount={subtotal * 100}
            shippingAddress
            token={tokenHandler}
            currency="INR"
            stripeKey="pk_test_51JhaP3SHUh9X5o9sxjjyC1S0WF1sDFpgIJ6oWGblSLLcpnKmIS5QSjxPHT0v73Cb9Sx028j8xyDdNMpGhMth8meK002GbYQoE4"
          >
            Pay Now
          </StripeCheckout>
        </Fragment>
      )}
    </>
  );
  // render
  return <checkout id="checkout">{showCheckOut()}</checkout>;
};

export default withRouter(Checkout);
