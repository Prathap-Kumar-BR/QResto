import { ADD_TO_CART, DELETE_FROM_CART } from "../constants/cartConstants";

export const addToCart =
  (product, quantity, varient) => async (dispatch, getState) => {
    var cartItem = {
      _id: product._id,
      name: product.name,
      image: product.image,
      varient: varient,
      quantity: quantity,
      prices: product.prices,
      price: product.prices[0][varient] * quantity,
      description: product.Pdescription,
    };
    if (cartItem.quantity > 10) {
      alert("Yo cannot add more than 10 quantities");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: DELETE_FROM_CART, payload: product });
      } else {
        dispatch({ type: ADD_TO_CART, payload: cartItem });
      }
    }

    const items = getState().cartReducer.cartItems;

    localStorage.setItem("cartItems", JSON.stringify(items));
  };

export const deleteFromCart = (product) => async (dispatch, getState) => {
  dispatch({ type: DELETE_FROM_CART, payload: product });

  const items = getState().cartReducer.cartItems;

  localStorage.setItem("cartItems", JSON.stringify(items));
};
