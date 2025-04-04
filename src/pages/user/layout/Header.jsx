import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets/Images/ImageComponent/Images";
import {
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space, Input, Layout, Button, Tooltip, Badge, Dropdown } from "antd";
import {
  MdAppRegistration,
  PiSignIn,
  FaCircleUser,
  MdFavorite,
  LuContactRound,
  RiPagesLine,
} from "../../../assets/Icon/Icon";
import { useSelector } from "react-redux";

const { Header } = Layout;

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favItems = useSelector((state) => state.fav.favItems);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      setUsername(userObj.username);
      setName(userObj.firstName);
    }
  }, []);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("loggedInUser");
    if (isAuthenticated) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickRegister = () => {
    navigate("/registration");
  };

  const handleClickCart = () => {
    navigate("/checkout");
  };

  const handleClickFavorite = () => {
    navigate("/my-favorite");
  };

  const handleClickProfile = () => {
    navigate("/user-profile");
  };

  const handleClickProducts = () => {
    navigate("/product-list");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <Header
      style={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        flexWrap: "wrap",
        boxShadow: "0px 1px 20px grey",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <a>
          <img
            onClick={handleClickLogo}
            src={Images.OrganicLogo}
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
            }}
          />
        </a>
      </div>

      {/* Search Bar */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          minWidth: "300px",
        }}
      >
        <Space.Compact>
          <Input
            placeholder="Search for more than 20000+ Products"
            addonAfter={<SearchOutlined />}
            style={{
              flex: 3,
              fontSize: "16px",
              fontFamily: "sans-serif",
              width: "400px",
            }}
          />
        </Space.Compact>
      </div>
      <div>
        <Button
          style={{ color: "black" }}
          type="link"
          onClick={handleClickProducts}
        >
          Products
        </Button>
      </div>

      {/* Auth Buttons or User Icon */}
      <div
        style={{
          display: "flex",
          gap: "1.5em",
          flexWrap: "wrap",
        }}
      >
        {isLoggedIn ? (
          <>
            <Badge count={cartItems.length}>
              <Button
                onClick={handleClickCart}
                icon={<ShoppingCartOutlined />}
              />
            </Badge>

            <Badge count={favItems.length}>
              <Button onClick={handleClickFavorite} icon={<MdFavorite />} />
            </Badge>

            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <div style={{ textAlign: "center" }}>
                        <FaCircleUser
                          style={{ fontSize: "2.5em", minWidth: "100px" }}
                        />
                        <h3>{name}</h3>
                        <p>{username}</p>
                      </div>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <Button
                        type="link"
                        onClick={handleClickProfile}
                        style={{ color: "black" }}
                      >
                        <UserOutlined /> Profile
                      </Button>
                    ),
                  },
                  {
                    key: "3",
                    label: (
                      <Button
                        type="link"
                        onClick={() => navigate("/about")}
                        style={{ color: "black" }}
                      >
                        <RiPagesLine /> About
                      </Button>
                    ),
                  },

                  {
                    key: "4",
                    label: (
                      <Button
                        type="link"
                        onClick={() => navigate("/contact")}
                        style={{ color: "black" }}
                      >
                        <LuContactRound />
                        Contact
                      </Button>
                    ),
                  },
                  {
                    key: "5",
                    label: (
                      <Button
                        type="link"
                        onClick={handleLogout}
                        style={{ color: "black" }}
                      >
                        <LogoutOutlined /> Logout
                      </Button>
                    ),
                  },
                ],
              }}
              placement="bottomLeft"
            >
              <Button
                style={{ border: "none" }}
                icon={
                  <FaCircleUser style={{ fontSize: "3em", color: "#ffab45" }} />
                }
              />
            </Dropdown>
          </>
        ) : (
          <>
            <Tooltip title="Login">
              <Button onClick={handleClickLogin} icon={<PiSignIn />}>
                Login
              </Button>
            </Tooltip>
            <Tooltip title="Register">
              <Button
                onClick={handleClickRegister}
                icon={<MdAppRegistration />}
              >
                SignUp
              </Button>
            </Tooltip>
          </>
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
