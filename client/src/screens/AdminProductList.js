import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../redux/actions/productActions";
import { showLoading } from "../helpers/loading";
import { showErrorMsg } from "../helpers/message";

export const ProductsList = () => {
  const dispatch = useDispatch();

  const getAllProductsstate = useSelector((state) => state.getProducts);

  const { products, loading, errorMsg } = getAllProductsstate;

  const deleteProductstate = useSelector((state) => state.deleteProduct);
  const { deletesuccessMsg, deleteloading, deleteerrorMsg } =
    deleteProductstate;
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <div>
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && <div className="text-center pb-4">{showLoading()}</div>}

      {deletesuccessMsg && showErrorMsg(deletesuccessMsg)}
      {deleteerrorMsg && showErrorMsg(deleteerrorMsg)}
      {deleteloading && <div className="text-center pb-4">{showLoading()}</div>}
      <h1>Products List</h1>

      <table className="table  table-bordered">
        <thead className="thead table-dark ">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>
                    Small:{product.prices[0]["small"]}
                    <br />
                    Medium:{product.prices[0]["medium"]}
                    <br />
                    Large:{product.prices[0]["large"]}
                  </td>

                  <td>{product.category}</td>
                  <td>
                    <div className="col-md-1 my-1">
                      <button
                        onClick={() => {
                          dispatch(deleteProductAction(product._id));
                        }}
                        className="btn btn-outline-warning btn-block"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="col-md-1 my-1">
                      <Link to={`/admin/dashboard/editproduct/${product._id}`}>
                        <button className="btn btn-outline-success btn-block">
                          Edit
                        </button>
                      </Link>
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
