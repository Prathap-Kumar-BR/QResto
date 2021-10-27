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

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        paymentloading: true,
        ...state,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        loading: false,
        paymentsuccessMsg: action.payload,
      };
    case PLACE_ORDER_FAIL:
      return {
        paymenterrorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getUserOrderReducer = (
  state = { currentuserorders: [] },
  action
) => {
  switch (action.type) {
    case GET_USER_ORDER_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_USER_ORDER_SUCCESS:
      return {
        loading: false,
        currentuserorders: action.payload,
      };

    case GET_USER_ORDER_FAIL:
      return {
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getAllOrderReducer = (state = { alluserorders: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_ALL_ORDER_SUCCESS:
      return {
        loading: false,
        alluserorders: action.payload,
      };

    case GET_ALL_ORDER_FAIL:
      return {
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
