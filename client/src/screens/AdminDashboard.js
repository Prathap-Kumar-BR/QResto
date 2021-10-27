import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import AdminActionBtns from "./AdminActionBtns";
import { OrdersList } from "./AdminOrderList";
import { AddNewProduct } from "./AdminProductAdd";
import { EditProduct } from "./AdminProductEdit";
import { ProductsList } from "./AdminProductList";
import { UsersList } from "./AdminUserList";

export const AdminDashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <AdminActionBtns />
        <main>
          <Route
            exact
            path="/admin/dashboard/productadd"
            component={AddNewProduct}
          />
          <Route
            exact
            path="/admin/dashboard/productlist"
            render={(props) => (
              <div>
                <ProductsList {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/admin/dashboard/editproduct/:productid"
            render={(props) => (
              <div>
                <EditProduct {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/admin/dashboard"
            render={(props) => (
              <div>
                <UsersList {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/admin/dashboard/vieworders"
            render={(props) => (
              <div>
                <OrdersList {...props} />
              </div>
            )}
          />
        </main>
      </BrowserRouter>
    </div>
  );
};
