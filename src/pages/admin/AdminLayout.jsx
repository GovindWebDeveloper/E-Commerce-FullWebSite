import { useState } from "react";
import { Button, Divider, Dropdown, Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Images from "../../assets/Images/ImageComponent/Images";
import { motion } from "framer-motion";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaRegMessage, FaCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import adminMenuItems from "../../constants/admin-Menu-Items";
import AdminDropdownItems from "../../constants/admin-Dropdown-items";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const siderWidth = collapsed ? 80 : 200;
  const location = useLocation();
  const navigate = useNavigate();

  // Generate dropdown items by passing navigate
  const dropdownItems = AdminDropdownItems(navigate);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={200}
        style={{
          backgroundColor: "white",
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          zIndex: 1000,
          overflow: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Images.Logo} alt="Logo" width={35} height={35} />
          {!collapsed && <h3 style={{ marginLeft: "10px" }}>ShopSphere</h3>}
        </div>
        <Divider />

        {/* Sidebar Menu */}
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ borderRight: 0 }}
          items={adminMenuItems}
        />
      </Sider>

      {/* Main Layout */}
      <Layout
        style={{
          marginLeft: siderWidth,
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <Header
          style={{
            position: "fixed",
            width: `calc(100% - ${siderWidth}px)`,
            top: 0,
            zIndex: 1000,
            backgroundColor: "white",
            display: "flex",
            padding: "0 20px",
            height: "88px",
            alignItems: "center",
            justifyContent: "flex-end",
            transition: "width 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5em",
              fontSize: "1.3em",
            }}
          >
            <Button
              icon={<IoMdNotificationsOutline />}
              style={buttonStyle}
              aria-label="Notifications"
            />
            <Button
              icon={<MdDarkMode />}
              style={buttonStyle}
              aria-label="Toggle Dark Mode"
            />
            <Button
              icon={<FaRegMessage />}
              style={buttonStyle}
              aria-label="Messages"
            />

            <Dropdown menu={{ items: dropdownItems }} placement="bottom">
              <Button style={buttonStyle} aria-label="User Menu">
                <FaCircleUser style={{ fontSize: "1.2em" }} />
              </Button>
            </Dropdown>

            <Button
              style={buttonStyle}
              icon={<AnimatedSettingsIcon />}
              aria-label="Settings"
            />
          </div>
        </Header>

        {/* Dynamic Content Section */}
        <Content
          style={{
            maxWidth: "100%",
            margin: "6em 1em 2em 1em",
            padding: "2em",
            borderRadius: "8px",
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>

        {/* Footer */}
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            padding: "1em",
          }}
        >
          <p>ShopSphere &copy;2025 created by Govind.</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

// Button Style for Icons
const buttonStyle = {
  border: "none",
  fontSize: "1.5em",
  padding: "0.5em",
  background: "none",
  color: "#000",
  cursor: "pointer",
};

// Animated Settings Icon
const AnimatedSettingsIcon = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <IoSettingsOutline />
  </motion.div>
);

export default AdminLayout;
