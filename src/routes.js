import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";

var routes = [
    {
      path: "/order",
      name: "Order",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
      layout: "/ordinary"
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/ordinary"
    },
    {
      path: "/user-profile",
      name: "User Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/ordinary"
    },
    {
      path: "/tables",
      name: "Tables",
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
    },
  // GUEST USER
  {
    path: "/order",
    name: "Order",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/guest"
  },
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/guest"
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/guest"
  // },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/guest"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/guest"
  },
  //VIP USER
  {
    path: "/order",
    name: "Order",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/vip"
  },
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/vip"
  },
  //DELIVERY
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/vip"
  // },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/vip"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/vip"
  },

  //MANAGERS
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/manager"
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/managers"
  // },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/manager"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/manager"
  },

    //MANAGERS
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/manager"
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/managers"
  // },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/manager"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/manager"
  },

  //Cooks
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/cooks"
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/cooks"
  // },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/cooks"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/cooks"
  },

    //Sales
    {
      path: "/icons",
      name: "Previous Orders",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/sales"
    },
    // {
    //   path: "/delivery",
    //   name: "Delivery",
    //   icon: "ni ni-pin-3 text-orange",
    //   component: Delivery,
    //   layout: "/sales"
    // },
    {
      path: "/user-profile",
      name: "Sales People",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/sales"
    },
    {
      path: "/tables",
      name: "Ratings",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/sales"
    },

  //Delivery
  {
    path: "/icons",
    name: "Previous Orders",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/delivery"
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/delivery"
  // },
  {
    path: "/user-profile",
    name: "Sales People",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/delivery"
  },
  {
    path: "/tables",
    name: "Ratings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/delivery"
  }

  // // ALL USERS
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];

export default routes;
