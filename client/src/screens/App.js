import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import Header from "./Header";
import Signin from "./SignIn";
import Signup from "./SignUp";
import { AdminDashboard } from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import { HomeScreen } from "./HomeScreen";
import { CartScreen } from "./CartScreen";
import { OrderScreen } from "./OrderScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/order" exact component={OrderScreen} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
