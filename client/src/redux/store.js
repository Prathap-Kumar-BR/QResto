import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addProductReducer,
  deleteProductReducer,
  editProductReducer,
  getAllProductsReducer,
  getProductByIdReducer,
} from "./reducers/productReducers";
import { deleteUserReducer, getAllUsersReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  getAllOrderReducer,
  getUserOrderReducer,
  placeOrderReducer,
} from "./reducers/orderReducers";

const finalReducer = combineReducers({
  addProduct: addProductReducer,
  getProducts: getAllProductsReducer,
  getProductById: getProductByIdReducer,
  editProduct: editProductReducer,
  deleteProduct: deleteProductReducer,
  getAllUsers: getAllUsersReducer,
  deleteUser: deleteUserReducer,
  cartReducer: cartReducer,
  placeOrder: placeOrderReducer,
  getUserOrder: getUserOrderReducer,
  getAllOrder: getAllOrderReducer,
});

const item = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: item,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
