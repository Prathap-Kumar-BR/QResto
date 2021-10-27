import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersAction,
  /*   deliverOrderAction, */
} from "../redux/actions/orderActions";
import { showLoading } from "../helpers/loading";
import { showErrorMsg } from "../helpers/message";

export const OrdersList = () => {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getAllOrder);

  const { alluserorders, loading, errorMsg } = orderState;

  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, []);

  return (
    <div>
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && <div className="text-center pb-4">{showLoading()}</div>}
      <h1>Orders List</h1>

      <table className="table  table-bordered ">
        <thead className="thead table-dark ">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alluserorders &&
            alluserorders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button
                        className="btn btn-outline-success btn-block"
                        /*  onClick={() => {
                          dispatch(deliverOrderAction(order._id));
                        }} */
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
