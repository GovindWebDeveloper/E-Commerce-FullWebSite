import { Layout, Space, Input } from "antd";
import Images from "../../../assets/Images/ImageComponent/Images";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  AmazonOutlined,
} from "@ant-design/icons";
import "./Footer.css";
import CustomButton from "../../../component/CustomButton";

const { Footer } = Layout;

// const listStyle = {
//   listStyle: "none",
//   padding: "5px",
//   color: "black",
//   fontSize: "15px",
// };

const linkStyle = {
  color: "black",
  fontSize: "1.2em",
};

const FooterComponent = () => {
  return (
    <Footer
      className="footer-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
        margin: " auto",
        gap: "60px",
        backgroundColor: "#dcdedc",
        bottom: "0px",
      }}
    >
      <div>
        <a href="/">
          <img src={Images.OrganicLogo} width="180" alt="Logo" />
        </a>
        <div
          className="footer-social-icons"
          style={{
            fontSize: "25px",
            display: "flex",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <FacebookOutlined />
          <TwitterOutlined />
          <YoutubeOutlined />
          <InstagramOutlined />
          <AmazonOutlined />
        </div>
      </div>
      <div>
        <h2 className="footer-title">ShopSphere</h2>
        <ul className="footer-list">
          {/* <li style={listStyle}>
            <a href="/" style={linkStyle}>
              About Us
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Conditions
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Our Journals
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Career
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Affiliate Programme
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Ultras Press
            </a>
          </li> */}
        </ul>
      </div>
      <div>
        <h2 className="footer-title">Quick Links</h2>
        <ul className="footer-list">
          {/* <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Offers
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Discount Coupons
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Stores
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Track Order
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Shop
            </a>
          </li> */}
        </ul>
      </div>
      <div>
        <h2 className="footer-title">Customer Service</h2>
        <ul className="footer-list">
          {/* <li style={listStyle}>
            <a href="/" style={linkStyle}>
              FAQ
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Contact
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Privacy Policy
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Return & Refund
            </a>
          </li> */}
          {/* <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Cookie Guidelines
            </a>
          </li>
          <li style={listStyle}>
            <a href="/" style={linkStyle}>
              Delivery Information
            </a>
          </li> */}
        </ul>
      </div>
      <div className="footer-subscribe">
        <h2 className="footer-title">Subscribe Us</h2>
        <p style={linkStyle}>
          Subscribe to our newsletter to get <br /> updates about our grand
          offers.
        </p>
        <Space.Compact
          style={{
            width: "100%",
            margin: "1em auto",
          }}
        >
          <Input />
          <CustomButton text={"Submit"} style={{ background: "#ffab45" }} />
        </Space.Compact>
      </div>
    </Footer>
  );
};

export default FooterComponent;
