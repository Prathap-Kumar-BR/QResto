import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTBYID_FAIL,
  GET_PRODUCTBYID_REQUEST,
  GET_PRODUCTBYID_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        successMsg: action.payload,
      };

    case ADD_PRODUCT_FAIL:
      return {
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getAllProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case GET_PRODUCTS_FAIL:
      return {
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTBYID_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_PRODUCTBYID_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case GET_PRODUCTBYID_FAIL:
      return {
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editProductReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_REQUEST:
      return {
        editloading: true,
        ...state,
      };

    case EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
        editsuccessMsg: action.payload,
      };

    case EDIT_PRODUCT_FAIL:
      return {
        editerrorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return {
        deleteloading: true,
        ...state,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        deleteloading: false,
        deletesuccessMsg: action.payload,
      };

    case DELETE_PRODUCT_FAIL:
      return {
        deleteerrorMsg: action.payload,
        deleteloading: false,
      };
    default:
      return state;
  }
};
