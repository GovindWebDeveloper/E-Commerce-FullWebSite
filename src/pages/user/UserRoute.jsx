import { Route, Routes } from "react-router-dom";
import UserPrivateRoute from "../../router/UserPrivateRoute";
import UserPublicRoute from "../../router/UserPublicRoute";
import NotFound from "../user/home/NotFound";
import TopLoadingBar from "../../component/loaders/TopLoadingBar";

const UserRoute = () => {
  return (
    <>
      <TopLoadingBar />
      <Routes>
        {UserPublicRoute()}
        {UserPrivateRoute()}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserRoute;
