import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Delivery from "views/examples/Delivery.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";

var routes = [
  {
    path: "/index",
    name: "Order",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/ordinary"
  },
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/ordinary"
  },
  {
    path: "/delivery",
    name: "Delivery",
    icon: "ni ni-pin-3 text-orange",
    component: Delivery,
    layout: "/ordinary"
  },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/ordinary"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/ordinary"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
