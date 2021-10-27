import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions/cartActions";
import Checkout from "./Checkout";
import { showLoading } from "../helpers/loading";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";

export const CartScreen = ({ history }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  const checkoutstate = useSelector((state) => state.placeOrder);
  const { paymenterrorMsg, paymentsuccessMsg, paymentloading } = checkoutstate;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const handleGoBackBtn = () => {
    history.goBack();
  };

  return (
    <>
      {paymentloading && (
        <div className="text-center pb-4">{showLoading()}</div>
      )}
      {paymentsuccessMsg && showSuccessMsg(paymentsuccessMsg)}
      {paymenterrorMsg && showErrorMsg(paymenterrorMsg)}
      <section className=" container cart-page  rounded">
        {cartItems.length <= 0 ? (
          <div className="jumbotron bg-success">
            <h1 className="display-4">
              Your cart is empty{" "}
              <button
                className="btn btn-light text-primary ml-4"
                onClick={handleGoBackBtn}
              >
                Add New Item to Cart
              </button>
            </h1>
          </div>
        ) : (
          <>
            <div className="p-2  ">
              <h1 className="display-4">Cart</h1>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-8 p-3 ">
                <table className="table border ">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => {
                      return (
                        <tr key={item._id}>
                          <th scope="row">
                            <img
                              style={{
                                maxWidth: "110px",
                              }}
                              className="img-fluid w-100 img-thumbnail"
                              src={item.image}
                              alt={item.name}
                            />
                          </th>
                          <td className="font-weight-bold ">
                            {item.name} <br />[ {item.varient} ]
                          </td>
                          <td className="font-weight-bold ">
                            {item.quantity} * {item.prices[0][item.varient]} ={" "}
                            {item.price}
                          </td>
                          <td>
                            <div className="btn-group rounded bg-success">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() =>
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity + 1,
                                      item.varient
                                    )
                                  )
                                }
                              >
                                <i
                                  className="fa fa-plus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <button className="btn btn-primary">
                                {item.quantity}
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() =>
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity - 1,
                                      item.varient
                                    )
                                  )
                                }
                              >
                                <i
                                  className="fa fa-minus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => dispatch(deleteFromCart(item))}
                            >
                              <i className="far fa-trash-alt pr-1"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="col-md-4 p-3 border mt-3  ">
                <h2 className="font-weight-bold ">Cart Summary</h2>
                <p className="font-weight-bold  border-bottom">
                  {cartItems.length === 1
                    ? "(1) Item"
                    : `(${cartItems.length}) Items`}
                </p>
                <h4 className="font-weight-bold p-3">
                  Total :- Rs. {subtotal} /-
                </h4>
                <div className=" p-3">
                  <button className="btn btn-warning  btn-block  ">
                    <Checkout subtotal={subtotal} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};
