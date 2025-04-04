import React from "react";
import Images from "../../../../assets/Images/ImageComponent/Images";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Hero = ({
  productVarieties = "14k+",
  happyCustomers = "50k+",
  storeLocations = "10+",
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${Images.Banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minWidth: "100%",
        minHeight: "100vh",
        marginTop: "0",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          gap: "20px",
          flexDirection: "column",
          padding: "1em",
        }}
      >
        <img
          src={Images.OrganicLogo}
          alt="Organic Store Logo"
          width={250}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h3
          style={{
            color: "white",
            fontSize: "3em",
            fontFamily: "cursive",
            textAlign: "center",
          }}
        >
          Shop, <br /> Men&apos;s Wear, Women&apos;s Wear <br />& Electronics at
          One place
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "2em",
            marginTop: "1.5em",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3em", color: "white" }}>
              {productVarieties}
            </h2>
            <p style={{ fontSize: "1.5em", color: "white" }}>
              PRODUCT VARIETIES
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3em", color: "white" }}>
              {happyCustomers}
            </h2>
            <p style={{ fontSize: "1.5em", color: "white" }}>HAPPY CUSTOMERS</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3em", color: "white" }}>
              {storeLocations}
            </h2>
            <p style={{ fontSize: "1.5em", color: "white" }}>STORE LOCATIONS</p>
          </div>
        </div>

        <Button
          style={{
            fontSize: "1.5em",
            padding: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "white",
            backgroundColor: "green",
            marginTop: "1.5em",
            cursor: "pointer",
          }}
          onClick={() => navigate("/product-list")}
        >
          START SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default Hero;
