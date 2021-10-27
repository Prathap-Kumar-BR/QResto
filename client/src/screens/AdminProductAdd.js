import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading } from "../helpers/loading";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { addProductAction } from "../redux/actions/productActions";

export const AddNewProduct = () => {
  const dispatch = useDispatch();
  const addProductstate = useSelector((state) => state.addProduct);
  const { loading, successMsg, errorMsg } = addProductstate;

  const [name, setName] = useState("");
  const [smallprice, setSmallprice] = useState();
  const [mediumprice, setMediumprice] = useState();
  const [largeprice, setLargeprice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addNewProductHandler = (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    dispatch(addProductAction(product));
  };
  return (
    <div>
      <div className="bg-light text-white mt-3 py-4">
        <div className="container ">
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}

          <h1>Add New Product </h1>

          <form onSubmit={addNewProductHandler}>
            <label className="text-secondary mt-3">Name</label>

            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="text-secondary mt-3">Small Varient Price</label>
            <input
              type="Number"
              placeholder="small varient price"
              className="form-control"
              value={smallprice}
              onChange={(e) => {
                setSmallprice(e.target.value);
              }}
            />
            <label className="text-secondary mt-3">Medium Varient Price</label>
            <input
              type="Number"
              placeholder="medium varient price"
              className="form-control"
              value={mediumprice}
              onChange={(e) => {
                setMediumprice(e.target.value);
              }}
            />
            <label className="text-secondary mt-3">Large Varient Price</label>
            <input
              type="Number"
              placeholder="large varient price"
              className="form-control"
              value={largeprice}
              onChange={(e) => {
                setLargeprice(e.target.value);
              }}
            />

            <label className="text-secondary mt-3">Description</label>
            <input
              type="text"
              placeholder="description"
              className="form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label className="text-secondary mt-3">Category</label>
            <input
              type="text"
              placeholder="category"
              className="form-control"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <div>
              <label className="text-secondary mt-3">Image</label>
              <input
                type="text"
                placeholder="image"
                className="form-control"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-info mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
