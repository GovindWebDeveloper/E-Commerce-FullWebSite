import RouteConstants from "./route";
import Login from "../pages/user/auth/Login";
import Registration from "../pages/user/auth/Register";
import Home from "../pages/user/home/Home";
import About from "../pages/user/about/About";
import Contact from "../pages/user/contact/Contact";
import ProductLists from "../pages/user/products/ProductLists";
import ProductDetails from "../pages/user/products/ProductDetails";

const UserPublicRoutes = [
  {
    id: "login",
    title: "Login",
    path: RouteConstants.LOGIN,
    component: Login,
  },
  {
    id: "registration",
    title: "Registration",
    path: RouteConstants.REGISTRATION,
    component: Registration,
  },
  {
    id: "home",
    title: "Home",
    path: RouteConstants.HOME,
    component: Home,
  },
  {
    id: "product-list",
    title: "Product List",
    path: RouteConstants.PRODUCTLIST,
    component: ProductLists,
  },
  {
    id: "product-details",
    title: "Product Details",
    path: RouteConstants.PRODUCTDETAILS,
    component: ProductDetails,
  },
  {
    id: "about",
    title: "About",
    path: RouteConstants.ABOUT,
    component: About,
  },
  {
    id: "contact",
    title: "Contact",
    path: RouteConstants.CONTACT,
    component: Contact,
  },
];

export default UserPublicRoutes;
