import axios from "axios";
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../constants/userConstants";

export const getAllUsersAction = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get("/api/auth/getallusers", config);
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data.users });
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};

export const deleteUserAction = (userid) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    const response = await axios.post("/api/auth/deleteuser", {
      userid,
    });

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data.successMessage,
    });
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: err.response.data.errorMessage,
    });
  }
};
