// filepath: d:\Govind\Ecommerce Website\E-Commerce Website Fresh\e-commerce\src\pages\NotAuthorized.jsx
const NotAuthorized = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3em", color: "#ff4d4f" }}>403</h1>
      <p style={{ fontSize: "1.5em" }}>
        You are not authorized to access this page.
      </p>
      <a href="/admin" style={{ color: "blue", fontSize: "1.2em" }}>
        Go Back to Dashboard
      </a>
    </div>
  );
};

export default NotAuthorized;
