import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  isAuthenticated: !!localStorage.getItem("loggedInUser"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { username, password, firstName, lastName, gender, userType } =
        action.payload;
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.username === username);
      if (userExists) {
        state.error = "User already exists with this username.";
        return;
      }
      users.push({ username, password, firstName, lastName, gender, userType });
      localStorage.setItem("users", JSON.stringify(users));
      console.log("User Registered Successfully");
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        state.user = foundUser;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.user = null;
        state.isAuthenticated = false;
        state.error = "Invalid Credentials";
        console.error("Invalid Credentials");
      }
    },
    logout: (state) => {
      localStorage.removeItem("loggedInUser");
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { registerUser, loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
