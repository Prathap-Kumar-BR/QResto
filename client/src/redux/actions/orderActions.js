import axios from "axios";
import {
  GET_ALL_ORDER_FAIL,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_USER_ORDER_FAIL,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const placeOrderAction =
  (token, subtotal, currentUser) => async (dispatch, getState) => {
    dispatch({ type: PLACE_ORDER_REQUEST });
    const cartItems = getState().cartReducer.cartItems;
    try {
      const response = await axios.post("/api/order/placeorder", {
        token,
        subtotal,
        currentUser,
        cartItems,
      });

      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: response.data.successMessage,
      });
      localStorage.removeItem("cartItems");
      window.location.href = "/order";
    } catch (err) {
      console.log("placeOrderAction api error: ", err);
      dispatch({
        type: PLACE_ORDER_FAIL,
        payload: err.response.data.errorMessage,
      });
    }
  };

export const getUserOrdersAction = (currentUser) => async (dispatch) => {
  dispatch({ type: GET_USER_ORDER_REQUEST });
  try {
    const response = await axios.post("/api/order/getuserorders", {
      currentUser,
    });

    dispatch({
      type: GET_USER_ORDER_SUCCESS,
      payload: response.data.currentuserorders,
    });
  } catch (err) {
    console.log("getUserOrdersAction api error: ", err);
    dispatch({
      type: GET_USER_ORDER_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getAllOrdersAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDER_REQUEST });
  try {
    const response = await axios.get("/api/order/getallorders");
    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: response.data.alluserorders,
    });
  } catch (err) {
    console.log("getAllOrdersAction api error: ", err);
    dispatch({
      type: GET_ALL_ORDER_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

/* export const deliverOrderAction = (orderid) => async (dispatch) => {
  dispatch({ type: GET_DELIVER_ORDER_REQUEST });
  try {
    const response = await axios.post("/api/order/deliverorder", {
      orderid,
    });

    const orders = await axios.get("/api/order/getallorders");
    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: orders.data.alluserorders,
    });
    alert("order deliver");
  } catch (err) {
    console.log("getAllOrdersAction api error: ", err);
  }
};
 */
