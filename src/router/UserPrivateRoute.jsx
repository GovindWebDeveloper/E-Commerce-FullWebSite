import { Route, Navigate } from "react-router-dom";
import UserPrivateRoutes from "../constants/user-private-route";

const UserPrivateRoute = () => {
  const PrivateRoutelist = UserPrivateRoutes;
  const isAuthenticated = localStorage.getItem("loggedInUser");

  return (
    <>
      {PrivateRoutelist.map((e) => {
        const Component = e.component;
        return (
          <Route
            key={e.id}
            path={e.path}
            element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
          />
        );
      })}
    </>
  );
};

export default UserPrivateRoute;
