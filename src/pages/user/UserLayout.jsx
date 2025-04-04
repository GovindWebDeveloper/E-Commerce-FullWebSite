import { useLocation } from "react-router-dom";
// import MainRoute from "../routes/MainRoute";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Layout } from "antd";
import UserRoute from "./UserRoute";
const { Content } = Layout;

const UserLayout = () => {
  const location = useLocation();
  const noHeaderFooterRoute = [
    "/login",
    "/registration",
    "/checkoutpage",
    "/success",
    "/cancel",
    "/dashboard",
  ];

  const hideHeaderFooter = noHeaderFooterRoute.includes(location.pathname);

  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {!hideHeaderFooter && <Header />}
      <Content style={{ flex: 1 }}>
        <UserRoute />
      </Content>

      {!hideHeaderFooter && <Footer style={{ textAlign: "center" }} />}
    </Layout>
  );
};

export default UserLayout;
