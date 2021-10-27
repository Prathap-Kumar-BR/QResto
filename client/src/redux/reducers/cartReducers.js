import { ADD_TO_CART, DELETE_FROM_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const allReadyExit = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (allReadyExit) {
        return {
          ...state,

          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,

          cartItems: [...state.cartItems, action.payload],
        };
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
/* let INITIAL_STATE = {
  cart: [],
};

if (localStorage.getItem("cart")) {
  INITIAL_STATE.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  INITIAL_STATE.cart = [];
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...action.payload],
      };
    case DELETE_FROM_CART:
      return {
        cart: [...action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer; */

/* import {
  ADD_CART_ITEM,
  DECREMENT_QTY,
  EMPTY_CART,
  INCREMENT_QTY,
} from "../constants/cartConstants";

const initstate = {
  cart: [],
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { cart: [...state.cart, action.payload] };

    case INCREMENT_QTY:
      let new_cart = state.cart.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { cart: new_cart };
    case DECREMENT_QTY:
      let dec_cart = state.cart.map((item, i) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      dec_cart = dec_cart.filter((item) => item.quantity > 0);
      return { cart: dec_cart };
    case EMPTY_CART:
      return { cart: [] };
    default:
      return state;
  }
};

export default reducer;
 */
