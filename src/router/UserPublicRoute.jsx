import { Route } from "react-router-dom";
import UserPublicRoutes from "../constants/user-public-route";

const UserPublicRoute = () => {
  const PublicRoutelist = UserPublicRoutes;
  return (
    <>
      {PublicRoutelist.map((e) => {
        const Component = e.component;
        return <Route key={e.id} path={e.path} element={<Component />} />;
      })}
    </>
  );
};

export default UserPublicRoute;
