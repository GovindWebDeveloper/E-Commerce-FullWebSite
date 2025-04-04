import MyCart from "../pages/user/cart/Cart";
import UserProfile from "../pages/user/home/section/UserProfile";
import MyFavorite from "../pages/user/favorite/Favorite";
import Success from "../pages/user/checkout/Success";
import Cancel from "../pages/user/checkout/Cancel";
import CheckoutFinal from "../pages/user/order/CheckoutFinal";
import RouteConstants from "./route";

const UserPrivateRoutes = [
  {
    id: "my-cart",
    title: "MyCart",
    path: RouteConstants.MYCART,
    component: MyCart,
  },
  {
    id: "user-profile",
    title: "UserProfile",
    path: RouteConstants.USERPROFILE,
    component: UserProfile,
  },
  {
    id: "my-favorite",
    title: "MyFavorite",
    path: RouteConstants.MYFAVORITE,
    component: MyFavorite,
  },
  {
    id: "success",
    title: "Success",
    path: RouteConstants.SUCCESS,
    component: Success,
  },
  {
    id: "cancel",
    title: "Cancel",
    path: RouteConstants.CANCEL,
    component: Cancel,
  },
  {
    id: "checkout",
    title: "Checkout",
    path: RouteConstants.CHECKOUT,
    component: CheckoutFinal,
  },
];

export default UserPrivateRoutes;
