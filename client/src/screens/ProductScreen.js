import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export const ProductScreen = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  function cartHandle() {
    dispatch(addToCart(product, quantity, varient));
  }

  return (
    <div className="col-md-3 my-2">
      <div className="card border-success md-5 rounded ">
        <img
          className="card-img-top img-fluid  w-100 "
          src={product.image}
          alt={product.name}
          style={{ height: "220px" }}
        />
        <div className="bg-success  ">
          <div className="d-flex justify-content-between text-center m-2 border-bottom ">
            <p>{product.name}</p>
            <span>Rs. {product.prices[0][varient] * quantity}</span>
          </div>
          <div className="d-flex justify-content-between text-center m-2   ">
            <div>
              <div className="d-inline-flex">
                <span className="p-1"> Size: </span>
                <select
                  className="form-control form-control-sm  "
                  value={varient}
                  onChange={(e) => {
                    setVarient(e.target.value);
                  }}
                >
                  {product.varients.map((varient) => {
                    return <option value={varient}> {varient} </option>;
                  })}
                </select>
              </div>
            </div>
            <div>
              <div className="d-inline-flex">
                <span className="p-1"> Qty: </span>
                <select
                  className="form-control form-control-sm"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                >
                  {[...Array(4).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="bg-success text-center  border-top ">
            <div
              type="button"
              className=" btn btn-success btn-sm   "
              onClick={cartHandle}
            >
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
