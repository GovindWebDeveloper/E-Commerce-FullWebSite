import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";
import favReducer from "./fav/favSlice";
import userReducer from "./user/userProfileSlice";
import addressReducer from "./address/addressSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    fav: favReducer,
    profile: userReducer,
    address: addressReducer,

  },
});

export default store;
