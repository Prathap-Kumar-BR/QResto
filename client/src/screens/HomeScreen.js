import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductScreen } from "./ProductScreen";
import { getAllProductsAction } from "../redux/actions/productActions";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const getAllProductsstate = useSelector((state) => state.getProducts);

  const { products, loading, errorMsg } = getAllProductsstate;

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="text-center pb-4">{showLoading()}</div>
      ) : errorMsg ? (
        showErrorMsg(errorMsg)
      ) : (
        <>
          <div className="container ">
            <h3 className="p-2 mt-2 border-bottom "> Menu </h3>

            <div className="row">
              {products &&
                products.map((product) => {
                  return <ProductScreen key={product._id} product={product} />;
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
