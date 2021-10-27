import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { getUserOrdersAction } from "../redux/actions/orderActions";

export const OrderScreen = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrder);
  const { currentuserorders, loading, errorMsg } = orderState;

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getUserOrdersAction(currentUser));
  }, []);

  return (
    <div className=" bg-success">
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && <div className="text-center pb-4">{showLoading()}</div>}
      <div className="jumbotron bg-warning">
        <h1 className="display-4">Your Total Orders </h1>
      </div>
      {currentuserorders.map((order) => {
        return (
          <div>
            {order.orderItems.map((item) => {
              return (
                <div>
                  <div className="container ">
                    <div className="row ">
                      <div className="col-md-12  p-3 ">
                        <table className="table border   ">
                          <thead className=" text-center bg-warning">
                            <tr className="border">
                              <th className="border" scope="col">
                                Product Details
                              </th>
                              <th className="border" scope="col">
                                Address
                              </th>
                              <th scope="col">Payment Info</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody className="border">
                            <td className="font-weight-bold border col-md-4">
                              {item.name} <br /> [{item.varient}] *{" "}
                              {item.quantity} ={item.price}
                            </td>
                            <td className="font-weight-bold border col-md-4">
                              Adrress: {order.shippingAddress.street},
                              {order.shippingAddress.city},
                              {order.shippingAddress.country},
                              <br />
                              Pincode: {order.shippingAddress.pincode}
                            </td>
                            <td>
                              Order Amount: {order.orderAmount} <br />
                              Date: {order.createdAt.substring(0, 10)} <br />
                              Transction Id: {order.transactionId}
                              <br />
                              Order Id: {order._id}
                            </td>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
