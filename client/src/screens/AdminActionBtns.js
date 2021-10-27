import React from "react";
import { Link } from "react-router-dom";

const AdminActionBtns = () => (
  <div>
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <i className="fas fa-home"> Admin Dashboard</i>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="bg-dark my-2">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-4 my-1">
            <Link to="/admin/dashboard">
              <button className="btn btn-outline-info btn-block">
                <i className="fas fa-plus"> Users List</i>
              </button>
            </Link>
          </div>

          <div className="col-md-4 my-1">
            <Link to="/admin/dashboard/productlist">
              <button className="btn btn-outline-warning btn-block">
                <i className="fas fa-plus"> Food List</i>
              </button>
            </Link>
          </div>

          <div className="col-md-4 my-1">
            <Link to="/admin/dashboard/productadd">
              <button className="btn btn-outline-warning btn-block">
                <i className="fas fa-plus"> Add Food</i>
              </button>
            </Link>
          </div>

          <div className="col-md-4 my-1">
            <Link to="/admin/dashboard/vieworders">
              <button className="btn btn-outline-success btn-block">
                <i className="fas fa-money-check-alt"> View Orders</i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

export default AdminActionBtns;
