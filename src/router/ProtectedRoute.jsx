import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  let loggedInUser;

  try {
    const storedUser = localStorage.getItem("loggedInUser");
    loggedInUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing loggedInUser from localStorage:", error);
    loggedInUser = null;
  }

  // Redirect to login if the user is not authenticated
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  const userRole = loggedInUser.userType;

  // Redirect to "Not Authorized" if the user does not have the required role
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/not-authorized" replace />;
  }

  // Render the children if the user is authenticated and authorized
  return children;
};

export default ProtectedRoute;
