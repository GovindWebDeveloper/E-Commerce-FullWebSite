// filepath: d:\Govind\Ecommerce Website\E-Commerce Website Fresh\e-commerce\src\App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./router/MainRoutes";

function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;