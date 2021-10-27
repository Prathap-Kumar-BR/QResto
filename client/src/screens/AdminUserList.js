import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading } from "../helpers/loading";
import { showErrorMsg } from "../helpers/message";
import {
  deleteUserAction,
  getAllUsersAction,
} from "../redux/actions/userActions";

export const UsersList = () => {
  const dispatch = useDispatch();

  const getAllUsersstate = useSelector((state) => state.getAllUsers);

  const { users, loading, errorMsg } = getAllUsersstate;

  const deleteUserstate = useSelector((state) => state.deleteUser);
  const { deletesuccessMsg, deleteloading, deleteerrorMsg } = deleteUserstate;

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  return (
    <div>
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && <div className="text-center pb-4">{showLoading()}</div>}
      {deletesuccessMsg && showErrorMsg(deletesuccessMsg)}
      {deleteerrorMsg && showErrorMsg(deleteerrorMsg)}
      {deleteloading && <div className="text-center pb-4">{showLoading()}</div>}

      <h1>Users List</h1>

      <table className="table  table-bordered">
        <thead className="thead table-dark ">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.username}</td>

                  <td>{user.email}</td>
                  <td>
                    <div className="col-md-1 my-1">
                      <button
                        onClick={() => {
                          dispatch(deleteUserAction(user._id));
                        }}
                        className="btn btn-outline-warning btn-block"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="col-md-1 my-1">
                      {/*     <Link to={`/admin/dashboard/editproduct/${product._id}`}> */}
                      <button className="btn btn-outline-success btn-block">
                        Edit
                      </button>
                      {/*       </Link> */}
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
