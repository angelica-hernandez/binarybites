import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import OrdinaryLayout from "layouts/Ordinary.jsx";
import VIPLayout from "layouts/VIP.jsx";
import ManagerLayout from "layouts/Manager.jsx";
import CookLayout from "layouts/Cook.jsx";
import DeliveryLayout from "layouts/Delivery.jsx";
import SalesLayout from "layouts/Sales.jsx";
import GuestLayout from "layouts/Guest.jsx";
import AuthLayout from "layouts/Auth.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/ordinary" render={props => <OrdinaryLayout {...props} />} />
      <Route path="/vip" render={props => <VIPLayout {...props} />} />
      <Route path="/manager" render={props => <ManagerLayout {...props} />} />
      <Route path="/cook" render={props => <CookLayout {...props} />} />
      <Route path="/delivery" render={props => <DeliveryLayout {...props} />} />
      <Route path="/sales" render={props => <SalesLayout {...props} />} />
      <Route path="/guest" render={props => <GuestLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/ordinary/order" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
