import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../constants/userConstants";

export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case GET_USERS_FAIL:
      return {
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        deleteloading: true,
        ...state,
      };

    case DELETE_USER_SUCCESS:
      return {
        deleteloading: false,
        deletesuccessMsg: action.payload,
      };

    case DELETE_USER_FAIL:
      return {
        deleteerrorMsg: action.payload,
        deleteloading: false,
      };
    default:
      return state;
  }
};
