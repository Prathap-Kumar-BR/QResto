import axios from "axios";
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

export const addProductAction = (product) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      "/api/product/addproduct",
      { product },
      config
    );

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: response.data.successMessage,
    });
  } catch (err) {
    console.log("addProduct api error: ", err);
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getAllProductsAction = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get("/api/product/getallproducts", config);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data.products });
  } catch (err) {
    console.log("getProducts api error: ", err);
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getProductByIdAction = (productid) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTBYID_REQUEST });
  try {
    const response = await axios.get(
      `/api/product/getproductbyid/${productid}`
    );
    dispatch({ type: GET_PRODUCTBYID_SUCCESS, payload: response.data });
  } catch (err) {
    console.log("getProductById api error: ", err);
    dispatch({
      type: GET_PRODUCTBYID_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

export const editProductAction = (editedProduct) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_REQUEST });
  try {
    const response = await axios.post("/api/product/editproduct", {
      editedProduct,
    });

    dispatch({
      type: EDIT_PRODUCT_SUCCESS,
      payload: response.data.successMessage,
    });
    window.location.href = "/admin/dashboard";
  } catch (err) {
    console.log("editProducts api error: ", err);
    dispatch({
      type: EDIT_PRODUCT_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

export const deleteProductAction = (productid) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    const response = await axios.post("/api/product/deleteproduct", {
      productid,
    });

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: response.data.successMessage,
    });
    window.location.reload();
  } catch (err) {
    console.log("deleteProducts api error: ", err);
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};
