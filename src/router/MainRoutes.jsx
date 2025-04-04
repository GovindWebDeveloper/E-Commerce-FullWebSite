import { Route, Routes } from "react-router-dom";
import UserLayout from "../pages/user/UserLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminLayout from "../pages/admin/AdminLayout";
import Orders from "../pages/admin/orders/Orders";
import NotAuthorized from "../pages/NotAuthorized";
import NotFound from "../pages/user/home/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import ProductCategory from "../pages/admin/productsCategory/ProductCategory";
import UserMain from "../pages/admin/users/UserMain";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="category" element={<ProductCategory />} />
        <Route path="users" element={<UserMain />} />

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/not-authorized" element={<NotAuthorized />} />
    </Routes>
  );
};

export default MainRoutes;
